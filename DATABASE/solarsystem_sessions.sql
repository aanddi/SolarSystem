-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: solarsystem
-- ------------------------------------------------------
-- Server version	8.0.31

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
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int unsigned NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  PRIMARY KEY (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
INSERT INTO `sessions` VALUES ('-jg7Vt3dVQh1DbuZSLTXvjkjtlnOCteY',1673299003,'{\"cookie\":{\"originalMaxAge\":60000,\"expires\":\"2023-01-09T21:16:42.787Z\",\"httpOnly\":true,\"path\":\"/\"},\"counter\":16,\"greeting\":\"HelloWorld\"}'),('_icTx7AsSGktI_64Jd39n8NadsdHLrIS',1673299281,'{\"cookie\":{\"originalMaxAge\":600000,\"expires\":\"2023-01-09T21:21:20.655Z\",\"httpOnly\":true,\"path\":\"/\"},\"counter\":5,\"greeting\":\"HelloWorld\"}'),('gAo7uMWPOgMprDNemAKHcTcDJhtfzBC2',1673299157,'{\"cookie\":{\"originalMaxAge\":60000,\"expires\":\"2023-01-09T21:19:16.876Z\",\"httpOnly\":true,\"path\":\"/\"},\"counter\":null,\"greeting\":\"HelloWorld\"}'),('seXqCxKPIjBt-d3yGI0OfAIVIoYysI3L',1673299679,'{\"cookie\":{\"originalMaxAge\":60000,\"expires\":\"2023-01-09T21:27:59.401Z\",\"httpOnly\":true,\"path\":\"/\"},\"counter\":1,\"greeting\":\"HelloWorld\"}'),('uWrQtXPuhU43MWV5Ktyc71aMF1wbJAx7',1673298832,'{\"cookie\":{\"originalMaxAge\":59998,\"expires\":\"2023-01-09T21:13:52.494Z\",\"httpOnly\":true,\"path\":\"/\"},\"counter\":27,\"greeting\":\"HelloWorld\"}');
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-10 16:00:44
