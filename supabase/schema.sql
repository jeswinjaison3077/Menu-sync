-- =====================================================================
-- Schema for the project — run this in Supabase Dashboard → SQL Editor
-- =====================================================================

create extension if not exists "pgcrypto";

-- ---------- login_users ----------
create table if not exists public.login_users (
  id            uuid primary key default gen_random_uuid(),
  email         text not null unique,
  password_hash text not null,
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);
create index if not exists login_users_email_idx on public.login_users (lower(email));
alter table public.login_users enable row level security;
create policy "Anyone can sign up"
  on public.login_users for insert with check (true);

-- ---------- restaurants ----------
create table if not exists public.restaurants (
  id              uuid primary key default gen_random_uuid(),
  restaurant_name text not null,
  owner_name      text not null,
  email           text not null unique,
  password_hash   text not null,
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);
create index if not exists restaurants_email_idx on public.restaurants (lower(email));
create index if not exists restaurants_name_idx  on public.restaurants (restaurant_name);
alter table public.restaurants enable row level security;
create policy "Anyone can register a restaurant"
  on public.restaurants for insert with check (true);

-- ---------- shared updated_at trigger ----------
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end;
$$;

create trigger login_users_set_updated_at
  before update on public.login_users
  for each row execute function public.set_updated_at();

create trigger restaurants_set_updated_at
  before update on public.restaurants
  for each row execute function public.set_updated_at();
