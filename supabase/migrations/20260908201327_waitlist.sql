-- Waitlist signups from the landing page.
-- Anonymous visitors may insert their own row and nothing else: there is no
-- select/update/delete policy, so the publishable key cannot read the list back.

create table public.waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  locale text,
  created_at timestamptz not null default now(),
  constraint waitlist_email_shape check (
    email ~ '^[^@[:space:]]+@[^@[:space:]]+\.[^@[:space:]]+$'
    and length(email) between 6 and 254
  ),
  constraint waitlist_locale_shape check (locale is null or locale ~ '^[a-z]{2}$')
);

-- One row per address, case-insensitive.
create unique index waitlist_email_key on public.waitlist (lower(email));

alter table public.waitlist enable row level security;

create policy "anon can join the waitlist"
  on public.waitlist
  for insert
  to anon
  with check (true);

grant insert on table public.waitlist to anon;
