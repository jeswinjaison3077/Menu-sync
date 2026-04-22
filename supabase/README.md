# Supabase – Database Schema & Migrations

This folder contains the SQL migrations that define the database schema for the project.

## 📁 Folder Structure

```
supabase/
├── README.md                 ← this file
└── migrations/
    ├── 20260422000000_create_login_users.sql
    └── 20260422000001_create_restaurants.sql
```

Migrations are timestamped and run in order. Each file is idempotent (`if not exists`) so re-running is safe.

---

## 🗄️ Tables

### 1. `login_users`
Stores credentials for users who sign up via the **Login / Signup** form.

| Column          | Type          | Notes                                  |
|-----------------|---------------|----------------------------------------|
| `id`            | `uuid` (PK)   | Auto-generated with `gen_random_uuid()`|
| `email`         | `text` UNIQUE | User's login email                     |
| `password_hash` | `text`        | **Never** store plain-text passwords   |
| `created_at`    | `timestamptz` | Defaults to `now()`                    |
| `updated_at`    | `timestamptz` | Auto-updated via trigger               |

**Indexes:** `lower(email)` for fast case-insensitive lookups.

---

### 2. `restaurants`
Stores restaurant accounts created via the **Start Free** form.

| Column            | Type          | Notes                                |
|-------------------|---------------|--------------------------------------|
| `id`              | `uuid` (PK)   | Auto-generated                       |
| `restaurant_name` | `text`        | Display name of the restaurant       |
| `owner_name`      | `text`        | Full name of the owner               |
| `email`           | `text` UNIQUE | Contact / login email                |
| `password_hash`   | `text`        | Hashed password                      |
| `created_at`      | `timestamptz` | Defaults to `now()`                  |
| `updated_at`      | `timestamptz` | Auto-updated via trigger             |

**Indexes:** `lower(email)`, `restaurant_name`.

---

## 🔒 Row Level Security (RLS)

RLS is **enabled** on both tables.

- ✅ `INSERT` is allowed for everyone (so signup forms work).
- ❌ `SELECT`, `UPDATE`, `DELETE` are **denied** by default.
- 🔐 Add authenticated policies later when you wire up real login sessions.

---

## 🚀 Running Migrations

### Option A — Supabase CLI (local / self-hosted)
```bash
supabase db push
```

### Option B — Supabase Dashboard
1. Open your project → **SQL Editor**
2. Paste the contents of each `.sql` file (in order)
3. Click **Run**

---

## ✍️ Adding a New Migration

1. Create a new file in `supabase/migrations/` named:
   ```
   YYYYMMDDHHMMSS_short_description.sql
   ```
2. Write your `CREATE` / `ALTER` statements.
3. Make it idempotent (`if not exists`, `if exists`).
4. Commit and run the migration.

> ⚠️ **Never edit an old migration that has already been applied.** Create a new one instead.
