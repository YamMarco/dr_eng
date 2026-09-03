-- Supabase schema for the flat content model. Not wired up yet — a
-- LessonNode maps 1:1 onto a `lessons` row (content as JSONB).

create table lessons (
  id text primary key,
  section text not null,
  title_he text not null,
  title_en text,
  code text not null,
  required jsonb not null default '[]',
  position jsonb not null default '{"x":0,"y":0}',
  big boolean not null default false,
  image_url text,
  content jsonb not null
);

create table lesson_progress (
  user_id uuid references auth.users(id) on delete cascade,
  lesson_id text references lessons(id) on delete cascade,
  rounds_done int not null default 0,
  completed_at timestamptz,
  primary key (user_id, lesson_id)
);
