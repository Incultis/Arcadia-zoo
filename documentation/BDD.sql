CREATE DATABASE arcadiatest;

/*Création des tables*/
CREATE TABLE User (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password CHAR(60) NOT NULL,
    role VARCHAR(20) NOT NULL
);

CREATE TABLE CommentaireHabitat (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    avis VARCHAR(300) NOT NULL,
    detail VARCHAR(300),
    isWritten INT(11) NOT NULL,
    FOREIGN KEY (isWritten) REFERENCES User(id)
);

CREATE TABLE Habitat ( 
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(50) NOT NULL,
    description VARCHAR(200) NOT NULL,
    commentaire INT(11) NULL,
    editBy INT (11) NOT NULL,
    FOREIGN KEY (commentaire) REFERENCES CommentaireHabitat(id),
    FOREIGN KEY (editBy) REFERENCES User(id)
);

CREATE TABLE InformationAnimal (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nourriture VARCHAR(50) NOT NULL,
    quantité INT(10) NOT NULL,
    date DATE NOT NULL, /*à confirmer*/
    isWritten INT(11) NOT NULL,
    FOREIGN KEY (isWritten) REFERENCES User(id)
);

CREATE TABLE Animal ( 
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    prenom VARCHAR(50) NOT NULL, 
    race VARCHAR(60) NOT NULL,
    description VARCHAR(200) NOT NULL,
    information INT(11) NULL,
    editBy INT(11) NOT NULL,
    FOREIGN KEY (information) REFERENCES InformationAnimal(id),
    FOREIGN KEY (editBy) REFERENCES User(id)
);



CREATE TABLE Image (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(50) NOT NULL,
    idAnimal INT(11) NULL,
    idHabitat INT(11) NULL,
    FOREIGN KEY (idAnimal) REFERENCES Animal(id),
    FOREIGN KEY (idHabitat) REFERENCES Habitat(id)
);

CREATE TABLE Service (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(50) NOT NULL,
    description VARCHAR(60) NOT NULL,
    isWritten INT(11) NOT NULL,
    FOREIGN KEY (isWritten) REFERENCES User(id)
);

CREATE TABLE MailVisiteur (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    titre VARCHAR(50) NOT NULL,
    description VARCHAR(300) NOT NULL,
    email VARCHAR(50) NOT NULL,
    isWritten INT(11) NOT NULL,
    FOREIGN KEY (isWritten) REFERENCES User(id)
);



CREATE TABLE InformationVeterinaire (
    idInfo INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    etat VARCHAR(50) NOT NULL,
    detail VARCHAR(300) NOT NULL,
    FOREIGN KEY (idInfo) REFERENCES InformationAnimal(id)
);



CREATE TABLE AvisVisiteur (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    pseudo VARCHAR(50) NOT NULL,
    commentaire VARCHAR(300) NOT NULL,
    isWritten INT(11) NOT NULL,
    FOREIGN KEY (isWritten) REFERENCES User(id)
);

/*DATA*/

INSERT INTO user (nom, email, password, role) VALUES ("José", "admin@admin.com", "$2y$10$.vGA1O9wmRjrwAVXD98HNOgsNpDczlqm3Jq7KnEd1rVAGv3Fykk1a", "ADMIN");
INSERT INTO habitat (nom, description, editBy) VALUES ("Savane", "Habitat de type savane", 1);
INSERT INTO animal (prenom, race, description, editBy) VALUES ("Léon", "Lion", "Léon le plus grand des lions !", 1);
INSERT INTO service (nom, description, isWritten) VALUES ("Visite guidée", "Visite organisée par nos employé entièrement gratuite !", 1);