DROP TABLE IF EXISTS books CASCADE;
DROP TABLE IF EXISTS chapters CASCADE;


CREATE TABLE books(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  subject VARCHAR(50) NOT NULL,
  current_page INTEGER,
  is_finished BOOLEAN
);

CREATE TABLE chapters(
  id SERIAL PRIMARY KEY,
  chapter_number INTEGER,
  current_page INTEGER,
  is_finished BOOLEAN,
  content TEXT,
  book_id INTEGER
);





INSERT INTO books (name, subject, current_page, is_finished)
VALUES ('JavaScript Basics', 'JavaScript', 1, false);

INSERT INTO books (name, subject, current_page, is_finished)
VALUES ('Python Basics', 'Python', 1, true);

INSERT INTO books (name, subject, current_page, is_finished)
VALUES ('SQL Basics', 'SQL', 1, false);


INSERT INTO chapters (chapter_number,  book_id, current_page, is_finished, content)
VALUES (1, 1, 1, false, 'This is the content for chapter 1 of book 1 This is the content
for chapter 1 of book 1This is the content for chapter 1 of book 1This is the content for
chapter 1 of book 1This is the content for chapter 1 of book 1This is the content for
chapter 1 of book 1This is the content for chapter 1 of book 1This is the content for
chapter 1 of book 1This is the content for chapter 1 of book 1This is the content for
chapter 1 of book 1This is the content for chapter 1 of book 1');

INSERT INTO chapters (chapter_number,  book_id, current_page, is_finished, content)
VALUES (1, 2, 1, false, 'This is the content for chapter 1 of book 2');



