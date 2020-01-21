-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-01-2020 a las 23:22:28
-- Versión del servidor: 10.1.38-MariaDB
-- Versión de PHP: 7.3.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `rejilla`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `constructos`
--

CREATE TABLE `constructos` (
  `IdConstructo` int(11) UNSIGNED NOT NULL COMMENT 'Constructo - Id',
  `TxtPregunta` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL COMMENT 'Constructo - Pregunta del constructo',
  `IdElemento1` int(11) UNSIGNED NOT NULL COMMENT 'Constructo - IdElemento1 de la pregunta',
  `IdElemento2` int(11) UNSIGNED NOT NULL COMMENT 'Constructo - IdElemento2 de la pregunta',
  `TipoPregunta` varchar(12) COLLATE utf8mb4_spanish_ci NOT NULL COMMENT 'Constructo - Tipo de la pregunta: ¿similitud ó diferencia?'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci COMMENT='Definiciones de las preguntas de los contructos';

--
-- Volcado de datos para la tabla `constructos`
--

INSERT INTO `constructos` (`IdConstructo`, `TxtPregunta`, `IdElemento1`, `IdElemento2`, `TipoPregunta`) VALUES
(1, '¿En qué se parece tu #1 de tu #2? ', 1, 3, 'Parecidos'),
(2, '¿En qué aspecto se diferencian tu #1 de #2?', 1, 3, 'Diferencias'),
(3, '¿En qué se parece tu #1 de #2?', 1, 4, 'Parecidos'),
(4, '¿En qué aspecto se diferencian tu #1 de #2?', 1, 4, 'Diferencias'),
(5, '¿En qué se parece tu #1 de tu #2?', 3, 4, 'Parecidos'),
(6, '¿En qué aspecto se diferencian tu #1 de #2?', 3, 4, 'Diferencias'),
(7, '¿En qué se parece tu #1 de #2?', 1, 5, 'Parecidos'),
(8, '¿En qué aspecto se diferencian tu #1 de #2?', 1, 5, 'Diferencias'),
(9, '¿En qué se parece tu #1 de #2?', 1, 6, 'Parecidos'),
(10, '¿En qué aspecto se diferencian tu #1 de #2?', 1, 6, 'Diferencias'),
(11, '¿En qué se parece tu #1 de #2?', 1, 8, 'Parecidos'),
(12, '¿En qué se parece tu #1 de #2?', 1, 9, 'Parecidos'),
(13, '¿En qué se diferencia tu #1 de #2?', 1, 10, 'Diferencias'),
(14, '¿En qué se diferencia tu #1 de #2?', 1, 11, 'Diferencias');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `elementos`
--

CREATE TABLE `elementos` (
  `IdElemento` int(11) UNSIGNED NOT NULL COMMENT 'Elemento - Id',
  `Descripcion` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL COMMENT 'Elemento - Descripción'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci COMMENT='Definiciones de los elementos generales de las rejillas';

--
-- Volcado de datos para la tabla `elementos`
--

INSERT INTO `elementos` (`IdElemento`, `Descripcion`) VALUES
(1, 'Yo Actual'),
(2, 'Yo dentro de 2 años'),
(3, 'Padre o similar'),
(4, 'Madre o similar'),
(5, 'Pareja o persona significativa 1 (especificar rol)'),
(6, 'Persona significativa 2 (especificar rol)'),
(7, 'Persona significativa 3 (especificar rol)'),
(8, 'Persona significativa 4 (especificar rol)'),
(9, 'Persona significativa 5 (especificar rol)'),
(10, 'Persona non grata 2 (especificar rol)'),
(11, 'Persona non grata 2 (especificar rol)'),
(12, 'Yo ideal');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `elementosrejillas`
--

CREATE TABLE `elementosrejillas` (
  `IdElemento` int(11) UNSIGNED NOT NULL COMMENT 'ElementoRejilla - IdElemento',
  `IdRejilla` int(11) UNSIGNED NOT NULL COMMENT 'ElementoRejilla - IdRejilla',
  `NombreElemento` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL COMMENT 'ElementoRejilla - Nombre de la persona asociada al IdElemento',
  `RolElemento` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL COMMENT 'ElementoRejilla - Rol de la persona asociada IdElemento',
  `nombre_elemento` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `rol_elemento` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci COMMENT='Elementos especificados por el paciente';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `evaluaciones`
--

CREATE TABLE `evaluaciones` (
  `IdEvaluacion` int(11) UNSIGNED NOT NULL COMMENT 'Evaluación - Id',
  `IdRejilla` int(11) UNSIGNED NOT NULL COMMENT 'Evaluación - IdRejilla a la que pertenece esta evaluación',
  `ComentarioPaciente` longtext COLLATE utf8mb4_spanish_ci NOT NULL COMMENT 'Evaluación - Comentario del paciente sobre esta evaluación de la rejilla',
  `ComentarioPsicologo` longtext COLLATE utf8mb4_spanish_ci NOT NULL COMMENT 'Evaluación - Comentario del psicólogo sobre esta evaluación de la rejilla'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci COMMENT='Evaluaciones realizadas sobre cada tipo de rejillas (pueden ser 1 ó más)';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hibernate_sequence`
--

CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `hibernate_sequence`
--

INSERT INTO `hibernate_sequence` (`next_val`) VALUES
(1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ordenaciones`
--

CREATE TABLE `ordenaciones` (
  `IdEvaluacion` int(11) UNSIGNED NOT NULL COMMENT 'Ordenaciones - IdEvaluacion de un tipo de rejilla',
  `IdConstructo` int(11) UNSIGNED NOT NULL COMMENT 'Ordenaciones - IdConstructo',
  `OrdenConstructo` tinyint(3) UNSIGNED NOT NULL COMMENT 'Ordenaciones - Orden del constructo'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci COMMENT='Ordenes de los constructos en cada evaluación de una rejilla';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `polos`
--

CREATE TABLE `polos` (
  `IdRejilla` int(11) UNSIGNED NOT NULL COMMENT 'Polo - IdRejilla',
  `IdConstructo` int(11) UNSIGNED NOT NULL COMMENT 'Polo - IdConstructo',
  `TxtPoloIzq` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL COMMENT 'Polo - Polo izquierdo (texto)',
  `TxtPoloDer` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL COMMENT 'Polo - Polo derecho (texto)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `puntuaciones`
--

CREATE TABLE `puntuaciones` (
  `IdEvaluacion` int(11) UNSIGNED NOT NULL COMMENT 'Puntuación - IdEvaluacion de un tipo de rejilla',
  `IdConstructo` int(11) UNSIGNED NOT NULL COMMENT 'Puntuación - IdConstructo',
  `IdElemento` int(11) UNSIGNED NOT NULL COMMENT 'Puntuación - IdElemento',
  `Puntuacion` tinyint(3) UNSIGNED NOT NULL COMMENT 'Puntuación - Valor (1-7)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rejillas`
--

CREATE TABLE `rejillas` (
  `IdRejilla` int(11) UNSIGNED NOT NULL COMMENT 'Rejilla - Id',
  `IdPaciente` int(11) UNSIGNED NOT NULL COMMENT 'Rejilla - IdPaciente',
  `FechaHora` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Rejilla - Fecha-hora creación de la rejilla',
  `FechaHoraFin` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT 'Rejilla - Fecha-hora finalización de la rejilla',
  `ComentarioPaciente` longtext COLLATE utf8mb4_spanish_ci NOT NULL COMMENT 'Rejilla - Comentario del paciente sobre esta rejilla',
  `ComentarioPsicologo` longtext COLLATE utf8mb4_spanish_ci NOT NULL COMMENT 'Rejilla - Comentario del psicólogo sobre esta rejilla'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci COMMENT='Tipos de rejillas asociados a los diferentes pacientes';

--
-- Volcado de datos para la tabla `rejillas`
--

INSERT INTO `rejillas` (`IdRejilla`, `IdPaciente`, `FechaHora`, `FechaHoraFin`, `ComentarioPaciente`, `ComentarioPsicologo`) VALUES
(2, 2, '2019-12-08 20:41:59', '0000-00-00 00:00:00', '', ''),
(3, 2, '2020-01-20 20:50:43', '2020-01-20 20:50:43', '', ''),
(4, 2, '2020-01-20 21:18:47', '2020-01-20 21:18:47', '', ''),
(5, 2, '2020-01-20 21:30:01', '2020-01-20 21:30:01', '', ''),
(6, 2, '2020-01-20 21:35:21', '2020-01-20 21:35:21', '', ''),
(7, 2, '2020-01-20 21:42:41', '2020-01-20 21:42:41', '', ''),
(8, 2, '2020-01-20 21:43:30', '2020-01-20 21:43:30', '', ''),
(9, 2, '2020-01-20 21:44:25', '2020-01-20 21:44:25', '', ''),
(10, 2, '2020-01-20 21:54:33', '2020-01-20 21:54:33', '', ''),
(11, 2, '2020-01-20 22:05:12', '2020-01-20 22:05:12', '', ''),
(12, 2, '2020-01-20 22:05:52', '2020-01-20 22:05:52', '', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

CREATE TABLE `rol` (
  `id` bigint(20) NOT NULL,
  `rol_nombre` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `rol`
--

INSERT INTO `rol` (`id`, `rol_nombre`) VALUES
(1, 'ROLE_ADMIN'),
(2, 'ROLE_USER');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` bigint(20) NOT NULL,
  `nombre_usuario` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `nombre_usuario`, `password`) VALUES
(2, 'usuario', '$2a$10$H9ve0vJeKVM5KOcmYAO8Z.LjmUtmESKMXnlQcUy2jD0XgCqcEek5W'),
(3, 'admin', '$2a$10$TcvEhlm8vzhsZhw9fpVl/uwEIob/NFHDbOMFOCNx4Ft.WRFHYblEG');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario_rol`
--

CREATE TABLE `usuario_rol` (
  `usuario_id` bigint(20) NOT NULL,
  `rol_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuario_rol`
--

INSERT INTO `usuario_rol` (`usuario_id`, `rol_id`) VALUES
(2, 2),
(3, 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `constructos`
--
ALTER TABLE `constructos`
  ADD PRIMARY KEY (`IdConstructo`),
  ADD KEY `IdElemento1` (`IdElemento1`),
  ADD KEY `IdElemento2` (`IdElemento2`);

--
-- Indices de la tabla `elementos`
--
ALTER TABLE `elementos`
  ADD PRIMARY KEY (`IdElemento`);

--
-- Indices de la tabla `elementosrejillas`
--
ALTER TABLE `elementosrejillas`
  ADD PRIMARY KEY (`IdRejilla`,`IdElemento`),
  ADD KEY `elementosrejillas_ibfk_1` (`IdElemento`);

--
-- Indices de la tabla `evaluaciones`
--
ALTER TABLE `evaluaciones`
  ADD PRIMARY KEY (`IdEvaluacion`,`IdRejilla`),
  ADD KEY `IdRejilla` (`IdRejilla`);

--
-- Indices de la tabla `ordenaciones`
--
ALTER TABLE `ordenaciones`
  ADD PRIMARY KEY (`IdEvaluacion`,`IdConstructo`),
  ADD KEY `ordenaciones_ibfk_1` (`IdConstructo`);

--
-- Indices de la tabla `polos`
--
ALTER TABLE `polos`
  ADD PRIMARY KEY (`IdRejilla`,`IdConstructo`),
  ADD KEY `polos_ibfk_2` (`IdConstructo`);

--
-- Indices de la tabla `puntuaciones`
--
ALTER TABLE `puntuaciones`
  ADD PRIMARY KEY (`IdEvaluacion`,`IdConstructo`,`IdElemento`),
  ADD KEY `puntuaciones_ibfk_2` (`IdConstructo`),
  ADD KEY `puntuaciones_ibfk_3` (`IdElemento`);

--
-- Indices de la tabla `rejillas`
--
ALTER TABLE `rejillas`
  ADD PRIMARY KEY (`IdRejilla`);

--
-- Indices de la tabla `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK_puhr3k3l7bj71hb7hk7ktpxn0` (`nombre_usuario`);

--
-- Indices de la tabla `usuario_rol`
--
ALTER TABLE `usuario_rol`
  ADD PRIMARY KEY (`usuario_id`,`rol_id`),
  ADD KEY `FK610kvhkwcqk2pxeewur4l7bd1` (`rol_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `constructos`
--
ALTER TABLE `constructos`
  MODIFY `IdConstructo` int(11) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Constructo - Id', AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `elementos`
--
ALTER TABLE `elementos`
  MODIFY `IdElemento` int(11) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Elemento - Id', AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `evaluaciones`
--
ALTER TABLE `evaluaciones`
  MODIFY `IdEvaluacion` int(11) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Evaluación - Id';

--
-- AUTO_INCREMENT de la tabla `rejillas`
--
ALTER TABLE `rejillas`
  MODIFY `IdRejilla` int(11) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Rejilla - Id', AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `rol`
--
ALTER TABLE `rol`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `constructos`
--
ALTER TABLE `constructos`
  ADD CONSTRAINT `constructos_ibfk_1` FOREIGN KEY (`IdElemento1`) REFERENCES `elementos` (`IdElemento`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `constructos_ibfk_2` FOREIGN KEY (`IdElemento2`) REFERENCES `elementos` (`IdElemento`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `elementosrejillas`
--
ALTER TABLE `elementosrejillas`
  ADD CONSTRAINT `elementosrejillas_ibfk_1` FOREIGN KEY (`IdElemento`) REFERENCES `elementos` (`IdElemento`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `elementosrejillas_ibfk_2` FOREIGN KEY (`IdRejilla`) REFERENCES `rejillas` (`IdRejilla`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `evaluaciones`
--
ALTER TABLE `evaluaciones`
  ADD CONSTRAINT `evaluaciones_ibfk_1` FOREIGN KEY (`IdRejilla`) REFERENCES `rejillas` (`IdRejilla`);

--
-- Filtros para la tabla `ordenaciones`
--
ALTER TABLE `ordenaciones`
  ADD CONSTRAINT `ordenaciones_ibfk_1` FOREIGN KEY (`IdConstructo`) REFERENCES `constructos` (`IdConstructo`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ordenaciones_ibfk_2` FOREIGN KEY (`IdEvaluacion`) REFERENCES `evaluaciones` (`IdEvaluacion`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `polos`
--
ALTER TABLE `polos`
  ADD CONSTRAINT `polos_ibfk_1` FOREIGN KEY (`IdRejilla`) REFERENCES `rejillas` (`IdRejilla`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `polos_ibfk_2` FOREIGN KEY (`IdConstructo`) REFERENCES `constructos` (`IdConstructo`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `puntuaciones`
--
ALTER TABLE `puntuaciones`
  ADD CONSTRAINT `puntuaciones_ibfk_1` FOREIGN KEY (`IdEvaluacion`) REFERENCES `evaluaciones` (`IdEvaluacion`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `puntuaciones_ibfk_2` FOREIGN KEY (`IdConstructo`) REFERENCES `constructos` (`IdConstructo`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `puntuaciones_ibfk_3` FOREIGN KEY (`IdElemento`) REFERENCES `elementos` (`IdElemento`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `usuario_rol`
--
ALTER TABLE `usuario_rol`
  ADD CONSTRAINT `FK610kvhkwcqk2pxeewur4l7bd1` FOREIGN KEY (`rol_id`) REFERENCES `rol` (`id`),
  ADD CONSTRAINT `FKbyfgloj439r9wr9smrms9u33r` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
