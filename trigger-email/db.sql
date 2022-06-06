CREATE TABLE email_ms(
  id SERIAL PRIMARY KEY,
  from_email VARCHAR(128),
  to_email VARCHAR(128),
  content VARCHAR(512)
);

INSERT INTO email_ms(from_email, to_email, content) 
VALUES('solishiguera00@gmail.com', 'diegosolish@gmail.com', 'Hi Diego! How are you?');

INSERT INTO user_ms(email, hashed_password) VALUES('diegosolish@gmail.com', 'pws');
SELECT * FROM user_ms;