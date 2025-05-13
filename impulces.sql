CREATE DATABASE Impulces; 
USE Impulces;

CREATE TABLE `usuarios` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Usuario` varchar(120) NOT NULL,
  `Sede` varchar(80) NOT NULL,
  `Fecha_nacimiento` date NOT NULL,
  `Correo` varchar(255) NOT NULL,  
  `Password` varchar(255) NOT NULL,
  `Programa` varchar(80) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `emprendimientos` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre_servicio` varchar(100) NOT NULL,
  `Categoria_servicio` varchar(100) NOT NULL,
  `Descripcion_servicio` TEXT DEFAULT NULL,
  `Img_1` varchar(500) NOT NULL,
  `Img_2` varchar(500) DEFAULT NULL,
  `Img_3` varchar(500) DEFAULT NULL,
  `Img_4` varchar(500) DEFAULT NULL,
  `Img_5` varchar(500) DEFAULT NULL,
  `Creado_por` varchar(120) DEFAULT NULL, 
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

ALTER TABLE `usuarios`
  ADD UNIQUE KEY `UQ_Usuario` (`Usuario`), 
  ADD UNIQUE KEY `UQ_Correo` (`Correo`); 

ALTER TABLE `emprendimientos`
    ADD FOREIGN KEY (`Creado_por`)
    REFERENCES `usuarios`(`Usuario`)
    ON DELETE SET NULL 
    ON UPDATE CASCADE;  