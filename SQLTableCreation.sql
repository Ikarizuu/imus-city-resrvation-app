-- Create employees table
CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    employeeid VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    isAdmin ENUM('admin', 'notAdmin') DEFAULT 'notAdmin',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create reservations table
CREATE TABLE reservations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    queue_id VARCHAR(20) UNIQUE NOT NULL,
    form_name VARCHAR(200) NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    reservation_date DATE NOT NULL,
    reservation_time TIME NOT NULL,
    action_date DATE NOT NULL,
    status ENUM('Pending', 'Complete', 'Cancelled', 'Rescheduled') DEFAULT 'Pending',
    remarks TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_form_date (form_name, reservation_date),
    INDEX idx_status (status),
    INDEX idx_queue_id (queue_id)
);

-- Create statistics table
CREATE TABLE IF NOT EXISTS statistics (
    id INT AUTO_INCREMENT PRIMARY KEY,
    stat_name VARCHAR(100) NOT NULL UNIQUE,
    stat_value VARCHAR(100) NOT NULL,
    stat_label VARCHAR(100) NOT NULL,
    display_order INT DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create news_carousel_items table
CREATE TABLE IF NOT EXISTS news_carousel_items (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    excerpt TEXT NOT NULL,
    image_path VARCHAR(255),
    image_alt VARCHAR(255),
    link VARCHAR(500),
    display_order INT(11) DEFAULT 0,
    status ENUM('active', 'inactive', 'archived') DEFAULT 'active',
    news_date VARCHAR(50) NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_status (status),
    INDEX idx_display_order (display_order),
    INDEX idx_updated_at (updated_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;