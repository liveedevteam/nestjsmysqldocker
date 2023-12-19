-- Grant FILE privilege to the 'root' user
GRANT FILE ON *.* TO 'root'@'%';
FLUSH PRIVILEGES;

-- Create the 'Prevent_Disaster' database and set it as the active database
CREATE DATABASE IF NOT EXISTS Prevent_Disaster;
USE Prevent_Disaster;

-- Create 'obstacle_type' table
CREATE TABLE IF NOT EXISTS obstacle_type (
    obstacle_type_id INT AUTO_INCREMENT PRIMARY KEY,
    obstacle_type_name VARCHAR(255),
    note TEXT,
    status INT,
    create_by VARCHAR(255),
    create_date DATETIME,
    update_by VARCHAR(255),
    update_date DATETIME,
    delete_by VARCHAR(255),
    delete_date DATETIME,
    create_by_id INT,
    update_by_id INT,
    delete_by_id INT
);

-- Create 'obstacle' table
CREATE TABLE IF NOT EXISTS obstacle (
    obstacle_id INT,
    obstacle_type_id INT,
    title VARCHAR(255),
    start_date DATETIME,
    obstacle_status INT,
    lat DECIMAL(10, 7),
    `long` DECIMAL(10, 7),
    note TEXT,
    status INT,
    create_by VARCHAR(255),
    create_date DATETIME,
    update_by VARCHAR(255),
    update_date DATETIME,
    delete_by VARCHAR(255),
    delete_date DATETIME,
    end_date DATETIME,
    province_name VARCHAR(255),
    amphoe_name VARCHAR(255),
    tambon_name VARCHAR(255),
    mooban_name VARCHAR(255),
    province_code INT,
    amphoe_code INT,
    tambon_code INT,
    mooban_code INT
);

-- Insert predefined data into the 'obstacle_type' table
INSERT INTO obstacle_type (obstacle_type_name, note, status, create_by, create_date, update_by, update_date, delete_by, delete_date, create_by_id, update_by_id, delete_by_id) VALUES
(N'น้ำท่วมถนน', NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(N'สะพานขาด', NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(N'ถนนขาด', NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(N'ดินถล่ม', NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- Import data from the CSV file into the 'obstacle' table
LOAD DATA LOCAL INFILE '/docker-entrypoint-initdb.d/data.csv'
INTO TABLE obstacle
FIELDS TERMINATED BY ','
OPTIONALLY ENCLOSED BY '\"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS
(obstacle_id, obstacle_type_id, title, start_date, obstacle_status, lat, `long`, note, status, create_by, create_date, update_by, update_date, delete_by, delete_date, end_date, province_name, amphoe_name, tambon_name, mooban_name, province_code, amphoe_code, tambon_code, mooban_code);