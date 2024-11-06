/* Création table students avec insertions des valeurs */
CREATE TABLE students
(
  students_id INT PRIMARY KEY NOT NULL,
  firstname VARCHAR(50),
  lastname VARCHAR(50),
  birth_date DATE
);

INSERT INTO students (students_id, firstname, lastname, birth_date)
 	VALUES 
    (1, 'Petit', 'Gregory', '2000-12-18'),
    (2, 'Petit', 'Emile', '1875-10-25'),
    (3, 'Monique', 'Olivier', '2014-01-01'),
    (4, 'Xavier', 'Dupont de Lignonnes', '2012-12-12');
SELECT * FROM students; /* affichage de la table */

/* Suppression de données dans la table students */
DELETE FROM students
WHERE firstname = 'Petit';
SELECT * FROM students;

/* Création table message avec la FK pour appeler données de la table students */
CREATE TABLE message
(
  message_id INT PRIMARY KEY NOT NULL,
  content TEXT,
  creation_date DATE,
  author INT,
  FOREIGN KEY (author) REFERENCES students(students_id)
);

INSERT INTO message (message_id, content, creation_date, author)
	VALUES 
    (1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', '2024-03-14', 3),
    (2, 'Proin id sodales tellus. In pharetra ipsum id arcu bibendum iaculis.', '2000-12-12', 4);
SELECT * FROM message;

/* Join des 2 tableaux pour afficher l'identité des auteurs des messages */
SELECT firstname, lastname, content
FROM students 
INNER JOIN message ON students.students_id = message.author;

/* Transaction ajout 1 lignes dans students et suppression message*/
BEGIN TRANSACTION;
INSERT INTO students (students_id, firstname, lastname, birth_date)
 	VALUES (5, 'Le Petit', 'Alexandre', '1999-05-08');
DELETE FROM message WHERE message_id = 2;
SELECT * FROM students, message;
COMMIT 