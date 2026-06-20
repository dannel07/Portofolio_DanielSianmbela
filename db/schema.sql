CREATE DATABASE IF NOT EXISTS portfolio_daniel CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE portfolio_daniel;

CREATE TABLE IF NOT EXISTS admins (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  github_id VARCHAR(64) NOT NULL UNIQUE,
  github_username VARCHAR(191) NOT NULL UNIQUE,
  display_name VARCHAR(191) NOT NULL,
  avatar_url TEXT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS projects (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  slug VARCHAR(191) NOT NULL UNIQUE,
  badge VARCHAR(32) NOT NULL DEFAULT 'WEB',
  accent VARCHAR(32) NOT NULL DEFAULT 'indigo',
  title_id VARCHAR(255) NOT NULL,
  title_en VARCHAR(255) NOT NULL,
  description_id TEXT NOT NULL,
  description_en TEXT NOT NULL,
  role_id VARCHAR(255) NOT NULL,
  role_en VARCHAR(255) NOT NULL,
  features_id JSON NOT NULL,
  features_en JSON NOT NULL,
  tech JSON NOT NULL,
  demo_url TEXT NULL,
  github_url TEXT NULL,
  sort_order INT NOT NULL DEFAULT 0,
  published TINYINT(1) NOT NULL DEFAULT 1,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS certificates (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title_id VARCHAR(255) NOT NULL,
  title_en VARCHAR(255) NOT NULL,
  provider_id VARCHAR(255) NOT NULL,
  provider_en VARCHAR(255) NOT NULL,
  year VARCHAR(16) NOT NULL,
  sort_order INT NOT NULL DEFAULT 0,
  published TINYINT(1) NOT NULL DEFAULT 1,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS technologies (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  category VARCHAR(64) NOT NULL DEFAULT 'tool',
  label_id VARCHAR(255) NOT NULL,
  label_en VARCHAR(255) NOT NULL,
  weight INT NOT NULL DEFAULT 0,
  sort_order INT NOT NULL DEFAULT 0,
  published TINYINT(1) NOT NULL DEFAULT 1,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO projects (slug, badge, accent, title_id, title_en, description_id, description_en, role_id, role_en, features_id, features_en, tech, demo_url, github_url, sort_order, published)
SELECT 'sistem-monitoring-perkuliahan', 'WEB', 'indigo', 'Sistem Monitoring Perkuliahan', 'Course Monitoring System', 'Platform monitoring perkuliahan berbasis API RESTful menggunakan Laravel, memungkinkan tracking kehadiran, jadwal, dan progress akademik secara real-time.', 'A course monitoring platform built with RESTful API and Laravel, enabling real-time tracking of attendance, schedules, and academic progress.', 'Full-stack Developer', 'Full-stack Developer', JSON_ARRAY('Tracking kehadiran mahasiswa','Dashboard progress akademik','REST API untuk integrasi'), JSON_ARRAY('Student attendance tracking','Academic progress dashboard','REST API for integration'), JSON_ARRAY('Laravel','REST API','MySQL','PHP'), '', '', 1, 1
WHERE NOT EXISTS (SELECT 1 FROM projects);

INSERT INTO projects (slug, badge, accent, title_id, title_en, description_id, description_en, role_id, role_en, features_id, features_en, tech, demo_url, github_url, sort_order, published)
SELECT 'deteksi-daun-cnn', 'ML/AI', 'emerald', 'Deteksi Daun Kering vs Segar (CNN)', 'Dry vs Fresh Leaf Detection (CNN)', 'Implementasi Convolutional Neural Network (CNN) untuk mendeteksi dan mengklasifikasikan kondisi daun (kering atau segar) berdasarkan citra digital dengan akurasi tinggi.', 'Implementation of Convolutional Neural Network (CNN) to detect and classify leaf conditions (dry or fresh) from digital images with high accuracy.', 'ML Engineer', 'ML Engineer', JSON_ARRAY('Klasifikasi citra daun otomatis','Preprocessing & augmentasi data','Visualisasi model performance'), JSON_ARRAY('Automatic leaf image classification','Data preprocessing & augmentation','Model performance visualization'), JSON_ARRAY('Python','CNN','TensorFlow','OpenCV'), '', '', 2, 1
WHERE NOT EXISTS (SELECT 1 FROM projects WHERE slug='deteksi-daun-cnn');

INSERT INTO projects (slug, badge, accent, title_id, title_en, description_id, description_en, role_id, role_en, features_id, features_en, tech, demo_url, github_url, sort_order, published)
SELECT 'aplikasi-manajemen-produk-javafx', 'DESKTOP', 'violet', 'Aplikasi Manajemen Produk (JavaFX)', 'Product Management App (JavaFX)', 'Aplikasi desktop untuk manajemen produk dengan CRUD operations lengkap, terhubung dengan database MySQL. Dilengkapi dengan fitur pencarian, filter, dan laporan.', 'A desktop application for product management with complete CRUD operations, connected to a MySQL database. Equipped with search, filter, and reporting features.', 'Desktop Developer', 'Desktop Developer', JSON_ARRAY('CRUD produk lengkap','Pencarian & filter data','Laporan & export data'), JSON_ARRAY('Complete product CRUD','Data search & filtering','Reports & data export'), JSON_ARRAY('Java','JavaFX','MySQL','JDBC'), '', '', 3, 1
WHERE NOT EXISTS (SELECT 1 FROM projects WHERE slug='aplikasi-manajemen-produk-javafx');

INSERT INTO certificates (title_id, title_en, provider_id, provider_en, year, sort_order, published)
SELECT 'Web Development with Laravel', 'Web Development with Laravel', 'Platform: Dicoding Indonesia', 'Platform: Dicoding Indonesia', '2024', 1, 1
WHERE NOT EXISTS (SELECT 1 FROM certificates);

INSERT INTO certificates (title_id, title_en, provider_id, provider_en, year, sort_order, published)
SELECT 'Machine Learning Fundamentals', 'Machine Learning Fundamentals', 'Platform: Coursera', 'Platform: Coursera', '2024', 2, 1
WHERE NOT EXISTS (SELECT 1 FROM certificates WHERE title_id='Machine Learning Fundamentals');

INSERT INTO certificates (title_id, title_en, provider_id, provider_en, year, sort_order, published)
SELECT 'Database Management Systems', 'Database Management Systems', 'Platform: Bangkit Academy', 'Platform: Bangkit Academy', '2023', 3, 1
WHERE NOT EXISTS (SELECT 1 FROM certificates WHERE title_id='Database Management Systems');

INSERT INTO technologies (category, label_id, label_en, weight, sort_order, published)
SELECT 'language', 'Java', 'Java', 85, 1, 1
WHERE NOT EXISTS (SELECT 1 FROM technologies);

INSERT INTO technologies (category, label_id, label_en, weight, sort_order, published)
SELECT 'language', 'Python', 'Python', 80, 2, 1
WHERE NOT EXISTS (SELECT 1 FROM technologies WHERE label_id='Python');

INSERT INTO technologies (category, label_id, label_en, weight, sort_order, published)
SELECT 'language', 'PHP', 'PHP', 75, 3, 1
WHERE NOT EXISTS (SELECT 1 FROM technologies WHERE label_id='PHP');

INSERT INTO technologies (category, label_id, label_en, weight, sort_order, published)
SELECT 'language', 'SQL', 'SQL', 80, 4, 1
WHERE NOT EXISTS (SELECT 1 FROM technologies WHERE label_id='SQL');

INSERT INTO technologies (category, label_id, label_en, weight, sort_order, published)
SELECT 'framework', 'Laravel', 'Laravel', 80, 5, 1
WHERE NOT EXISTS (SELECT 1 FROM technologies WHERE label_id='Laravel');

INSERT INTO technologies (category, label_id, label_en, weight, sort_order, published)
SELECT 'framework', 'JavaFX', 'JavaFX', 75, 6, 1
WHERE NOT EXISTS (SELECT 1 FROM technologies WHERE label_id='JavaFX');

INSERT INTO technologies (category, label_id, label_en, weight, sort_order, published)
SELECT 'framework', 'TensorFlow', 'TensorFlow', 70, 7, 1
WHERE NOT EXISTS (SELECT 1 FROM technologies WHERE label_id='TensorFlow');

INSERT INTO technologies (category, label_id, label_en, weight, sort_order, published)
SELECT 'tool', 'MySQL', 'MySQL', 85, 8, 1
WHERE NOT EXISTS (SELECT 1 FROM technologies WHERE label_id='MySQL');

INSERT INTO technologies (category, label_id, label_en, weight, sort_order, published)
SELECT 'tool', 'Git & GitHub', 'Git & GitHub', 80, 9, 1
WHERE NOT EXISTS (SELECT 1 FROM technologies WHERE label_id='Git & GitHub');

INSERT INTO technologies (category, label_id, label_en, weight, sort_order, published)
SELECT 'tool', 'REST API', 'REST API', 85, 10, 1
WHERE NOT EXISTS (SELECT 1 FROM technologies WHERE label_id='REST API');
