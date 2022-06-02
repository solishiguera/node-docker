CREATE TABLE user_ms(
  id SERIAL PRIMARY KEY,
  email VARCHAR(128) UNIQUE,
  hashed_password VARCHAR(256),
  is_active BOOLEAN DEFAULT FALSE
);

INSERT INTO user_ms(email, hashed_password) VALUES('diegosolish@gmail.com', 'pws');
SELECT * FROM user_ms;