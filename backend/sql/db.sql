CREATE TABLE IF NOT EXISTS catalogs(
  id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  code text NOT NULL CHECK (code <> '') UNIQUE,
  description text,
  type_catalog text
);

CREATE TABLE IF NOT EXISTS books(
  id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  title text NOT NULL CHECK (title <> ''),
  description text,
  urlImage text,
  register_date date NOT NULL,
  author text
);

CREATE TABLE IF NOT EXISTS inventories(
  id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  inventory_code text UNIQUE,
  book_id INTEGER REFERENCES books(id)
);

CREATE TABLE IF NOT EXISTS users(
  id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  name text NOT NULL CHECK (name <> ''),
  middle_name text,
  last_name text,
  sex text,
  birtdate date,
  cell_phone text,
  rol text REFERENCES catalogs(code)
);

CREATE TABLE IF NOT EXISTS loans(
  id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  days_loan integer,
  status text REFERENCES catalogs(code),
  loan_date date,
  inventory_id INTEGER REFERENCES inventories(id),
  user_id INTEGER REFERENCES users(id)
);


