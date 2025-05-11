-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: localhost    Database: rumbobici
-- ------------------------------------------------------
-- Server version	8.0.41

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categoria_ruta`
--

DROP TABLE IF EXISTS `categoria_ruta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoria_ruta` (
  `id_categoria` bigint NOT NULL AUTO_INCREMENT,
  `nombre_categoria` varchar(100) NOT NULL,
  `url_imagen` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_categoria`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria_ruta`
--

LOCK TABLES `categoria_ruta` WRITE;
/*!40000 ALTER TABLE `categoria_ruta` DISABLE KEYS */;
INSERT INTO `categoria_ruta` VALUES (1,'Montaña','img/web/categorias/nino-btt.jpg'),(2,'Descenso','img/web/categorias/dh.jpg'),(3,'Gravel','img/web/categorias/gravel.jpg'),(4,'Carretera','img/web/categorias/carretera.jpg'),(5,'Cicloturismo','img/web/categorias/cicloturismo.jpg'),(6,'Urbano','img/web/categorias/urbano.jpg');
/*!40000 ALTER TABLE `categoria_ruta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ruta`
--

DROP TABLE IF EXISTS `ruta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ruta` (
  `id_ruta` bigint NOT NULL AUTO_INCREMENT,
  `nombre_ruta` varchar(100) NOT NULL,
  `localidad_ruta` varchar(100) NOT NULL,
  `kilometros_ruta` bigint NOT NULL,
  `fecha_ruta` date NOT NULL,
  `id_categoria` bigint NOT NULL,
  PRIMARY KEY (`id_ruta`),
  KEY `id_categoria` (`id_categoria`),
  CONSTRAINT `ruta_ibfk_1` FOREIGN KEY (`id_categoria`) REFERENCES `categoria_ruta` (`id_categoria`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ruta`
--

LOCK TABLES `ruta` WRITE;
/*!40000 ALTER TABLE `ruta` DISABLE KEYS */;
INSERT INTO `ruta` VALUES (9,'Titan Desert','Desierto de Marruecos',550,'2020-06-17',1),(10,'Titan Desert','Desierto de Marruecos',550,'2020-06-17',1),(14,'BTT Frías','Frías',40,'2024-12-12',1),(22,'The Bandit','Santo Domingo de Silos',135,'2024-06-07',3),(27,'Carretera Austral','Patagonia',850,'2023-12-12',5),(31,'La Isla','Burgos',10,'2025-04-25',6),(32,'La Pinilla','Segovia',25,'2020-12-12',2),(33,'BTT Castillo','Burgos',25,'2009-07-12',1),(34,'La Barceloneta','Barcelona',15,'2000-01-11',6),(35,'Colina Triste','Santo Domingo de Silos',320,'2025-07-05',1),(36,'Camino Primitivo','Oviedo - Santiago',500,'2000-07-12',5),(37,'The Traka','Girona',350,'2025-05-03',3);
/*!40000 ALTER TABLE `ruta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `id_usuario` bigint NOT NULL AUTO_INCREMENT,
  `nombre_usuario` varchar(100) NOT NULL,
  `contrasena` varchar(255) NOT NULL,
  `correo_electronico` varchar(100) NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  PRIMARY KEY (`id_usuario`),
  UNIQUE KEY `correo_electronico` (`correo_electronico`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'user1','Abc..123','user1@email.com','1992-05-15'),(2,'user2','Abc..123','user2@email.com','1987-09-20'),(3,'user3','Abc..123','user3@email.com','1992-11-10'),(4,'user4','Abc..123','user4@email.com','2000-12-10'),(7,'user5','Abc..123','user5@email.com','2000-08-10'),(8,'user6','Abc..123','user6@email.com','2008-07-10'),(9,'user7','Abc..123','user7@email.com','1990-03-12');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario_ruta`
--

DROP TABLE IF EXISTS `usuario_ruta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario_ruta` (
  `id_usuario` bigint NOT NULL,
  `id_ruta` bigint NOT NULL,
  `fecha_realizacion` date NOT NULL,
  PRIMARY KEY (`id_usuario`,`id_ruta`),
  KEY `usuario_ruta_ibfk_2` (`id_ruta`),
  CONSTRAINT `usuario_ruta_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`),
  CONSTRAINT `usuario_ruta_ibfk_2` FOREIGN KEY (`id_ruta`) REFERENCES `ruta` (`id_ruta`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario_ruta`
--

LOCK TABLES `usuario_ruta` WRITE;
/*!40000 ALTER TABLE `usuario_ruta` DISABLE KEYS */;
INSERT INTO `usuario_ruta` VALUES (1,22,'2010-01-11'),(1,27,'2023-12-12'),(1,31,'2025-04-25'),(1,32,'2020-12-12'),(1,33,'2009-07-12'),(1,34,'2000-01-11'),(1,35,'2025-07-05'),(2,14,'2024-12-12'),(2,36,'2000-07-12'),(2,37,'2025-05-03');
/*!40000 ALTER TABLE `usuario_ruta` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-05-11 13:33:06
