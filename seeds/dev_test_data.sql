DROP DATABASE ecommerce;

CREATE DATABASE ecommerce;

USE ecommerce;

CREATE TABLE Products (
id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(100),
price INT,
image VARCHAR(100),
product_desc VARCHAR(255),
PRIMARY KEY (id)
);

INSERT INTO Products (product_name, price, image, product_desc)
VALUES
('Starfish Print Shirt', '500', '/products/beach-shirt1.jpg', 'This design encapsulates the beauty of the coral reefs'),
('Black Dress Shirt', '650', '/products/black-dress-shirt2.jpg', 'Classy and matches with anything'),
('Black Bomber Jacket', '1000', '/products/black-jacket2.jpg', 'Stylish bomber with an embroidered maze pattern'),
('Blue Blazer', '700', '/products/blue-blazer1.jpg', 'Striking design that will turn heads'),
('Nappa Leather Bomber Jacket', '850', '/products/bomber-jacket1.jpg', 'Made from premium nappa leather, with golden colored silk embroidery'),
('Chain Blouson', '900', '/products/chain-blouson1.jpg', 'Unique design with golden colored woven links'),
('Silk Gold Print Shirt', '1200', '/products/gold-shirt1.jpg', 'This golden lined special design encapsulates opulance'),
('Gray T-Shirt', '300', '/products/gray-tshirt1.jpeg', 'Low profile gray tee made from premium materials'),
('Renaissance Bomber Jacket', '900', '/products/renaissance-jacket1.jpg', 'Multicolor shirt with patterns reminiscent of the Age of Renaissance'),
('Maze Print Silk Shirt', '600', '/products/stripe-shirt1.jpg', 'Button-up embroidered with a bi-color maze pattern'),
('White Dress Shirt', '500', '/products/white-button1.jpg', 'Classic white button up that fits both formal and casual settings'),
('White Stripe T-Shirt', '300', '/products/white-tshirt1.jpeg', 'Low profile white tee with stripe made from premium materials');




