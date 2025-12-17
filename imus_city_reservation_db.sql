-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 17, 2025 at 05:52 AM
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
-- Database: `imus_city_reservation_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `id` int(11) NOT NULL,
  `employeeid` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `isAdmin` enum('admin','notAdmin') DEFAULT 'notAdmin',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`id`, `employeeid`, `password`, `first_name`, `last_name`, `isAdmin`, `created_at`) VALUES
(1, 'ADM01', 'admin', 'IT', 'ADMIN', 'admin', '2025-12-14 04:13:08'),
(2, 'EMP01', '123', 'Juan', 'Dela Cruz', 'notAdmin', '2025-12-14 06:20:45');

-- --------------------------------------------------------

--
-- Table structure for table `news_carousel_items`
--

CREATE TABLE `news_carousel_items` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `excerpt` text NOT NULL,
  `image_path` varchar(255) DEFAULT NULL,
  `image_alt` varchar(255) DEFAULT NULL,
  `link` varchar(500) DEFAULT NULL,
  `display_order` int(11) DEFAULT 0,
  `status` enum('active','inactive','archived') DEFAULT 'active',
  `news_date` varchar(50) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `news_carousel_items`
--

INSERT INTO `news_carousel_items` (`id`, `title`, `excerpt`, `image_path`, `image_alt`, `link`, `display_order`, `status`, `news_date`, `created_at`, `updated_at`) VALUES
(1, 'Imus Pride 2025: Makulay ang Ating Layunin', 'Celebrating diversity and inclusion in Imus City', '2025_July_ImusPride.jpg', 'Imus Pride 2025 celebration', 'News/2025_July.html#Up_news426', 1, 'active', 'July', '2025-12-17 02:11:55', '2025-12-17 02:11:55'),
(2, '4 na Imuseño, hinandugan ni Mayor AA ng prosthetic legs', 'Mayor AA provides prosthetic legs to 4 Imuseño beneficiaries', '2025_July_ProstheticLegs.jpg', 'Prosthetic legs donation ceremony', 'News/2025_July.html#Up_news425', 2, 'active', 'July', '2025-12-17 02:11:55', '2025-12-17 02:11:55'),
(3, 'Mayor AA, nakatanggap ng pagkilala mula BJMP CALABARZON', 'Mayor AA receives recognition from BJMP CALABARZON', '2025_July_MayorNakatanggapNgPagkilalaSaBJMPCALABARZON.jpg', 'Mayor AA recognition ceremony', 'News/2025_July.html#Up_news421', 3, 'active', 'July', '2025-12-17 02:11:55', '2025-12-17 02:11:55'),
(4, 'Cardinal Tagle bumisita sa Imus LGU', 'Cardinal Tagle visits Imus LGU for pastoral engagement', '2025_July_CardinalTagleBumisitasaImusLGU.jpg', 'Cardinal Tagle visit to Imus', 'News/2025_July.html#Up_news420', 4, 'active', 'July', '2025-12-17 02:11:55', '2025-12-17 02:11:55'),
(5, '25 bagong halal na opisyal ng HOA sa Imus, nanumpa', '25 newly elected HOA officials in Imus take oath', '2025_July_BagongHalalnaOpisyalngHOA.jpg', 'HOA officials oath taking ceremony', 'News/2025_July.html#Up_news418', 5, 'active', 'July', '2025-12-17 02:11:55', '2025-12-17 02:11:55'),
(6, 'Mayor AA, binisita si Imuseño centenarian Sevilla Ancheta', 'Mayor AA visits Imuseño centenarian Sevilla Ancheta', '2025_July_ImusCentenarianSevillaAncheta.jpg', 'Mayor visiting centenarian', 'News/2025_July.html#Up_news414', 6, 'active', 'July', '2025-12-17 02:11:55', '2025-12-17 04:30:04');

-- --------------------------------------------------------

--
-- Table structure for table `reservations`
--

CREATE TABLE `reservations` (
  `id` int(11) NOT NULL,
  `queue_id` varchar(20) NOT NULL,
  `form_name` varchar(200) NOT NULL,
  `full_name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `reservation_date` date NOT NULL,
  `reservation_time` time NOT NULL,
  `action_date` date NOT NULL,
  `status` enum('Pending','Complete','Cancelled','Rescheduled') DEFAULT 'Pending',
  `remarks` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `reservations`
--

INSERT INTO `reservations` (`id`, `queue_id`, `form_name`, `full_name`, `email`, `reservation_date`, `reservation_time`, `action_date`, `status`, `remarks`, `created_at`) VALUES
(1, '241217001', 'Business Permit Application', 'Juan Dela Cruz', 'juan.dc@email.com', '2024-12-17', '08:30:00', '2024-12-17', 'Complete', 'New business registration processed', '2025-12-16 15:47:18'),
(2, '241218006', 'Business Permit Application', 'Nancy Wilson', 'nancy.w@email.com', '2024-12-18', '10:30:00', '2024-12-18', 'Complete', 'Renewal completed', '2025-12-16 15:47:18'),
(3, '241219003', 'Business Permit Application', 'Christopher Martinez', 'chris.m@email.com', '2024-12-19', '09:00:00', '2024-12-19', 'Complete', 'Business expansion permit', '2025-12-16 15:47:18'),
(4, '241220007', 'Business Permit Application', 'James Hill', 'james.h@email.com', '2024-12-20', '11:00:00', '2024-12-20', 'Complete', 'Small business permit', '2025-12-16 15:47:18'),
(5, '241217002', 'Marriage License', 'Maria Santos', 'maria.s@email.com', '2024-12-17', '09:00:00', '2024-12-17', 'Complete', 'License issued', '2025-12-16 15:47:18'),
(6, '241218005', 'Marriage License', 'Mark Miller', 'mark.m@email.com', '2024-12-18', '10:00:00', '2024-12-18', 'Complete', 'Requirements verified', '2025-12-16 15:47:18'),
(7, '241219002', 'Marriage License', 'Michelle Garcia', 'michelle.g@email.com', '2024-12-19', '08:30:00', '2024-12-19', 'Complete', 'License processed', '2025-12-16 15:47:18'),
(8, '241220006', 'Marriage License', 'Elizabeth Lopez', 'elizabeth.l@email.com', '2024-12-20', '10:30:00', '2024-12-20', 'Complete', 'Nuptial license', '2025-12-16 15:47:18'),
(9, '241217003', 'Real Property Tax Payment', 'Carlos Reyes', 'carlos.r@email.com', '2024-12-17', '09:30:00', '2024-12-17', 'Complete', 'Annual tax paid', '2025-12-16 15:47:18'),
(10, '241218007', 'Real Property Tax Payment', 'Robert Taylor', 'robert.t@email.com', '2024-12-18', '11:00:00', '2024-12-18', 'Complete', 'Property tax', '2025-12-16 15:47:18'),
(11, '241219004', 'Real Property Tax Payment', 'Amanda Robinson', 'amanda.r@email.com', '2024-12-19', '09:30:00', '2024-12-19', 'Complete', 'Tax payment completed', '2025-12-16 15:47:18'),
(12, '241220001', 'Real Property Tax Payment', 'Joshua Allen', 'joshua.a@email.com', '2024-12-20', '08:00:00', '2024-12-20', 'Complete', 'Real estate tax', '2025-12-16 15:47:18'),
(13, '241217004', 'Barangay Clearance', 'Ana Torres', 'ana.t@email.com', '2024-12-17', '10:00:00', '2024-12-17', 'Complete', 'Clearance issued', '2025-12-16 15:47:18'),
(14, '241218001', 'Barangay Clearance', 'James Wilson', 'james.w@email.com', '2024-12-18', '08:00:00', '2024-12-18', 'Complete', 'Employment clearance', '2025-12-16 15:47:18'),
(15, '241219005', 'Barangay Clearance', 'Kevin Clark', 'kevin.c@email.com', '2024-12-19', '10:00:00', '2024-12-19', 'Complete', 'Business clearance', '2025-12-16 15:47:18'),
(16, '241220002', 'Barangay Clearance', 'Samantha Young', 'samantha.y@email.com', '2024-12-20', '08:30:00', '2024-12-20', 'Complete', 'Community clearance', '2025-12-16 15:47:18'),
(17, '241217011', 'Building Permit', 'Roberto Lim', 'roberto.l@email.com', '2024-12-17', '10:30:00', '2024-12-17', 'Cancelled', 'Client cancelled appointment', '2025-12-16 15:47:18'),
(18, '241218002', 'Building Permit', 'Sarah Johnson', 'sarah.j@email.com', '2024-12-18', '08:30:00', '2024-12-18', 'Complete', 'Construction permit approved', '2025-12-16 15:47:18'),
(19, '241219006', 'Building Permit', 'Melissa Rodriguez', 'melissa.r@email.com', '2024-12-19', '10:30:00', '2024-12-19', 'Complete', 'Renovation permit', '2025-12-16 15:47:18'),
(20, '241220003', 'Building Permit', 'Matthew Hernandez', 'matthew.h@email.com', '2024-12-20', '09:00:00', '2024-12-20', 'Complete', 'New construction permit', '2025-12-16 15:47:18'),
(21, '241217006', 'Police Clearance', 'Liza Gonzales', 'liza.g@email.com', '2024-12-17', '11:00:00', '2024-12-17', 'Complete', 'Clearance for employment', '2025-12-16 15:47:18'),
(22, '241218003', 'Police Clearance', 'David Brown', 'david.b@email.com', '2024-12-18', '09:00:00', '2024-12-18', 'Complete', 'Travel clearance', '2025-12-16 15:47:18'),
(23, '241219007', 'Police Clearance', 'Steven Lewis', 'steven.l@email.com', '2024-12-19', '11:00:00', '2024-12-19', 'Complete', 'Employment clearance', '2025-12-16 15:47:18'),
(24, '241220004', 'Police Clearance', 'Stephanie King', 'stephanie.k@email.com', '2024-12-20', '09:30:00', '2024-12-20', 'Complete', 'NBI clearance', '2025-12-16 15:47:18'),
(25, '241217007', 'Community Tax Certificate', 'Michael Tan', 'michael.t@email.com', '2024-12-17', '11:30:00', '2024-12-17', 'Complete', 'Cedula issued', '2025-12-16 15:47:18'),
(26, '241218004', 'Community Tax Certificate', 'Lisa Davis', 'lisa.d@email.com', '2024-12-18', '09:30:00', '2024-12-18', 'Complete', 'Community tax certificate', '2025-12-16 15:47:18'),
(27, '241219001', 'Community Tax Certificate', 'Daniel Thompson', 'daniel.t@email.com', '2024-12-19', '08:00:00', '2024-12-19', 'Complete', 'Cedula processed', '2025-12-16 15:47:18'),
(28, '241220005', 'Community Tax Certificate', 'Andrew Wright', 'andrew.w@email.com', '2024-12-20', '10:00:00', '2024-12-20', 'Complete', 'Tax certificate', '2025-12-16 15:47:18'),
(29, '241217008', 'Fire Station Application', 'Carlos Fernandez', 'carlos.f@email.com', '2024-12-17', '13:00:00', '2024-12-17', 'Complete', 'Fire safety inspection', '2025-12-16 15:47:18'),
(30, '241218008', 'Fire Station Application', 'Maria Rodriguez', 'maria.r@email.com', '2024-12-18', '11:30:00', '2024-12-18', 'Complete', 'Fire drill approval', '2025-12-16 15:47:18'),
(31, '241219009', 'Fire Station Application', 'Luis Santos', 'luis.s@email.com', '2024-12-19', '13:00:00', '2024-12-19', 'Pending', 'Fire safety certificate', '2025-12-16 15:47:18'),
(32, '241220008', 'Fire Station Application', 'Andrea Cruz', 'andrea.c@email.com', '2024-12-20', '11:30:00', '2024-12-20', 'Complete', 'Fire exit inspection', '2025-12-16 15:47:18'),
(33, '241217010', 'Real Property Tax Payment', 'Patricia Chen', 'patricia.c@email.com', '2024-12-17', '14:00:00', '2024-12-17', 'Rescheduled', 'Client requested reschedule', '2025-12-16 15:47:18'),
(34, '241219010', 'Community Tax Certificate', 'Ashley Lee', 'ashley.l@email.com', '2024-12-19', '13:30:00', '2024-12-19', 'Rescheduled', 'Missing documents', '2025-12-16 15:47:18'),
(35, '241220010', 'Fire Station Application', 'Miguel Reyes', 'miguel.r@email.com', '2024-12-20', '13:30:00', '2024-12-20', 'Rescheduled', 'Rescheduled to next week', '2025-12-16 15:47:18'),
(36, '241217009', 'Business Permit Application', 'Jose Martinez', 'jose.m@email.com', '2024-12-17', '13:30:00', '2024-12-17', 'Pending', 'Awaiting documents', '2025-12-16 15:47:18'),
(37, '241218009', 'Building Permit', 'Thomas Moore', 'thomas.m@email.com', '2024-12-18', '13:00:00', '2024-12-18', 'Pending', 'Under review', '2025-12-16 15:47:18'),
(38, '241218011', 'Police Clearance', 'Jennifer Martin', 'jennifer.m@email.com', '2024-12-18', '13:30:00', '2024-12-18', 'Pending', 'Background check', '2025-12-16 15:47:18'),
(39, '241219008', 'Community Tax Certificate', 'Ashley Lee', 'ashley.l@email.com', '2024-12-19', '11:30:00', '2024-12-19', 'Pending', 'Document verification', '2025-12-16 15:47:18'),
(40, '241217005', 'Building Permit', 'Roberto Lim', 'roberto.l@email.com', '2024-12-17', '10:30:00', '2024-12-17', 'Cancelled', 'Client cancelled', '2025-12-16 15:47:18'),
(41, '241218012', 'Police Clearance', 'Lisa Martin', 'lisa.m@email.com', '2024-12-18', '14:00:00', '2024-12-18', 'Cancelled', 'No-show', '2025-12-16 15:47:18'),
(42, '241219011', 'Barangay Clearance', 'Nicholas Green', 'nicholas.g@email.com', '2024-12-19', '14:00:00', '2024-12-19', 'Cancelled', 'Business closed', '2025-12-16 15:47:18'),
(43, '241220009', 'Marriage License', 'Olivia Scott', 'olivia.s@email.com', '2024-12-20', '13:00:00', '2024-12-20', 'Cancelled', 'Cancelled by client', '2025-12-16 15:47:18'),
(44, '250106001', 'Business Permit Application', 'Dylan Morgan', 'dylan.m@email.com', '2025-01-06', '08:00:00', '2025-01-06', 'Pending', 'New business application', '2025-12-16 15:47:18'),
(45, '250106002', 'Police Clearance', 'Natalie Bell', 'natalie.b@email.com', '2025-01-06', '08:30:00', '2025-01-06', 'Pending', 'Awaiting documents', '2025-12-16 15:47:18'),
(46, '250106003', 'Community Tax Certificate', 'Caleb Murphy', 'caleb.m@email.com', '2025-01-06', '09:00:00', '2025-01-06', 'Pending', 'Under review', '2025-12-16 15:47:18'),
(47, '250106004', 'Marriage License', 'Zoe Bailey', 'zoe.b@email.com', '2025-01-06', '09:30:00', '2025-01-06', 'Pending', 'Processing', '2025-12-16 15:47:18'),
(48, '250106005', 'Fire Station Application', 'Jordan Rivera', 'jordan.r@email.com', '2025-01-06', '10:00:00', '2025-01-06', 'Pending', 'Fire safety inspection', '2025-12-16 15:47:18'),
(49, '251217001', 'Fire Station Application', 'John Doe', 'JDoe@email.com', '2025-12-17', '08:00:00', '2025-12-16', 'Pending', '', '2025-12-16 15:58:25'),
(50, '251217002', 'Fire Station Application', 'Richard Roe', 'RRoe@email.com', '2025-12-17', '08:30:00', '2025-12-16', 'Rescheduled', 'Rescheduled to 2025-12-18 at 08:30. New Queue ID: 251218002', '2025-12-16 15:59:02'),
(51, '251217003', 'Fire Station Application', 'LeBron James', 'LBJ@gmail.com', '2025-12-17', '09:30:00', '2025-12-16', 'Pending', '', '2025-12-16 15:59:50'),
(52, '251218001', 'Fire Station Application', 'Sean Sy', 'SSy@gmail.com', '2025-12-18', '08:00:00', '2025-12-16', 'Pending', '', '2025-12-16 16:00:51'),
(53, '251218002', 'Fire Station Application', 'Richard Roe', 'RRoe@email.com', '2025-12-18', '08:30:00', '2025-12-16', 'Pending', 'Rescheduled from original appointment on 2025-12-17 at 08:30:00. Original Queue ID: 251217002', '2025-12-16 16:01:25');

-- --------------------------------------------------------

--
-- Table structure for table `statistics`
--

CREATE TABLE `statistics` (
  `id` int(11) NOT NULL,
  `stat_name` varchar(100) NOT NULL,
  `stat_value` varchar(100) NOT NULL,
  `stat_label` varchar(100) NOT NULL,
  `display_order` int(11) DEFAULT 0,
  `is_active` tinyint(1) DEFAULT 1,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `statistics`
--

INSERT INTO `statistics` (`id`, `stat_name`, `stat_value`, `stat_label`, `display_order`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'population', '539,900', 'Population', 1, 1, '2025-12-15 12:40:45', '2025-12-17 04:29:07'),
(2, 'density', '101.56', 'Persons/sq.km.', 2, 1, '2025-12-15 12:40:45', '2025-12-15 12:40:45'),
(3, 'households', '130,814', 'Number of households', 3, 1, '2025-12-15 12:40:45', '2025-12-15 12:40:45'),
(4, 'growth_rate', '4.24%', 'Population growth rate', 4, 1, '2025-12-15 12:40:45', '2025-12-15 12:40:45'),
(5, 'barangays', '97', 'Barangays', 5, 1, '2025-12-15 12:40:45', '2025-12-15 16:26:26'),
(6, 'Test', '100', 'Test', 7, 0, '2025-12-17 02:25:02', '2025-12-17 02:25:34');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `employeeid` (`employeeid`);

--
-- Indexes for table `news_carousel_items`
--
ALTER TABLE `news_carousel_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_status` (`status`),
  ADD KEY `idx_display_order` (`display_order`),
  ADD KEY `idx_updated_at` (`updated_at`);

--
-- Indexes for table `reservations`
--
ALTER TABLE `reservations`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `queue_id` (`queue_id`),
  ADD KEY `idx_form_date` (`form_name`,`reservation_date`),
  ADD KEY `idx_status` (`status`),
  ADD KEY `idx_queue_id` (`queue_id`);

--
-- Indexes for table `statistics`
--
ALTER TABLE `statistics`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `stat_name` (`stat_name`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `employees`
--
ALTER TABLE `employees`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `news_carousel_items`
--
ALTER TABLE `news_carousel_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `reservations`
--
ALTER TABLE `reservations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- AUTO_INCREMENT for table `statistics`
--
ALTER TABLE `statistics`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
