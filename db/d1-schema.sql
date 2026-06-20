CREATE TABLE IF NOT EXISTS projects (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT NOT NULL UNIQUE,
  badge TEXT NOT NULL DEFAULT 'WEB',
  accent TEXT NOT NULL DEFAULT 'indigo',
  title_id TEXT NOT NULL,
  title_en TEXT NOT NULL,
  description_id TEXT NOT NULL,
  description_en TEXT NOT NULL,
  role_id TEXT NOT NULL,
  role_en TEXT NOT NULL,
  features_id TEXT NOT NULL,
  features_en TEXT NOT NULL,
  tech TEXT NOT NULL,
  demo_url TEXT,
  github_url TEXT,
  sort_order INTEGER NOT NULL DEFAULT 0,
  published INTEGER NOT NULL DEFAULT 1,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS certificates (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title_id TEXT NOT NULL,
  title_en TEXT NOT NULL,
  provider_id TEXT NOT NULL,
  provider_en TEXT NOT NULL,
  year TEXT NOT NULL,
  sort_order INTEGER NOT NULL DEFAULT 0,
  published INTEGER NOT NULL DEFAULT 1,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS technologies (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  category TEXT NOT NULL DEFAULT 'tool',
  label_id TEXT NOT NULL,
  label_en TEXT NOT NULL,
  weight INTEGER NOT NULL DEFAULT 0,
  sort_order INTEGER NOT NULL DEFAULT 0,
  published INTEGER NOT NULL DEFAULT 1,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO projects (slug, badge, accent, title_id, title_en, description_id, description_en, role_id, role_en, features_id, features_en, tech, demo_url, github_url, sort_order, published)
SELECT 'sistem-monitoring-perkuliahan', 'WEB', 'indigo', 'Sistem Monitoring Perkuliahan', 'Course Monitoring System', 'Platform monitoring perkuliahan berbasis API RESTful menggunakan Laravel, memungkinkan tracking kehadiran, jadwal, dan progress akademik secara real-time.', 'A course monitoring platform built with RESTful API and Laravel, enabling real-time tracking of attendance, schedules, and academic progress.', 'Full-stack Developer', 'Full-stack Developer', '["Tracking kehadiran mahasiswa","Dashboard progress akademik","REST API untuk integrasi"]', '["Student attendance tracking","Academic progress dashboard","REST API for integration"]', '["Laravel","REST API","MySQL","PHP"]', '', '', 1, 1
WHERE NOT EXISTS (SELECT 1 FROM projects WHERE slug = 'sistem-monitoring-perkuliahan');

INSERT INTO projects (slug, badge, accent, title_id, title_en, description_id, description_en, role_id, role_en, features_id, features_en, tech, demo_url, github_url, sort_order, published)
SELECT 'deteksi-daun-cnn', 'ML/AI', 'emerald', 'Deteksi Daun Kering vs Segar (CNN)', 'Dry vs Fresh Leaf Detection (CNN)', 'Implementasi Convolutional Neural Network (CNN) untuk mendeteksi dan mengklasifikasikan kondisi daun (kering atau segar) berdasarkan citra digital dengan akurasi tinggi.', 'Implementation of Convolutional Neural Network (CNN) to detect and classify leaf conditions (dry or fresh) from digital images with high accuracy.', 'ML Engineer', 'ML Engineer', '["Klasifikasi citra daun otomatis","Preprocessing & augmentasi data","Visualisasi model performance"]', '["Automatic leaf image classification","Data preprocessing & augmentation","Model performance visualization"]', '["Python","CNN","TensorFlow","OpenCV"]', '', '', 2, 1
WHERE NOT EXISTS (SELECT 1 FROM projects WHERE slug = 'deteksi-daun-cnn');

INSERT INTO projects (slug, badge, accent, title_id, title_en, description_id, description_en, role_id, role_en, features_id, features_en, tech, demo_url, github_url, sort_order, published)
SELECT 'aplikasi-manajemen-produk-javafx', 'DESKTOP', 'violet', 'Aplikasi Manajemen Produk (JavaFX)', 'Product Management App (JavaFX)', 'Aplikasi desktop untuk manajemen produk dengan CRUD operations lengkap, terhubung dengan database MySQL. Dilengkapi dengan fitur pencarian, filter, dan laporan.', 'A desktop application for product management with complete CRUD operations, connected to a MySQL database. Equipped with search, filter, and reporting features.', 'Desktop Developer', 'Desktop Developer', '["CRUD produk lengkap","Pencarian & filter data","Laporan & export data"]', '["Complete product CRUD","Data search & filtering","Reports & data export"]', '["Java","JavaFX","MySQL","JDBC"]', '', '', 3, 1
WHERE NOT EXISTS (SELECT 1 FROM projects WHERE slug = 'aplikasi-manajemen-produk-javafx');

INSERT INTO certificates (title_id, title_en, provider_id, provider_en, year, sort_order, published)
SELECT 'Web Development with Laravel', 'Web Development with Laravel', 'Platform: Dicoding Indonesia', 'Platform: Dicoding Indonesia', '2024', 1, 1
WHERE NOT EXISTS (SELECT 1 FROM certificates WHERE title_id = 'Web Development with Laravel');

INSERT INTO certificates (title_id, title_en, provider_id, provider_en, year, sort_order, published)
SELECT 'Machine Learning Fundamentals', 'Machine Learning Fundamentals', 'Platform: Coursera', 'Platform: Coursera', '2024', 2, 1
WHERE NOT EXISTS (SELECT 1 FROM certificates WHERE title_id = 'Machine Learning Fundamentals');

INSERT INTO certificates (title_id, title_en, provider_id, provider_en, year, sort_order, published)
SELECT 'Database Management Systems', 'Database Management Systems', 'Platform: Bangkit Academy', 'Platform: Bangkit Academy', '2023', 3, 1
WHERE NOT EXISTS (SELECT 1 FROM certificates WHERE title_id = 'Database Management Systems');

INSERT INTO technologies (category, label_id, label_en, weight, sort_order, published)
SELECT 'language', 'Java', 'Java', 85, 1, 1
WHERE NOT EXISTS (SELECT 1 FROM technologies WHERE label_id = 'Java');

INSERT INTO technologies (category, label_id, label_en, weight, sort_order, published)
SELECT 'language', 'Python', 'Python', 80, 2, 1
WHERE NOT EXISTS (SELECT 1 FROM technologies WHERE label_id = 'Python');

INSERT INTO technologies (category, label_id, label_en, weight, sort_order, published)
SELECT 'language', 'PHP', 'PHP', 75, 3, 1
WHERE NOT EXISTS (SELECT 1 FROM technologies WHERE label_id = 'PHP');

INSERT INTO technologies (category, label_id, label_en, weight, sort_order, published)
SELECT 'language', 'SQL', 'SQL', 80, 4, 1
WHERE NOT EXISTS (SELECT 1 FROM technologies WHERE label_id = 'SQL');

INSERT INTO technologies (category, label_id, label_en, weight, sort_order, published)
SELECT 'framework', 'Laravel', 'Laravel', 80, 5, 1
WHERE NOT EXISTS (SELECT 1 FROM technologies WHERE label_id = 'Laravel');

INSERT INTO technologies (category, label_id, label_en, weight, sort_order, published)
SELECT 'framework', 'JavaFX', 'JavaFX', 75, 6, 1
WHERE NOT EXISTS (SELECT 1 FROM technologies WHERE label_id = 'JavaFX');

INSERT INTO technologies (category, label_id, label_en, weight, sort_order, published)
SELECT 'framework', 'TensorFlow', 'TensorFlow', 70, 7, 1
WHERE NOT EXISTS (SELECT 1 FROM technologies WHERE label_id = 'TensorFlow');

INSERT INTO technologies (category, label_id, label_en, weight, sort_order, published)
SELECT 'tool', 'MySQL', 'MySQL', 85, 8, 1
WHERE NOT EXISTS (SELECT 1 FROM technologies WHERE label_id = 'MySQL');

INSERT INTO technologies (category, label_id, label_en, weight, sort_order, published)
SELECT 'tool', 'Git & GitHub', 'Git & GitHub', 80, 9, 1
WHERE NOT EXISTS (SELECT 1 FROM technologies WHERE label_id = 'Git & GitHub');

INSERT INTO technologies (category, label_id, label_en, weight, sort_order, published)
SELECT 'tool', 'REST API', 'REST API', 85, 10, 1
WHERE NOT EXISTS (SELECT 1 FROM technologies WHERE label_id = 'REST API');
