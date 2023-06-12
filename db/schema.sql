CREATE TABLE IF NOT EXISTS users (
  id INT PRIMARY KEY,
  username VARCHAR(40),
  firstName VARCHAR(40),
  lastName VARCHAR(40),
  email VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS jobs (
  id INT PRIMARY KEY,
  name VARCHAR(100),
  user_id INT,
  FOREIGN KEY(user_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS entry_types (
  id INT PRIMARY KEY,
  name VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS locations (
  id INT PRIMARY KEY,
  name VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS clients (
  id INT PRIMARY KEY,
  name VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS entries (
  id INT PRIMARY KEY,
  date DATE,
  type_id INT,
  location_id INT,
  client_id INT,
  rate FLOAT,
  hours FLOAT,
  nonCashTotal FLOAT,
  cashTotal FLOAT,
  datePaid DATE,
  user_id INT,
  job_id INT,
  FOREIGN KEY(type_id) REFERENCES entry_types(id),
  FOREIGN KEY(location_id) REFERENCES locations(id),
  FOREIGN KEY(client_id) REFERENCES clients(id),
  FOREIGN KEY(user_id) REFERENCES users(id),
  FOREIGN KEY(job_id) REFERENCES jobs(id)
);

CREATE TABLE IF NOT EXISTS addOns (
  id INT PRIMARY KEY,
  reason VARCHAR(255),
  amount FLOAT,
  isTip BOOLEAN,
  entry_id INT,
  FOREIGN KEY(entry_id) REFERENCES entries(id)
);

CREATE TABLE IF NOT EXISTS expenses (
  id INT PRIMARY KEY,
  reason VARCHAR(255),
  amount FLOAT,
  reimbursed BOOLEAN,
  entry_id INT,
  FOREIGN KEY(entry_id) REFERENCES entries(id)
);