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
(14, 'CantaConMigo', 'educacion', '¿Quieres aprender a cantar, mejorar tu técnica y liberar todo tu potencial vocal?\r\n¡Únete a mis clases personalizadas de canto y da el primer paso para brillar en el escenario! ✨\r\n\r\n🌟 Clases para todos los niveles\r\n🎵 Técnicas profesionales\r\n💬 Ambiente divertido y motivador\r\n\r\n📩 ¡Reserva tu clase hoy y comienza a cantar como siempre soñaste!', NULL, NULL, NULL, NULL, NULL, 'jesusandrade'),
(15, 'Matemáticas Fáciles', 'educacion', 'Clases personalizadas de matemáticas para estudiantes de primaria, secundaria y universidad. Aprende álgebra, cálculo, geometría y más de manera sencilla.', NULL, NULL, NULL, NULL, NULL, 'mariagonzalez'),
(16, 'Estilo Profesional', 'belleza', 'Servicio de barbería y cuidado personal para hombres. Cortes modernos, afeitado clásico y tratamientos capilares.', NULL, NULL, NULL, NULL, NULL, 'carloslopez'),
(17, 'Delicias Caseras', 'comida', 'Comida casera preparada con ingredientes frescos y recetas tradicionales. Opciones para todos los gustos y dietas especiales.', NULL, NULL, NULL, NULL, NULL, 'anatorres'),
(18, 'Aventuras en Tablero', 'ocio', 'Alquiler de juegos de mesa y organización de eventos lúdicos. Desde clásicos hasta los juegos más modernos.', NULL, NULL, NULL, NULL, NULL, 'luisgarcia'),
(19, 'Inglés para Viajeros', 'educacion', 'Curso intensivo de inglés práctico para quienes planean viajar al extranjero. Enfocado en situaciones cotidianas.', NULL, NULL, NULL, NULL, NULL, 'sofiamartinez'),
(20, 'Belleza Natural', 'belleza', 'Tratamientos faciales y corporales con productos naturales y orgánicos. Rejuvenecimiento sin químicos agresivos.', NULL, NULL, NULL, NULL, NULL, 'pedrorodriguez'),
(21, 'Postres Artesanales', 'comida', 'Elaboración de postres finos y tradicionales. Tortas, pasteles, galletas y más para ocasiones especiales.', NULL, NULL, NULL, NULL, NULL, 'lauramendoza'),
(22, 'Fotografía Creativa', 'ocio', 'Sesiones fotográficas profesionales y talleres para aprender técnicas de fotografía con tu cámara o smartphone.', NULL, NULL, NULL, NULL, NULL, 'javiercruz'),
(23, 'Programación para Niños', 'educacion', 'Introducción al mundo de la programación mediante juegos y proyectos divertidos. Scratch, Python y más.', NULL, NULL, NULL, NULL, NULL, 'elenasanchez'),
(24, 'Maquillaje Profesional', 'belleza', 'Servicio de maquillaje para eventos sociales, fotográficos y artísticos. Asesoría de imagen personalizada.', NULL, NULL, NULL, NULL, NULL, 'miguelhernandez'),
(25, 'Cocina Internacional', 'comida', 'Talleres de cocina donde aprenderás a preparar platillos típicos de diferentes países del mundo.', NULL, NULL, NULL, NULL, NULL, 'isabelgomez'),
(26, 'Escape Room en Casa', 'ocio', 'Llevamos la experiencia de escape room a tu hogar con puzzles y desafíos emocionantes para grupos.', NULL, NULL, NULL, NULL, NULL, 'ricardosilva'),
(27, 'Redacción Académica', 'educacion', 'Asesoría en redacción de ensayos, tesis y trabajos universitarios. Corrección de estilo y formato.', NULL, NULL, NULL, NULL, NULL, 'patriciavargas'),
(28, 'Uñas Artísticas', 'belleza', 'Diseños creativos en uñas acrílicas y gelish. Manicure y pedicure con los más altos estándares de higiene.', NULL, NULL, NULL, NULL, NULL, 'fernandoalvarez'),
(29, 'Almuerzos Ejecutivos', 'comida', 'Servicio de almuerzos saludables y balanceados para oficinas, entregados directamente en tu lugar de trabajo.', NULL, NULL, NULL, NULL, NULL, 'dianaramirez'),
(30, 'Taller de Pintura', 'ocio', 'Clases de pintura al óleo, acuarela y acrílico para principiantes y avanzados. Expresa tu creatividad.', NULL, NULL, NULL, NULL, NULL, 'oscarflores'),
(31, 'Preparación para IELTS', 'educacion', 'Curso especializado para aprobar el examen IELTS con altos puntajes. Prácticas reales y estrategias efectivas.', NULL, NULL, NULL, NULL, NULL, 'claudiamorales'),
(32, 'Masajes Relajantes', 'belleza', 'Terapias de relajación con masajes descontracturantes, aromaterapia y musicoterapia para aliviar el estrés.', NULL, NULL, NULL, NULL, NULL, 'arturocastillo'),
(33, 'Catering Vegetariano', 'comida', 'Servicio completo de catering para eventos con menú 100% vegetariano. Opciones veganas disponibles.', NULL, NULL, NULL, NULL, NULL, 'veronicaruiz'),
(34, 'Noches de Karaoke', 'ocio', 'Alquiler de equipo profesional de karaoke para fiestas y eventos. Amplio repertorio en varios idiomas.', NULL, NULL, NULL, NULL, NULL, 'eduardomendoza'),
(35, 'Clases de Piano', 'educacion', 'Aprende piano desde cero o perfecciona tu técnica con métodos personalizados según tus objetivos musicales.', NULL, NULL, NULL, NULL, NULL, 'gabrielasoto'),
(36, 'Depilación Profesional', 'belleza', 'Servicio de depilación con cera y técnicas modernas para un resultado suave y duradero.', NULL, NULL, NULL, NULL, NULL, 'raulguerrero'),
(37, 'Repostería Decorada', 'comida', 'Talleres para aprender a decorar cupcakes, cookies y pasteles con diseños creativos y técnicas profesionales.', NULL, NULL, NULL, NULL, NULL, 'silviajimenez'),
(38, 'Tour Fotográfico', 'ocio', 'Recorridos guiados por los lugares más fotogénicos de la ciudad, con tips para mejorar tus fotos.', NULL, NULL, NULL, NULL, NULL, 'manuelrios'),
(39, 'Alemán Básico', 'educacion', 'Introducción al idioma alemán con enfoque en conversación y gramática esencial para principiantes.', NULL, NULL, NULL, NULL, NULL, 'luciapineda'),
(40, 'Peinados para Bodas', 'belleza', 'Creación de peinados elegantes para novias y acompañantes. Pruebas previas y asesoría de estilo.', NULL, NULL, NULL, NULL, NULL, 'robertodelgado'),
(41, 'Café Artesanal', 'comida', 'Venta de café gourmet de origen y talleres para aprender técnicas de preparación como barista profesional.', NULL, NULL, NULL, NULL, NULL, 'adrianacampos'),
(42, 'Juegos Retro', 'ocio', 'Alquiler de consolas y juegos retro para revivir la nostalgia de los videojuegos clásicos.', NULL, NULL, NULL, NULL, NULL, 'sergiovargas'),
(43, 'Ortografía Rápida', 'educacion', 'Curso intensivo para mejorar tu ortografía y redacción en español. Método práctico y efectivo.', NULL, NULL, NULL, NULL, NULL, 'teresaortega'),
(44, 'Tratamiento Capilar', 'belleza', 'Terapias para cabello dañado, con productos profesionales que restauran la salud de tu pelo.', NULL, NULL, NULL, NULL, NULL, 'franciscomejia'),
(45, 'Sushi a Domicilio', 'comida', 'Elaboración artesanal de sushi fresco entregado en tu hogar. Variedades tradicionales y creativas.', NULL, NULL, NULL, NULL, NULL, 'alejandromunoz'),
(46, 'Taller de Magia', 'ocio', 'Aprende trucos de magia sencillos y espectaculares para sorprender a tus amigos y familiares.', NULL, NULL, NULL, NULL, NULL, 'rosariocastro'),
(47, 'Finanzas Personales', 'educacion', 'Talleres para aprender a manejar tu dinero, ahorrar e invertir de manera inteligente.', NULL, NULL, NULL, NULL, NULL, 'jorgeleon'),
(48, 'Maquillaje de Fantasía', 'belleza', 'Creación de looks especiales para Halloween, carnavales, fiestas temáticas y eventos especiales.', NULL, NULL, NULL, NULL, NULL, 'blancasandoval'),
(49, 'Panes Artesanales', 'comida', 'Elaboración tradicional de panes con masa madre y ingredientes de alta calidad. Pedidos por encargo.', NULL, NULL, NULL, NULL, NULL, 'hugorivera'),
(50, 'Noches de Juegos', 'ocio', 'Organización de eventos sociales con juegos de mesa modernos para grupos de amigos o compañeros de trabajo.', NULL, NULL, NULL, NULL, NULL, 'marianadelgado'),
(51, 'Portugués Rápido', 'educacion', 'Curso acelerado de portugués brasileño con enfoque en conversación para viajeros y negocios.', NULL, NULL, NULL, NULL, NULL, 'alfonsopena'),
(52, 'Tintes Naturales', 'belleza', 'Coloración capilar con henna y otros productos naturales que cuidan tu pelo mientras lo tiñen.', NULL, NULL, NULL, NULL, NULL, 'gloriaherrera'),
(53, 'Comida Mexicana', 'comida', 'Auténtica cocina mexicana preparada con las recetas tradicionales y los ingredientes originales.', NULL, NULL, NULL, NULL, NULL, 'ramonaguilar'),
(54, 'Taller de Podcast', 'ocio', 'Aprende a crear, grabar y editar tu propio podcast desde cero con equipos básicos.', NULL, NULL, NULL, NULL, NULL, 'enriqueguzman'),
(55, 'Excel Avanzado', 'educacion', 'Domina las funciones avanzadas de Excel para trabajo y análisis de datos. Macros, tablas dinámicas y más.', NULL, NULL, NULL, NULL, NULL, 'leticiasosa'),
(56, 'Terapia de Spa', 'belleza', 'Experiencia completa de spa en la comodidad de tu hogar con masajes, faciales y tratamientos relajantes.', NULL, NULL, NULL, NULL, NULL, 'guillermorojas'),
(57, 'Helados Gourmet', 'comida', 'Helados artesanales con sabores innovadores y clásicos, preparados con frutas frescas y ingredientes premium.', NULL, NULL, NULL, NULL, NULL, 'carolinamiranda'),
(58, 'Taller de Stand-up', 'ocio', 'Curso para desarrollar rutinas de comedia stand-up y perder el miedo escénico.', NULL, NULL, NULL, NULL, NULL, 'federiconunez'),
(59, 'Chino Mandarín', 'educacion', 'Introducción al idioma chino con énfasis en pronunciación y caracteres básicos para comunicación esencial.', NULL, NULL, NULL, NULL, NULL, 'doloresmendez'),
(60, 'Barbería Vintage', 'belleza', 'Estilo clásico de barbería con técnicas tradicionales y ambiente retro para hombres que aprecian los detalles.', NULL, NULL, NULL, NULL, NULL, 'raulestrada'),
(61, 'Comida Italiana', 'comida', 'Pastas frescas, risottos y otros platillos italianos preparados al momento con ingredientes importados.', NULL, NULL, NULL, NULL, NULL, 'susanaochoa'),
(62, 'Taller de Escritura', 'ocio', 'Desarrolla tu creatividad literaria mediante ejercicios prácticos y feedback profesional.', NULL, NULL, NULL, NULL, NULL, 'gerardosolis'),
(63, 'Preparación SAT', 'educacion', 'Curso completo para el examen SAT con estrategias, prácticas y simulacros del examen real.', NULL, NULL, NULL, NULL, NULL, 'irenevaldez'),
(64, 'Maquillaje HD', 'belleza', 'Técnicas de maquillaje para fotografía y video que garantizan un aspecto impecable en alta definición.', NULL, NULL, NULL, NULL, NULL, 'marcosfuentes');
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
(5, 'Daniel Perez', 'Medellín', '2025-06-20', 'danielP@gmail.com', '12345', '', NULL, 'student'),
(6, 'mariagonzalez', 'Medellín', '1995-05-15', 'maria@gmail.com', '12345', 'Nuevas Tecnologías', NULL, 'student'),
(7, 'carloslopez', 'Bello', '1997-08-22', 'carlos@gmail.com', '12345', 'Industrias Creativas', NULL, 'student'),
(8, 'anatorres', 'Rio Negro', '1999-03-10', 'ana@gmail.com', '12345', 'Gastronomía y Turismo', NULL, 'student'),
(9, 'luisgarcia', 'La Pintada', '1996-11-30', 'luis@gmail.com', '12345', 'Desarrollo Empresarial', NULL, 'student'),
(10, 'sofiamartinez', 'Apartado', '1998-07-18', 'sofia@gmail.com', '12345', 'Salud y Cuidado', NULL, 'student'),
(11, 'pedrorodriguez', 'Bogotá', '1997-02-25', 'pedro@gmail.com', '12345', 'Nuevas Tecnologías', NULL, 'student'),
(12, 'lauramendoza', 'Medellín', '1999-09-12', 'laura@gmail.com', '12345', 'Industrias Creativas', NULL, 'student'),
(13, 'javiercruz', 'Bello', '1995-12-05', 'javier@gmail.com', '12345', 'Gastronomía y Turismo', NULL, 'student'),
(14, 'elenasanchez', 'Rio Negro', '1998-04-20', 'elena@gmail.com', '12345', 'Desarrollo Empresarial', NULL, 'student'),
(15, 'miguelhernandez', 'La Pintada', '1996-10-15', 'miguel@gmail.com', '12345', 'Salud y Cuidado', NULL, 'student'),
(16, 'isabelgomez', 'Apartado', '1997-06-08', 'isabel@gmail.com', '12345', 'Nuevas Tecnologías', NULL, 'student'),
(17, 'ricardosilva', 'Bogotá', '1999-01-22', 'ricardo@gmail.com', '12345', 'Industrias Creativas', NULL, 'student'),
(18, 'patriciavargas', 'Medellín', '1995-08-14', 'patricia@gmail.com', '12345', 'Gastronomía y Turismo', NULL, 'student'),
(19, 'fernandoalvarez', 'Bello', '1998-03-30', 'fernando@gmail.com', '12345', 'Desarrollo Empresarial', NULL, 'student'),
(20, 'dianaramirez', 'Rio Negro', '1996-07-11', 'diana@gmail.com', '12345', 'Salud y Cuidado', NULL, 'student'),
(21, 'oscarflores', 'La Pintada', '1997-12-24', 'oscar@gmail.com', '12345', 'Nuevas Tecnologías', NULL, 'student'),
(22, 'claudiamorales', 'Apartado', '1999-05-17', 'claudia@gmail.com', '12345', 'Industrias Creativas', NULL, 'student'),
(23, 'arturocastillo', 'Bogotá', '1995-10-03', 'arturo@gmail.com', '12345', 'Gastronomía y Turismo', NULL, 'student'),
(24, 'veronicaruiz', 'Medellín', '1998-02-19', 'veronica@gmail.com', '12345', 'Desarrollo Empresarial', NULL, 'student'),
(25, 'eduardomendoza', 'Bello', '1996-09-28', 'eduardo@gmail.com', '12345', 'Salud y Cuidado', NULL, 'student'),
(26, 'gabrielasoto', 'Rio Negro', '1997-04-13', 'gabriela@gmail.com', '12345', 'Nuevas Tecnologías', NULL, 'student'),
(27, 'raulguerrero', 'La Pintada', '1999-11-06', 'raul@gmail.com', '12345', 'Industrias Creativas', NULL, 'student'),
(28, 'silviajimenez', 'Apartado', '1995-06-21', 'silvia@gmail.com', '12345', 'Gastronomía y Turismo', NULL, 'student'),
(29, 'manuelrios', 'Bogotá', '1998-01-14', 'manuel@gmail.com', '12345', 'Desarrollo Empresarial', NULL, 'student'),
(30, 'luciapineda', 'Medellín', '1996-08-07', 'lucia@gmail.com', '12345', 'Salud y Cuidado', NULL, 'student'),
(31, 'robertodelgado', 'Bello', '1997-03-25', 'roberto@gmail.com', '12345', 'Nuevas Tecnologías', NULL, 'student'),
(32, 'adrianacampos', 'Rio Negro', '1999-10-18', 'adriana@gmail.com', '12345', 'Industrias Creativas', NULL, 'student'),
(33, 'sergiovargas', 'La Pintada', '1995-07-02', 'sergio@gmail.com', '12345', 'Gastronomía y Turismo', NULL, 'student'),
(34, 'teresaortega', 'Apartado', '1998-12-15', 'teresa@gmail.com', '12345', 'Desarrollo Empresarial', NULL, 'student'),
(35, 'franciscomejia', 'Bogotá', '1996-05-28', 'francisco@gmail.com', '12345', 'Salud y Cuidado', NULL, 'student'),
(36, 'alejandromunoz', 'Medellín', '1997-02-11', 'alejandro@gmail.com', '12345', 'Nuevas Tecnologías', NULL, 'student'),
(37, 'rosariocastro', 'Bello', '1999-09-04', 'rosario@gmail.com', '12345', 'Industrias Creativas', NULL, 'student'),
(38, 'jorgeleon', 'Rio Negro', '1995-04-27', 'jorge@gmail.com', '12345', 'Gastronomía y Turismo', NULL, 'student'),
(39, 'blancasandoval', 'La Pintada', '1998-11-20', 'blanca@gmail.com', '12345', 'Desarrollo Empresarial', NULL, 'student'),
(40, 'hugorivera', 'Apartado', '1996-08-13', 'hugo@gmail.com', '12345', 'Salud y Cuidado', NULL, 'student'),
(41, 'marianadelgado', 'Bogotá', '1997-05-06', 'mariana@gmail.com', '12345', 'Nuevas Tecnologías', NULL, 'student'),
(42, 'alfonsopena', 'Medellín', '1999-12-29', 'alfonso@gmail.com', '12345', 'Industrias Creativas', NULL, 'student'),
(43, 'gloriaherrera', 'Bello', '1995-09-22', 'gloria@gmail.com', '12345', 'Gastronomía y Turismo', NULL, 'student'),
(44, 'ramonaguilar', 'Rio Negro', '1998-06-15', 'ramona@gmail.com', '12345', 'Desarrollo Empresarial', NULL, 'student'),
(45, 'enriqueguzman', 'La Pintada', '1996-03-08', 'enrique@gmail.com', '12345', 'Salud y Cuidado', NULL, 'student'),
(46, 'leticiasosa', 'Apartado', '1997-10-01', 'leticia@gmail.com', '12345', 'Nuevas Tecnologías', NULL, 'student'),
(47, 'guillermorojas', 'Bogotá', '1999-07-24', 'guillermo@gmail.com', '12345', 'Industrias Creativas', NULL, 'student'),
(48, 'carolinamiranda', 'Medellín', '1995-04-17', 'carolina@gmail.com', '12345', 'Gastronomía y Turismo', NULL, 'student'),
(49, 'federiconunez', 'Bello', '1998-01-10', 'federico@gmail.com', '12345', 'Desarrollo Empresarial', NULL, 'student'),
(50, 'doloresmendez', 'Rio Negro', '1996-08-03', 'dolores@gmail.com', '12345', 'Salud y Cuidado', NULL, 'student'),
(51, 'raulestrada', 'La Pintada', '1997-05-26', 'raul.e@gmail.com', '12345', 'Nuevas Tecnologías', NULL, 'student'),
(52, 'susanaochoa', 'Apartado', '1999-12-19', 'susana@gmail.com', '12345', 'Industrias Creativas', NULL, 'student'),
(53, 'gerardosolis', 'Bogotá', '1995-09-12', 'gerardo@gmail.com', '12345', 'Gastronomía y Turismo', NULL, 'student'),
(54, 'irenevaldez', 'Medellín', '1998-06-05', 'irene@gmail.com', '12345', 'Desarrollo Empresarial', NULL, 'student'),
(55, 'marcosfuentes', 'Bello', '1996-03-28', 'marcos@gmail.com', '12345', 'Salud y Cuidado', NULL, 'student');

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
