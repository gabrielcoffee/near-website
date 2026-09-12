-- Messages from the /contact/ page.
-- Same shape as the waitlist: anonymous visitors may insert their own row and nothing else.
-- There is no select/update/delete policy, so the publishable key cannot read messages back.

create table public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  platform text not null,
  reason text not null,
  message text not null,
  locale text,
  created_at timestamptz not null default now(),
  constraint contact_name_length check (length(btrim(name)) between 1 and 80),
  constraint contact_email_shape check (
    email ~ '^[^@[:space:]]+@[^@[:space:]]+\.[^@[:space:]]+$'
    and length(email) between 6 and 254
  ),
  constraint contact_platform_value check (platform in ('ios', 'android', 'other')),
  constraint contact_reason_value check (reason in ('scroll', 'ads', 'curious', 'data')),
  constraint contact_message_length check (length(btrim(message)) between 1 and 2000),
  constraint contact_locale_shape check (locale is null or locale ~ '^[a-z]{2}$')
);

alter table public.contact_messages enable row level security;

create policy "anon can send a message"
  on public.contact_messages
  for insert
  to anon
  with check (true);

grant insert on table public.contact_messages to anon;

-- Forward each message to the inbox through the `contact-notify` Edge Function.
-- Same pattern as waitlist_welcome_notify: pg_net queues the call and returns, so a dead
-- provider loses the notification, never the stored message. URL and token live in Vault
-- (`contact_notify_url`, `contact_notify_token`); until both exist the trigger does nothing.

create extension if not exists pg_net;

create or replace function public.contact_message_notify()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  fn_url text;
  fn_token text;
begin
  select decrypted_secret into fn_url
    from vault.decrypted_secrets where name = 'contact_notify_url';
  select decrypted_secret into fn_token
    from vault.decrypted_secrets where name = 'contact_notify_token';

  if fn_url is null or fn_token is null then
    return new;
  end if;

  perform net.http_post(
    url := fn_url,
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer ' || fn_token
    ),
    body := jsonb_build_object(
      'type', 'INSERT',
      'table', 'contact_messages',
      'schema', 'public',
      'record', to_jsonb(new)
    ),
    timeout_milliseconds := 5000
  );

  return new;
end;
$$;

revoke execute on function public.contact_message_notify() from public;
revoke execute on function public.contact_message_notify() from anon, authenticated;

drop trigger if exists contact_message_notify on public.contact_messages;

create trigger contact_message_notify
  after insert on public.contact_messages
  for each row
  execute function public.contact_message_notify();

-- One-time, per environment, with the real values (never committed):
--
--   select vault.create_secret(
--     'https://<project-ref>.supabase.co/functions/v1/contact-notify',
--     'contact_notify_url'
--   );
--   select vault.create_secret('<the shared token>', 'contact_notify_token');
