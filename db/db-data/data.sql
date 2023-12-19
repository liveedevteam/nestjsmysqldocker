-- Grant FILE privilege to the 'root' user
GRANT FILE ON *.* TO 'root'@'%';
FLUSH PRIVILEGES;

-- Create the 'Prevent_Disaster' database with UTF-8 encoding
CREATE DATABASE IF NOT EXISTS Prevent_Disaster
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;
USE Prevent_Disaster;

-- Create 'obstacle_type' table with UTF-8 encoding
CREATE TABLE IF NOT EXISTS obstacle_type (
    obstacle_type_id INT AUTO_INCREMENT PRIMARY KEY,
    obstacle_type_name VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    note TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
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
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Create 'obstacle' table with UTF-8 encoding
CREATE TABLE IF NOT EXISTS obstacle (
    obstacle_id INT AUTO_INCREMENT PRIMARY KEY,
    obstacle_type_id INT,
    title VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    start_date DATETIME,
    obstacle_status INT,
    lat DECIMAL(10, 7),
    `long` DECIMAL(10, 7),
    note TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    status INT,
    create_by VARCHAR(255),
    create_date DATETIME,
    update_by VARCHAR(255),
    update_date DATETIME,
    delete_by VARCHAR(255),
    delete_date DATETIME,
    end_date DATETIME,
    province_name VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    amphoe_name VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    tambon_name VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    mooban_name VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    province_code INT,
    amphoe_code INT,
    tambon_code INT,
    mooban_code INT
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Insert predefined data into the 'obstacle_type' table
INSERT INTO obstacle_type (obstacle_type_name, note, status, create_by, create_date, update_by, update_date, delete_by, delete_date, create_by_id, update_by_id, delete_by_id) VALUES
('น้ำท่วมถนน', NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('สะพานขาด', NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('ถนนขาด', NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('ดินถล่ม', NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- Import data from the CSV file into the 'obstacle' table
LOAD DATA INFILE '/docker-entrypoint-initdb.d/data.csv'
INTO TABLE obstacle
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS
(obstacle_id, obstacle_type_id, title, @start_date, @obstacle_status, @lat, @long, note, status, create_by, @create_date, update_by, @update_date, delete_by, @delete_date, @end_date, province_name, amphoe_name, tambon_name, mooban_name, @province_code, @amphoe_code, @tambon_code, @mooban_code)
SET start_date = IF(@start_date = '', NULL, STR_TO_DATE(@start_date, '%m/%d/%Y %H:%i')),
    create_date = IF(@create_date = '', NULL, STR_TO_DATE(@create_date, '%m/%d/%Y %H:%i')),
    update_date = IF(@update_date = '', NULL, STR_TO_DATE(@update_date, '%m/%d/%Y %H:%i')),
    delete_date = IF(@delete_date = '', NULL, STR_TO_DATE(@delete_date, '%m/%d/%Y %H:%i')),
    end_date = IF(@end_date = '', NULL, STR_TO_DATE(@end_date, '%m/%d/%Y %H:%i')),
    mooban_code = CASE WHEN @mooban_code REGEXP '^[0-9]+$' THEN CONVERT(@mooban_code, UNSIGNED) ELSE NULL END,
    lat = IF(@lat = '', NULL, @lat),
    `long` = IF(@long = '', NULL, @long),
    obstacle_status = IF(@obstacle_status = '', NULL, @obstacle_status),
    province_code = CASE WHEN @province_code REGEXP '^[0-9]+$' THEN CONVERT(@province_code, UNSIGNED) ELSE NULL END,
    tambon_code = CASE WHEN @tambon_code REGEXP '^[0-9]+$' THEN CONVERT(@tambon_code, UNSIGNED) ELSE NULL END,
    amphoe_code = CASE WHEN @amphoe_code REGEXP '^[0-9]+$' THEN CONVERT(@amphoe_code, UNSIGNED) ELSE NULL END;
