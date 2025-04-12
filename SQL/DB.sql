create table users (recid int not null Primary key auto_increment,name varchar(200),email varchar(200),password varchar(200));

--12-04-2025
CREATE TABLE pages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  slug VARCHAR(255) NOT NULL UNIQUE,
  title VARCHAR(255),
  content TEXT
);
INSERT INTO pages (slug, title, content) VALUES
('dashboard', 'Dashboard', 'This is the dashboard page.'),
('settings', 'Settings', 'This is the settings page.'),
('profile', 'Profile', 'This is the profile page.');