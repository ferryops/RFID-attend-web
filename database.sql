-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 09, 2024 at 03:39 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rfid_attendance`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin_users`
--

CREATE TABLE `admin_users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `attendance_logs`
--

CREATE TABLE `attendance_logs` (
  `id` int(11) NOT NULL,
  `employee_id` int(11) DEFAULT NULL,
  `check_in` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `check_out` timestamp NULL DEFAULT NULL,
  `is_late` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `attendance_logs`
--

INSERT INTO `attendance_logs` (`id`, `employee_id`, `check_in`, `check_out`, `is_late`) VALUES
(5, 4, '2024-03-09 06:16:09', '2024-03-08 21:00:00', 0),
(6, 1, '2024-03-09 06:21:24', '2024-03-08 21:00:00', 0),
(7, 2, '2024-03-08 16:00:00', NULL, 0),
(8, 3, '2024-03-08 16:00:00', NULL, 0),
(9, 5, '2024-03-08 16:00:00', NULL, 0),
(10, 6, '2024-03-08 16:00:00', NULL, 0),
(11, 7, '2024-03-08 16:00:00', NULL, 0),
(12, 8, '2024-03-08 23:32:29', NULL, 1),
(13, 2, '2024-03-09 14:28:23', '2024-03-09 06:28:23', 0),
(14, 3, '2024-03-09 14:29:17', '2024-03-09 06:29:17', 0);

-- --------------------------------------------------------

--
-- Table structure for table `database_activity_log`
--

CREATE TABLE `database_activity_log` (
  `id` int(11) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `activity` varchar(255) DEFAULT NULL,
  `performed_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `position` varchar(255) DEFAULT NULL,
  `department` varchar(255) DEFAULT NULL,
  `rfid_tag` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`id`, `name`, `position`, `department`, `rfid_tag`, `created_at`, `updated_at`, `updated_by`) VALUES
(1, 'John Doe', 'Software Engineer', 'Engineering', 'RFID-001', '2024-03-09 05:34:17', NULL, NULL),
(2, 'Jane Smith', 'HR Manager', 'Human Resources', 'RFID-002', '2024-03-09 05:34:17', NULL, NULL),
(3, 'Michael Johnson', 'Sales Executive', 'Sales', 'RFID-003', '2024-03-09 05:34:17', NULL, NULL),
(4, 'Emily Brown', 'Marketing Specialist', 'Marketing', 'RFID-004', '2024-03-09 05:34:17', NULL, NULL),
(5, 'David Wilson', 'Finance Analyst', 'Finance', 'RFID-005', '2024-03-09 05:34:17', NULL, NULL),
(6, 'Sarah Martinez', 'Customer Service Representative', 'Customer Service', 'RFID-006', '2024-03-09 05:34:17', NULL, NULL),
(7, 'Daniel Taylor', 'Operations Manager', 'Operations', 'RFID-007', '2024-03-09 05:34:17', NULL, NULL),
(8, 'Olivia Garcia', 'Graphic Designer', 'Design', 'RFID-008', '2024-03-09 05:34:17', NULL, NULL),
(9, 'Ethan Anderson', 'IT Support Specialist', 'IT', 'RFID-009', '2024-03-09 05:34:17', NULL, NULL),
(10, 'Sophia Hernandez', 'Administrative Assistant', 'Administration', 'RFID-010', '2024-03-09 05:34:17', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin_users`
--
ALTER TABLE `admin_users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `attendance_logs`
--
ALTER TABLE `attendance_logs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `employee_id` (`employee_id`);

--
-- Indexes for table `database_activity_log`
--
ALTER TABLE `database_activity_log`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `attendance_logs`
--
ALTER TABLE `attendance_logs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `employees`
--
ALTER TABLE `employees`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `attendance_logs`
--
ALTER TABLE `attendance_logs`
  ADD CONSTRAINT `attendance_logs_ibfk_1` FOREIGN KEY (`employee_id`) REFERENCES `employees` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
