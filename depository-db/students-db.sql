create table users
(
  users_id SERIAL PRIMARY KEY,
  users_firstname VARCHAR(50),
  users_lastname VARCHAR(50),
  birth_date DATE,
  users_email text,
  users_password text,
  course VARCHAR(100),
  training_year INT
);

insert into users (users_firstname, users_lastname, birth_date, users_email, users_password, course, training_year)
	values 
		('Alexandre', 'Domingues', '2002-12-01', 'a.dom@mail.com', '123abc456def', 'Dev web', 2020),
		('Anthony', 'Mathieu', '2002-12-01', 'anthony.m@email.fr', 'abc123def456', 'Dev web', 2018),
		('Arnaud', 'Arranaz', '2002-12-01', 'arn.aranaz@mail.com', '987xyz654qsd', 'Paie', 2024),
		('Bittori', 'Alfaro', '2002-12-01', 'bit.alfaro@email.fr', '123456abcdef', 'Dev web', 2020),
		('Damien', 'Di Luca', '2002-12-01', 'dam.di-luc@mail.com', 'abcdef123456', 'Projet web', 2022),
		('Liam', 'Noublanche', '2002-12-01', 'liam.nou@email.com', '987654xyzfkr', 'Projet web', 2023),
		('Iban', 'Paul Ortiz', '2002-12-01', 'iban.paul@mail.com', '147aze852tyu', 'Paie', 2024),
		('Marc', 'Belly', '2002-12-01', 'marc.belly@sncfmail.com', '369852trecvg', 'Paie', 2024),
		('Joakym', 'Ancelin', '2002-12-01', 'joancellin@mail.com', '753951freder', 'Projet web', 2024),
		('Thibault', 'Depeige', '2002-12-01', 'thib.dep@mail.com', '951842sezfsm', 'Dev web', 2019),
		('Nicolas', 'Chivite', '1990-07-26', 'nic.chiv@email.com', 'ldsfp8s7f564', 'Dev web', 2024);

select * from users

CREATE TABLE message
(
  msg_id SERIAL PRIMARY KEY,
  msg_firstname varchar(50),
  msg_lastname varchar(50),
  msg_email varchar(100),
  phone varchar(15),
  content text,
  receiver int,
  FOREIGN KEY (receiver) REFERENCES users(users_id)
);

insert into message (msg_firstname, msg_lastname, msg_email, phone, content, receiver)
    values
        ('Jean', 'Machin', 'jean.machin@mail.com', '0123456789', 'Ceci est un message de test pour intégrer une base de données pour Arnaud', 3),
        ('Jean', 'Machin', 'jean.machin@mail.com', '0123456789', 'Ceci est un message de test pour intégrer une base de données pour Bittori', 4),
        ('Jean', 'Machin', 'jean.machin@mail.com', '0123456789', 'Ceci est un message de test pour intégrer une base de données pour Thibault', 10),
        ('Jean', 'Machin', 'jean.machin@mail.com', '0123456789', 'Ceci est un message de test pour intégrer une base de données pour Thibault', 10),
        ('Jean', 'Machin', 'jean.machin@mail.com', '0123456789', 'Ceci est un message de test pour intégrer une base de données pour Anthony', 2),
        ('Jean', 'Machin', 'jean.machin@mail.com', '0123456789', 'Ceci est un message de test pour intégrer une base de données pour Iban', 7);

select * from message

SELECT users_firstname, users_lastname, content
FROM users INNER JOIN message ON users.users_id = message.receiver;


delete from users where lastname = 'Chivite';

update users set course = 'Paie' where lastname = 'Depeige';