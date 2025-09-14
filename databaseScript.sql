CREATE DATABASE niceistdb;
USE niceistdb;

CREATE TABLE notes (
	idNote INT AUTO_INCREMENT PRIMARY KEY,
    noteDescription VARCHAR (200) NOT NULL,
    noteChecked BOOLEAN DEFAULT 0 NOT NULL
);