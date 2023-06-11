-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-06-2023 a las 01:17:44
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `uefbc`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `anio_lectivo`
--

CREATE TABLE `anio_lectivo` (
  `ANL_ID` int(11) NOT NULL,
  `ANL_INI` date NOT NULL,
  `ANL_FIN` date NOT NULL,
  `ANL_NUM_PRD` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `curso`
--

CREATE TABLE `curso` (
  `CRS_ID` int(11) NOT NULL,
  `CRS_NOM` varchar(100) NOT NULL,
  `CRS_NUM` int(11) NOT NULL,
  `CRS_ID_ANL` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estudiante`
--

CREATE TABLE `estudiante` (
  `EST_ID` int(11) NOT NULL,
  `EST_CI` varchar(10) NOT NULL,
  `EST_NOM` varchar(100) NOT NULL,
  `EST_NOM2` varchar(100) NOT NULL,
  `EST_APE` varchar(100) NOT NULL,
  `EST_APE2` varchar(100) NOT NULL,
  `EST_FECH_NAC` date NOT NULL,
  `EST_GEN` char(1) NOT NULL,
  `EST_ID_REP` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materia`
--

CREATE TABLE `materia` (
  `MTR_ID` int(11) NOT NULL,
  `MTR_NOM` char(1) NOT NULL,
  `MTR_TIP` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paralelo`
--

CREATE TABLE `paralelo` (
  `PRLL_ID` int(11) NOT NULL,
  `PRLL_NOM` char(1) NOT NULL,
  `PRLL_ID_CRS` int(11) NOT NULL,
  `PRLL_ID_PRF_REP` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profesor`
--

CREATE TABLE `profesor` (
  `PRF_ID` int(11) NOT NULL,
  `PRF_CI` varchar(10) NOT NULL,
  `PRF_NOM` varchar(100) NOT NULL,
  `PRF_NOM2` varchar(100) NOT NULL,
  `PRF_APE` varchar(100) NOT NULL,
  `PRF_APE2` varchar(100) NOT NULL,
  `PRF_FECH_NAC` date NOT NULL,
  `PRF_GEN` char(1) NOT NULL,
  `PRF_DIR` varchar(400) NOT NULL,
  `PRF_CEL` varchar(10) NOT NULL,
  `PRF_TEL` varchar(10) NOT NULL,
  `PRF_MAIL` varchar(100) NOT NULL,
  `PRF_FECH_INGR_INST` date NOT NULL,
  `PRF_FECH_INGR_MAG` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `representante`
--

CREATE TABLE `representante` (
  `REP_ID` int(11) NOT NULL,
  `REP_CI` varchar(10) NOT NULL,
  `REP_NOM` varchar(100) NOT NULL,
  `REP_NOM2` varchar(100) NOT NULL,
  `REP_APE` varchar(100) NOT NULL,
  `REP_APE2` varchar(100) NOT NULL,
  `REP_DIR` varchar(400) NOT NULL,
  `REP_CEL` varchar(10) NOT NULL,
  `REP_TEL` varchar(10) NOT NULL,
  `REP_MAIL` varchar(100) NOT NULL,
  `REP_REL_FAM` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `anio_lectivo`
--
ALTER TABLE `anio_lectivo`
  ADD PRIMARY KEY (`ANL_ID`);

--
-- Indices de la tabla `curso`
--
ALTER TABLE `curso`
  ADD PRIMARY KEY (`CRS_ID`),
  ADD KEY `CRS_ID_ANL` (`CRS_ID_ANL`);

--
-- Indices de la tabla `estudiante`
--
ALTER TABLE `estudiante`
  ADD PRIMARY KEY (`EST_ID`),
  ADD KEY `EST_ID_REP` (`EST_ID_REP`);

--
-- Indices de la tabla `materia`
--
ALTER TABLE `materia`
  ADD PRIMARY KEY (`MTR_ID`);

--
-- Indices de la tabla `paralelo`
--
ALTER TABLE `paralelo`
  ADD PRIMARY KEY (`PRLL_ID`),
  ADD KEY `PRLL_ID_CRS` (`PRLL_ID_CRS`),
  ADD KEY `PRLL_ID_PRF_REP` (`PRLL_ID_PRF_REP`);

--
-- Indices de la tabla `profesor`
--
ALTER TABLE `profesor`
  ADD PRIMARY KEY (`PRF_ID`);

--
-- Indices de la tabla `representante`
--
ALTER TABLE `representante`
  ADD PRIMARY KEY (`REP_ID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `anio_lectivo`
--
ALTER TABLE `anio_lectivo`
  MODIFY `ANL_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `curso`
--
ALTER TABLE `curso`
  MODIFY `CRS_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `estudiante`
--
ALTER TABLE `estudiante`
  MODIFY `EST_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `materia`
--
ALTER TABLE `materia`
  MODIFY `MTR_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `paralelo`
--
ALTER TABLE `paralelo`
  MODIFY `PRLL_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `profesor`
--
ALTER TABLE `profesor`
  MODIFY `PRF_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `representante`
--
ALTER TABLE `representante`
  MODIFY `REP_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `curso`
--
ALTER TABLE `curso`
  ADD CONSTRAINT `curso_ibfk_1` FOREIGN KEY (`CRS_ID_ANL`) REFERENCES `anio_lectivo` (`ANL_ID`);

--
-- Filtros para la tabla `estudiante`
--
ALTER TABLE `estudiante`
  ADD CONSTRAINT `estudiante_ibfk_1` FOREIGN KEY (`EST_ID_REP`) REFERENCES `representante` (`REP_ID`);

--
-- Filtros para la tabla `paralelo`
--
ALTER TABLE `paralelo`
  ADD CONSTRAINT `paralelo_ibfk_1` FOREIGN KEY (`PRLL_ID_CRS`) REFERENCES `curso` (`CRS_ID`),
  ADD CONSTRAINT `paralelo_ibfk_2` FOREIGN KEY (`PRLL_ID_PRF_REP`) REFERENCES `profesor` (`PRF_ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
