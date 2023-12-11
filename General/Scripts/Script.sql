CREATE TABLE items (
    item_id INT AUTO_INCREMENT PRIMARY KEY,
    item_name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    day INT NOT NULL,
    month INT NOT NULL,
    year INT NOT NULL
);