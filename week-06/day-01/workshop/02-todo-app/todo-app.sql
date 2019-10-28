CREATE DATABASE IF NOT EXISTS W6D1_todo_app;
USE W6D1_todo_app;
SELECT
  DATABASE();
CREATE TABLE todos(
    todo_id INT unsigned auto_increment PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT NULL,
    due DATE NOT NULL,
    done BOOLEAN NOT NULL
  );
-- rename a column --
ALTER TABLE todos
  rename column name TO todo_name;
-- insertion --
INSERT INTO todos (todo_name, description, due, done)
VALUES
  ('drinking', NULL, '2019-10-28', false),
  ('eating', NULL, '2019-10-29', false),
  ('sleeping', NULL, '2019-10-29', false),
  ('cooking', NULL, '2019-10-30', false),
  ('cooking', NULL, '2019-10-30', false),
  ('cleaning', NULL, '2019-10-30', false);
-- deletion --
  -- delete from (
  --     select
  --       *,
  --       row_number() over (
  --         partition by todo_name
  --         order by
  --           todo_name
  --       ) rn
  --     from todos
  --     as table1;
  --   )
  -- where
  --   rn > 1;
delete from todos
where
  id = 5;
-- update --
update todos
set
  done = true;
-- selection --
select
  *
from todos
where
  todo_name = 'drinking';