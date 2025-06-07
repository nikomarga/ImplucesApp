-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-06-2025 a las 04:50:08
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `impulces`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `emprendimientos`
--

CREATE TABLE `emprendimientos` (
  `Id` int(11) NOT NULL,
  `Nombre_servicio` varchar(100) NOT NULL,
  `Categoria_servicio` varchar(100) NOT NULL,
  `Descripcion_servicio` text DEFAULT NULL,
  `Img_1` longblob DEFAULT NULL,
  `Img_2` longblob DEFAULT NULL,
  `Img_3` longblob DEFAULT NULL,
  `Img_4` longblob DEFAULT NULL,
  `Img_5` longblob DEFAULT NULL,
  `Creado_por` varchar(120) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `emprendimientos`
--

INSERT INTO `emprendimientos` (`Id`, `Nombre_servicio`, `Categoria_servicio`, `Descripcion_servicio`, `Img_1`, `Img_2`, `Img_3`, `Img_4`, `Img_5`, `Creado_por`) VALUES
(7, 'Clases de Ingles', 'educacion', '¿Quieres aprender inglés de forma fácil y práctica? 🇬🇧✨\r\n\r\n¡Te ofrezco clases personalizadas de inglés para todos los niveles!\r\n🔹 Conversación\r\n🔹 Gramática\r\n🔹 Inglés para viajes, trabajo o estudios\r\n🔹 Preparación para entrevistas o exámenes\r\n\r\n📍 Modalidad: [presencial/online]\r\n⏰ Horarios flexibles\r\n📚 Material incluido\r\n💬 Primera clase de prueba GRATIS\r\n\r\n📲 Contáctame y empieza hoy tu camino al inglés fluido.', NULL, NULL, NULL, NULL, NULL, 'Daniel Perez'),
(8, 'NailsArts', 'belleza', 'Agenda tu cita para uñas hermosas, duraderas y con estilo:\r\n💖 Uñas acrílicas\r\n💎 Decoración personalizada\r\n💅 Manicure semipermanente\r\n🌈 Diseños únicos\r\n🧼 Higiene y cuidado profesional\r\n\r\n⏰ Horarios flexibles\r\n\r\n¡Tu estilo empieza en tus manos!\r\n📢 ¡Promoción de bienvenida! ', NULL, NULL, NULL, NULL, NULL, 'Daniel Perez'),
(11, 'Sabores de Autor', 'comida', 'Vive una experiencia gastronómica única con Sabores de Autor, cocina gourmet a domicilio que combina ingredientes premium con una presentación impecable.\r\n\r\n👨‍🍳 Menú exclusivo cada semana\r\n🥩 Cortes finos, mariscos frescos y opciones vegetarianas\r\n🍷 Maridajes recomendados\r\n🕯️ Ideal para cenas románticas, eventos privados y celebraciones especiales\r\n🛵 Entrega a domicilio o servicio de chef en casa\r\n\r\n📍 Zona de cobertura: Medellín y alrededores\r\n📅 Reservas con 24h de anticipación\r\n📲 ¡Haz tu pedido y transforma tu cena en una experiencia gourmet!', NULL, NULL, NULL, NULL, NULL, 'juangomez'),
(12, 'Parlons Français', 'educacion', '\"Parlons Français\" es un servicio de clases de francés diseñado para todos los niveles, desde principiantes hasta avanzados. Ofrecemos clases personalizadas que te ayudarán a dominar la gramática, el vocabulario, la conversación y la cultura francófona. Aprende francés de manera práctica y divertida con profesores nativos y métodos modernos.', NULL, NULL, NULL, NULL, NULL, 'jossytello'),
(13, 'GameBox Rentals', 'ocio', 'En GameBox Rentals ofrecemos el mejor servicio de alquiler de consolas de videojuegos para que disfrutes de tus juegos favoritos sin preocuparte por comprar equipos costosos. Disponemos de las últimas consolas como PlayStation, Xbox, Nintendo Switch y más, con opciones flexibles de alquiler por día, semana o mes. ¡Lleva la diversión a tu casa cuando quieras!🎮🕹️', NULL, NULL, NULL, NULL, NULL, 'jossytello'),
(14, 'CantaConMigo', 'educacion', '¿Quieres aprender a cantar, mejorar tu técnica y liberar todo tu potencial vocal?\r\n¡Únete a mis clases personalizadas de canto y da el primer paso para brillar en el escenario! ✨\r\n\r\n🌟 Clases para todos los niveles\r\n🎵 Técnicas profesionales\r\n💬 Ambiente divertido y motivador\r\n\r\n📩 ¡Reserva tu clase hoy y comienza a cantar como siempre soñaste!', NULL, NULL, NULL, NULL, NULL, 'jesusandrade');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
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
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`Id`, `Usuario`, `Sede`, `Fecha_nacimiento`, `Correo`, `Password`, `Programa`, `profile_img`, `usertype`) VALUES
(1, 'jesusandrade', 'Medellín', '1998-11-16', 'jesus@gmail.com', '12345', '', NULL, 'student'),
(2, 'juangomez', 'Medellín', '2000-01-01', 'juan@gmail.com', '12345', '', NULL, 'student'),
(3, 'jossytello', 'Medellín', '1990-11-16', 'jossy@gmail.com', '123456', '', NULL, 'student'),
(5, 'Daniel Perez', 'Medellín', '2025-06-20', 'danielP@gmail.com', '12345', '', NULL, 'student');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `emprendimientos`
--
ALTER TABLE `emprendimientos`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Creado_por` (`Creado_por`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `UQ_Usuario` (`Usuario`),
  ADD UNIQUE KEY `UQ_Correo` (`Correo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `emprendimientos`
--
ALTER TABLE `emprendimientos`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `emprendimientos`
--
ALTER TABLE `emprendimientos`
  ADD CONSTRAINT `emprendimientos_ibfk_1` FOREIGN KEY (`Creado_por`) REFERENCES `usuarios` (`Usuario`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
