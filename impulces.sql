-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 01, 2025 at 06:45 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `impulces`
--

-- --------------------------------------------------------

--
-- Table structure for table `emprendimientos`
--

CREATE TABLE `emprendimientos` (
  `Id` int(11) NOT NULL,
  `Nombre_servicio` varchar(100) NOT NULL,
  `Categoria_servicio` varchar(100) NOT NULL,
  `Descripcion_servicio` text DEFAULT NULL,
  `Img_1` varchar(500) NOT NULL,
  `Img_2` varchar(500) DEFAULT NULL,
  `Img_3` varchar(500) DEFAULT NULL,
  `Img_4` varchar(500) DEFAULT NULL,
  `Img_5` varchar(500) DEFAULT NULL,
  `Creado_por` varchar(120) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `Id` int(11) NOT NULL,
  `Usuario` varchar(120) NOT NULL,
  `Sede` varchar(80) NOT NULL,
  `Fecha_nacimiento` date NOT NULL,
  `Correo` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `Programa` varchar(80) NOT NULL,
  `profile_img` longblob DEFAULT NULL,
  `usertype` varchar(50) DEFAULT 'student'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`Id`, `Usuario`, `Sede`, `Fecha_nacimiento`, `Correo`, `Password`, `Programa`, `profile_img`, `usertype`) VALUES
(1, 'jesusandrade', 'Medellín', '1998-11-16', 'jesus@gmail.com', '12345', '', NULL, 'student'),
(2, 'juangomez', 'Medellín', '2000-01-01', 'juan@gmail.com', '12345', '', NULL, 'student'),
(3, 'jossytello', 'Medellín', '1990-11-16', 'jossy@gmail.com', '123456', '', NULL, 'student');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `emprendimientos`
--
ALTER TABLE `emprendimientos`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Creado_por` (`Creado_por`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `UQ_Usuario` (`Usuario`),
  ADD UNIQUE KEY `UQ_Correo` (`Correo`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `emprendimientos`
--
ALTER TABLE `emprendimientos`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `emprendimientos`
--
ALTER TABLE `emprendimientos`
  ADD CONSTRAINT `emprendimientos_ibfk_1` FOREIGN KEY (`Creado_por`) REFERENCES `usuarios` (`Usuario`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
