-- Send the welcome email when someone joins the waitlist.
--
-- The insert path itself is untouched: the browser still posts its row to PostgREST, and this
-- trigger hands the send off to pg_net, which queues the request and returns immediately. If the
-- Edge Function or the email provider is down, the row is still stored and the signup still works.
--
-- The function URL and the shared bearer token live in Vault, not in this file, so no secret is
-- ever committed. Insert them once per environment (see the README note below) — until they exist
-- the trigger quietly does nothing, which is the right behaviour for a fresh branch database.

create extension if not exists pg_net;

create or replace function public.waitlist_welcome_notify()
returns trigger
language plpgsql
-- security definer: the insert runs as `anon`, which must not be able to read Vault itself.
security definer
set search_path = ''
as $$
declare
  fn_url text;
  fn_token text;
begin
  select decrypted_secret into fn_url
    from vault.decrypted_secrets where name = 'waitlist_welcome_url';
  select decrypted_secret into fn_token
    from vault.decrypted_secrets where name = 'waitlist_welcome_token';

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
      'table', 'waitlist',
      'schema', 'public',
      'record', to_jsonb(new)
    ),
    timeout_milliseconds := 5000
  );

  return new;
end;
$$;

-- Postgres grants EXECUTE to PUBLIC on every new function, which would make this a callable
-- endpoint for `anon`. Triggers do not need the grant, so take it away.
revoke execute on function public.waitlist_welcome_notify() from public;
revoke execute on function public.waitlist_welcome_notify() from anon, authenticated;

drop trigger if exists waitlist_welcome on public.waitlist;

create trigger waitlist_welcome
  after insert on public.waitlist
  for each row
  execute function public.waitlist_welcome_notify();

-- One-time, per environment, with the real values (never committed):
--
--   select vault.create_secret(
--     'https://<project-ref>.supabase.co/functions/v1/waitlist-welcome',
--     'waitlist_welcome_url'
--   );
--   select vault.create_secret('<the shared token>', 'waitlist_welcome_token');
