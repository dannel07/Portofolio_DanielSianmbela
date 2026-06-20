// ==================== Internationalization ====================
const translations = {
  id: {
    site_title: 'Daniel Sinambela | Portfolio',
    nav_about: 'Tentang',
    nav_skills: 'Keahlian',
    nav_projects: 'Proyek',
    nav_experience: 'Pengalaman',
    nav_education: 'Pendidikan',
    nav_contact: 'Kontak',
    hero_status: 'Tersedia untuk peluang baru',
    hero_role: 'Mahasiswa D4 Teknologi Informasi',
    hero_desc: 'Passionate dalam membangun solusi teknologi yang berdampak, dengan fokus pada <span class="font-semibold text-primary-600 dark:text-primary-400">Software Engineering</span> dan <span class="font-semibold text-accent-600 dark:text-accent-400">Data Engineering</span>.',
    hero_cta_projects: 'Lihat Proyek',
    hero_cta_contact: 'Hubungi Saya',
    hero_scroll: 'Scroll ke bawah',
    hero_image_alt: 'Foto profil Daniel Sinambela',
    about_label: 'TENTANG SAYA',
    about_title: 'Membangun Masa Depan',
    about_title_accent: 'Melalui Teknologi',
    about_code_comment: 'Perkenalan singkat',
    about_code_role: 'Mahasiswa D4 Teknologi Informasi',
    about_code_goal: 'Membangun solusi teknologi yang berdampak',
    about_p1: 'Saya adalah mahasiswa program D4 Teknologi Informasi dengan minat kuat di bidang Software Engineering dan Data Engineering. Memiliki pengalaman dalam pengembangan aplikasi web menggunakan Laravel, pemrograman Java/JavaFX, serta implementasi machine learning dengan Convolutional Neural Network (CNN).',
    about_p2: 'Saya berorientasi pada detail, terbiasa bekerja secara kolaboratif, dan selalu berusaha menerapkan best practices dalam setiap proyek yang saya kerjakan. Tujuan karier saya adalah berkontribusi dalam tim yang inovatif dan terus mengembangkan kemampuan teknis maupun leadership.',
    about_stat_projects: 'Proyek Selesai',
    about_stat_skills: 'Teknologi Dipelajari',
    about_stat_program: 'Program Studi',
    skills_label: 'KEAHLIAN',
    skills_title: 'Teknologi & Keahlian',
    skills_subtitle: 'Perangkat dan teknologi yang saya kuasai untuk membangun solusi digital yang handal dan efisien.',
    skills_programming: 'Bahasa Pemrograman',
    skills_frameworks: 'Tools & Frameworks',
    skills_soft: 'Soft Skills',
    soft_team: 'Kerjasama Tim',
    soft_problem: 'Problem Solving',
    soft_comm: 'Komunikasi',
    soft_learn: 'Fast Learner',
    soft_time: 'Manajemen Waktu',
    soft_detail: 'Detail Oriented',
    projects_label: 'PROYEK UNGGULAN',
    projects_title: 'Proyek Terbaik Saya',
    projects_subtitle: 'Koleksi proyek yang menunjukkan kemampuan teknis dan solusi yang saya bangun.',
    proj_detail: 'Detail Proyek',
    proj_demo: 'Live Demo',
    proj_github: 'GitHub',
    proj_close: 'Tutup',
    proj_demo_unavailable: 'Live demo belum tersedia',
    proj_tech: 'Teknologi:',
    proj_features: 'Fitur Utama:',
    proj_role: 'Peran:',
    proj1_title: 'Sistem Monitoring Perkuliahan',
    proj1_desc: 'Platform monitoring perkuliahan berbasis API RESTful menggunakan Laravel, memungkinkan tracking kehadiran, jadwal, dan progress akademik secara real-time.',
    proj1_f1: 'Tracking kehadiran mahasiswa',
    proj1_f2: 'Dashboard progress akademik',
    proj1_f3: 'REST API untuk integrasi',
    proj1_role: 'Full-stack Developer',
    proj2_title: 'Deteksi Daun Kering vs Segar (CNN)',
    proj2_desc: 'Implementasi Convolutional Neural Network (CNN) untuk mendeteksi dan mengklasifikasikan kondisi daun (kering atau segar) berdasarkan citra digital dengan akurasi tinggi.',
    proj2_f1: 'Klasifikasi citra daun otomatis',
    proj2_f2: 'Preprocessing & augmentasi data',
    proj2_f3: 'Visualisasi model performance',
    proj2_role: 'ML Engineer',
    proj3_title: 'Aplikasi Manajemen Produk (JavaFX)',
    proj3_desc: 'Aplikasi desktop untuk manajemen produk dengan CRUD operations lengkap, terhubung dengan database MySQL. Dilengkapi dengan fitur pencarian, filter, dan laporan.',
    proj3_f1: 'CRUD produk lengkap',
    proj3_f2: 'Pencarian & filter data',
    proj3_f3: 'Laporan & export data',
    proj3_role: 'Desktop Developer',
    exp_label: 'PENGALAMAN',
    exp_title: 'Pengalaman & Aktivitas',
    exp_subtitle: 'Pengalaman yang membentuk kompetensi dan karakter profesional saya.',
    exp1_type: 'Magang',
    exp1_title: 'Software Engineering Intern',
    exp1_company: 'PT. Teknologi Indonesia',
    exp1_desc: 'Berpartisipasi dalam pengembangan aplikasi web berbasis Laravel. Bertanggung jawab membuat REST API, mengintegrasikan database MySQL, dan melakukan testing untuk memastikan kualitas kode.',
    exp2_type: 'Organisasi',
    exp2_title: 'Anggota Divisi Teknologi',
    exp2_company: 'Himpunan Mahasiswa TI',
    exp2_desc: 'Aktif dalam pengembangan website dan sistem informasi untuk kegiatan organisasi. Mengkoordinasikan workshop pemrograman dan tech talk untuk meningkatkan literasi teknologi di kalangan mahasiswa.',
    exp3_type: 'Freelance',
    exp3_title: 'Freelance Web Developer',
    exp3_company: 'Proyek Independen',
    exp3_desc: 'Mengerjakan proyek pembuatan website untuk UMKM dan organisasi lokal. Membangun landing page dan sistem informasi sederhana menggunakan Laravel dan MySQL.',
    edu_label: 'PENDIDIKAN',
    edu_title: 'Riwayat Pendidikan',
    edu_status: 'Aktif',
    edu_program: 'Program Studi D4 Teknologi Informasi',
    edu_desc: 'Program vokasi setara sarjana terapan (D4/S.Tr.Kom) dengan kurikulum berfokus pada Software Engineering, Database, dan Machine Learning. Aktif dalam proyek pengembangan aplikasi dan riset machine learning.',
    edu_focus: 'Fokus Studi:',
    cert_label: 'SERTIFIKAT',
    cert_title: 'Sertifikat & Pelatihan',
    cert_subtitle: 'Sertifikasi dan pelatihan yang meningkatkan kompetensi profesional saya.',
    cert1_title: 'Web Development with Laravel',
    cert1_provider: 'Platform: Dicoding Indonesia',
    cert2_title: 'Machine Learning Fundamentals',
    cert2_provider: 'Platform: Coursera',
    cert3_title: 'Database Management Systems',
    cert3_provider: 'Platform: Bangkit Academy',
    contact_label: 'KONTAK',
    contact_title: 'Mari Terhubung',
    contact_subtitle: 'Tertarik untuk berkolaborasi atau memiliki pertanyaan? Jangan ragu untuk menghubungi saya.',
    form_name: 'Nama Lengkap',
    form_name_ph: 'Nama Anda',
    form_email: 'Email',
    form_email_ph: 'email@contoh.com',
    form_subject: 'Subjek',
    form_subject_ph: 'Subjek pesan',
    form_message: 'Pesan',
    form_message_ph: 'Tulis pesan Anda di sini...',
    form_submit: 'Kirim Pesan',
    form_success: 'Pesan berhasil dikirim! Saya akan segera merespons.',
    footer_copy: '© 2024 Daniel Sinambela. Semua hak dilindungi.',
    footer_rights: 'All rights reserved.',
  },
  en: {
    site_title: 'Daniel Sinambela | Portfolio',
    nav_about: 'About',
    nav_skills: 'Skills',
    nav_projects: 'Projects',
    nav_experience: 'Experience',
    nav_education: 'Education',
    nav_contact: 'Contact',
    hero_status: 'Available for new opportunities',
    hero_role: 'D4 Information Technology Student',
    hero_desc: 'Passionate about building impactful technology solutions, with a focus on <span class="font-semibold text-primary-600 dark:text-primary-400">Software Engineering</span> and <span class="font-semibold text-accent-600 dark:text-accent-400">Data Engineering</span>.',
    hero_cta_projects: 'View Projects',
    hero_cta_contact: 'Contact Me',
    hero_scroll: 'Scroll down',
    hero_image_alt: 'Daniel Sinambela profile photo',
    about_label: 'ABOUT ME',
    about_title: 'Building the Future',
    about_title_accent: 'Through Technology',
    about_code_comment: 'Brief introduction',
    about_code_role: 'D4 Information Technology Student',
    about_code_goal: 'Building impactful technology solutions',
    about_p1: 'I am a D4 Information Technology student with a strong interest in Software Engineering and Data Engineering. I have experience in web application development using Laravel, Java/JavaFX programming, and machine learning implementation with Convolutional Neural Networks (CNN).',
    about_p2: 'I am detail-oriented, experienced in collaborative work, and always strive to apply best practices in every project I undertake. My career goal is to contribute to an innovative team while continuously developing both my technical and leadership skills.',
    about_stat_projects: 'Projects Completed',
    about_stat_skills: 'Technologies Learned',
    about_stat_program: 'Program',
    skills_label: 'SKILLS',
    skills_title: 'Technologies & Skills',
    skills_subtitle: 'Tools and technologies I master to build reliable and efficient digital solutions.',
    skills_programming: 'Programming Languages',
    skills_frameworks: 'Tools & Frameworks',
    skills_soft: 'Soft Skills',
    soft_team: 'Teamwork',
    soft_problem: 'Problem Solving',
    soft_comm: 'Communication',
    soft_learn: 'Fast Learner',
    soft_time: 'Time Management',
    soft_detail: 'Detail Oriented',
    projects_label: 'FEATURED PROJECTS',
    projects_title: 'My Best Projects',
    projects_subtitle: 'A collection of projects that showcase my technical capabilities and solutions.',
    proj_detail: 'Project Detail',
    proj_demo: 'Live Demo',
    proj_github: 'GitHub',
    proj_close: 'Close',
    proj_demo_unavailable: 'Live demo not available yet',
    proj_tech: 'Technologies:',
    proj_features: 'Key Features:',
    proj_role: 'Role:',
    proj1_title: 'Course Monitoring System',
    proj1_desc: 'A course monitoring platform based on RESTful API using Laravel, enabling real-time tracking of attendance, schedules, and academic progress.',
    proj1_f1: 'Student attendance tracking',
    proj1_f2: 'Academic progress dashboard',
    proj1_f3: 'REST API for integration',
    proj1_role: 'Full-stack Developer',
    proj2_title: 'Dry vs Fresh Leaf Detection (CNN)',
    proj2_desc: 'Implementation of Convolutional Neural Network (CNN) to detect and classify leaf conditions (dry or fresh) from digital images with high accuracy.',
    proj2_f1: 'Automatic leaf image classification',
    proj2_f2: 'Data preprocessing & augmentation',
    proj2_f3: 'Model performance visualization',
    proj2_role: 'ML Engineer',
    proj3_title: 'Product Management App (JavaFX)',
    proj3_desc: 'A desktop application for product management with complete CRUD operations, connected to a MySQL database. Equipped with search, filter, and reporting features.',
    proj3_f1: 'Complete product CRUD',
    proj3_f2: 'Data search & filtering',
    proj3_f3: 'Reports & data export',
    proj3_role: 'Desktop Developer',
    exp_label: 'EXPERIENCE',
    exp_title: 'Experience & Activities',
    exp_subtitle: 'Experiences that shape my professional competence and character.',
    exp1_type: 'Internship',
    exp1_title: 'Software Engineering Intern',
    exp1_company: 'PT. Teknologi Indonesia',
    exp1_desc: 'Participated in the development of Laravel-based web applications. Responsible for creating REST APIs, integrating MySQL databases, and conducting testing to ensure code quality.',
    exp2_type: 'Organization',
    exp2_title: 'Technology Division Member',
    exp2_company: 'IT Student Association',
    exp2_desc: 'Active in developing websites and information systems for organizational activities. Coordinated programming workshops and tech talks to improve technology literacy among students.',
    exp3_type: 'Freelance',
    exp3_title: 'Freelance Web Developer',
    exp3_company: 'Independent Projects',
    exp3_desc: 'Worked on website development projects for SMEs and local organizations. Built landing pages and simple information systems using Laravel and MySQL.',
    edu_label: 'EDUCATION',
    edu_title: 'Education History',
    edu_status: 'Active',
    edu_program: 'D4 Information Technology Program',
    edu_desc: 'A vocation program equivalent to an applied bachelor\'s degree (D4/S.Tr.Kom) with a curriculum focused on Software Engineering, Databases, and Machine Learning. Active in application development projects and machine learning research.',
    edu_focus: 'Study Focus:',
    cert_label: 'CERTIFICATES',
    cert_title: 'Certificates & Training',
    cert_subtitle: 'Certifications and training that enhance my professional competence.',
    cert1_title: 'Web Development with Laravel',
    cert1_provider: 'Platform: Dicoding Indonesia',
    cert2_title: 'Machine Learning Fundamentals',
    cert2_provider: 'Platform: Coursera',
    cert3_title: 'Database Management Systems',
    cert3_provider: 'Platform: Bangkit Academy',
    contact_label: 'CONTACT',
    contact_title: 'Let\'s Connect',
    contact_subtitle: 'Interested in collaborating or have questions? Don\'t hesitate to reach out.',
    form_name: 'Full Name',
    form_name_ph: 'Your name',
    form_email: 'Email',
    form_email_ph: 'name@example.com',
    form_subject: 'Subject',
    form_subject_ph: 'Message subject',
    form_message: 'Message',
    form_message_ph: 'Write your message here...',
    form_submit: 'Send Message',
    form_success: 'Message sent successfully! I will respond shortly.',
    footer_copy: '© 2024 Daniel Sinambela. All rights reserved.',
    footer_rights: 'All rights reserved.',
  }
};

let currentLang = 'id';

let portfolioState = {
  projects: [],
  certificates: [],
  technologies: []
};

const projectData = {
  project1: {
    titleKey: 'proj1_title',
    descKey: 'proj1_desc',
    roleKey: 'proj1_role',
    badge: 'WEB',
    tech: ['Laravel', 'REST API', 'MySQL', 'PHP'],
    features: ['proj1_f1', 'proj1_f2', 'proj1_f3'],
    demoUrl: '',
    githubUrl: ''
  },
  project2: {
    titleKey: 'proj2_title',
    descKey: 'proj2_desc',
    roleKey: 'proj2_role',
    badge: 'ML/AI',
    tech: ['Python', 'CNN', 'TensorFlow', 'OpenCV'],
    features: ['proj2_f1', 'proj2_f2', 'proj2_f3'],
    demoUrl: '',
    githubUrl: ''
  },
  project3: {
    titleKey: 'proj3_title',
    descKey: 'proj3_desc',
    roleKey: 'proj3_role',
    badge: 'DESKTOP',
    tech: ['Java', 'JavaFX', 'MySQL', 'JDBC'],
    features: ['proj3_f1', 'proj3_f2', 'proj3_f3'],
    demoUrl: '',
    githubUrl: ''
  }
};

const fallbackPortfolioData = {
  projects: [
    {
      slug: 'sistem-monitoring-perkuliahan',
      badge: 'WEB',
      accent: 'indigo',
      title_id: 'Sistem Monitoring Perkuliahan',
      title_en: 'Course Monitoring System',
      description_id: 'Platform monitoring perkuliahan berbasis API RESTful menggunakan Laravel, memungkinkan tracking kehadiran, jadwal, dan progress akademik secara real-time.',
      description_en: 'A course monitoring platform built with RESTful API and Laravel, enabling real-time tracking of attendance, schedules, and academic progress.',
      role_id: 'Full-stack Developer',
      role_en: 'Full-stack Developer',
      features_id: ['Tracking kehadiran mahasiswa', 'Dashboard progress akademik', 'REST API untuk integrasi'],
      features_en: ['Student attendance tracking', 'Academic progress dashboard', 'REST API for integration'],
      tech: ['Laravel', 'REST API', 'MySQL', 'PHP'],
      demo_url: '',
      github_url: ''
    },
    {
      slug: 'deteksi-daun-cnn',
      badge: 'ML/AI',
      accent: 'emerald',
      title_id: 'Deteksi Daun Kering vs Segar (CNN)',
      title_en: 'Dry vs Fresh Leaf Detection (CNN)',
      description_id: 'Implementasi Convolutional Neural Network (CNN) untuk mendeteksi dan mengklasifikasikan kondisi daun (kering atau segar) berdasarkan citra digital dengan akurasi tinggi.',
      description_en: 'Implementation of Convolutional Neural Network (CNN) to detect and classify leaf conditions (dry or fresh) from digital images with high accuracy.',
      role_id: 'ML Engineer',
      role_en: 'ML Engineer',
      features_id: ['Klasifikasi citra daun otomatis', 'Preprocessing & augmentasi data', 'Visualisasi model performance'],
      features_en: ['Automatic leaf image classification', 'Data preprocessing & augmentation', 'Model performance visualization'],
      tech: ['Python', 'CNN', 'TensorFlow', 'OpenCV'],
      demo_url: '',
      github_url: ''
    },
    {
      slug: 'aplikasi-manajemen-produk-javafx',
      badge: 'DESKTOP',
      accent: 'violet',
      title_id: 'Aplikasi Manajemen Produk (JavaFX)',
      title_en: 'Product Management App (JavaFX)',
      description_id: 'Aplikasi desktop untuk manajemen produk dengan CRUD operations lengkap, terhubung dengan database MySQL. Dilengkapi dengan fitur pencarian, filter, dan laporan.',
      description_en: 'A desktop application for product management with complete CRUD operations, connected to a MySQL database. Equipped with search, filter, and reporting features.',
      role_id: 'Desktop Developer',
      role_en: 'Desktop Developer',
      features_id: ['CRUD produk lengkap', 'Pencarian & filter data', 'Laporan & export data'],
      features_en: ['Complete product CRUD', 'Data search & filtering', 'Reports & data export'],
      tech: ['Java', 'JavaFX', 'MySQL', 'JDBC'],
      demo_url: '',
      github_url: ''
    }
  ],
  certificates: [
    { title_id: 'Web Development with Laravel', title_en: 'Web Development with Laravel', provider_id: 'Platform: Dicoding Indonesia', provider_en: 'Platform: Dicoding Indonesia', year: '2024' },
    { title_id: 'Machine Learning Fundamentals', title_en: 'Machine Learning Fundamentals', provider_id: 'Platform: Coursera', provider_en: 'Platform: Coursera', year: '2024' },
    { title_id: 'Database Management Systems', title_en: 'Database Management Systems', provider_id: 'Platform: Bangkit Academy', provider_en: 'Platform: Bangkit Academy', year: '2023' }
  ],
  technologies: [
    { label_id: 'Java', label_en: 'Java', weight: 85 },
    { label_id: 'Python', label_en: 'Python', weight: 80 },
    { label_id: 'PHP', label_en: 'PHP', weight: 75 },
    { label_id: 'SQL', label_en: 'SQL', weight: 80 },
    { label_id: 'Laravel', label_en: 'Laravel', weight: 80 },
    { label_id: 'JavaFX', label_en: 'JavaFX', weight: 75 },
    { label_id: 'TensorFlow', label_en: 'TensorFlow', weight: 70 },
    { label_id: 'MySQL', label_en: 'MySQL', weight: 85 },
    { label_id: 'Git & GitHub', label_en: 'Git & GitHub', weight: 80 },
    { label_id: 'REST API', label_en: 'REST API', weight: 85 }
  ]
};

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.title = translations[lang].site_title || document.title;

  // Update text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        // Skip, handled by placeholder
      } else {
        el.innerHTML = translations[lang][key];
      }
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-alt]').forEach(el => {
    const key = el.getAttribute('data-i18n-alt');
    if (translations[lang][key]) {
      el.alt = translations[lang][key];
    }
  });

  document.querySelectorAll('[data-project-detail]').forEach(button => {
    button.textContent = translations[lang].proj_detail;
  });
  document.querySelectorAll('[data-project-demo-state]').forEach(button => {
    const projectKey = button.getAttribute('data-project-demo-state');
    const project = projectData[projectKey];
    if (project) {
      button.textContent = project.demoUrl ? translations[lang].proj_demo : translations[lang].proj_demo_unavailable;
    }
  });
  document.querySelectorAll('[data-project-github-state]').forEach(button => {
    button.textContent = translations[lang].proj_github;
  });
  document.querySelectorAll('[data-project-close]').forEach(button => {
    button.textContent = translations[lang].proj_close;
  });

  renderPortfolioData();

  // Update lang toggle buttons
  const toggleBtn = document.getElementById('langToggle');
  const toggleMobileBtn = document.getElementById('langToggleMobile');
  const displayLang = lang === 'id' ? 'EN' : 'ID';
  if (toggleBtn) toggleBtn.textContent = displayLang;
  if (toggleMobileBtn) toggleMobileBtn.textContent = displayLang;
}

// ==================== Theme Toggle ====================
function toggleTheme() {
  document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
}

function renderProjects(projects) {
  const projectCards = document.querySelectorAll('#projects .project-card');
  projectCards.forEach((card, index) => {
    const project = projects[index];
    if (!project) return;

    const titleNode = card.querySelector('[data-i18n^="proj"][data-i18n$="_title"]');
    const descNode = card.querySelector('[data-i18n^="proj"][data-i18n$="_desc"]');
    const roleNode = card.querySelector('[data-i18n^="proj"][data-i18n$="_role"]');
    const techContainer = card.querySelector(`#project${index + 1}TechList`);

    if (titleNode) titleNode.textContent = currentLang === 'id' ? project.title_id : project.title_en;
    if (descNode) descNode.textContent = currentLang === 'id' ? project.description_id : project.description_en;
    if (roleNode) roleNode.textContent = currentLang === 'id' ? project.role_id : project.role_en;
    if (techContainer) {
      techContainer.innerHTML = (project.tech || []).map(tech => `
        <span class="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-xs font-mono font-semibold text-slate-200">${tech}</span>
      `).join('');
    }
  });
}

function renderCertificates(certificates) {
  const certCards = [document.getElementById('certCard1'), document.getElementById('certCard2'), document.getElementById('certCard3')];
  certCards.forEach((card, index) => {
    const item = certificates[index];
    if (!card || !item) return;
    const titleNode = card.querySelector('[data-i18n^="cert"][data-i18n$="_title"]');
    const providerNode = card.querySelector('[data-i18n^="cert"][data-i18n$="_provider"]');
    const yearNode = card.querySelector('.font-mono');
    if (titleNode) titleNode.textContent = currentLang === 'id' ? item.title_id : item.title_en;
    if (providerNode) providerNode.textContent = currentLang === 'id' ? item.provider_id : item.provider_en;
    if (yearNode) yearNode.textContent = item.year;
  });
}

function renderTechnologies(technologies) {
  const container = document.getElementById('skillsFrameworkTags');
  if (!container) return;
  container.innerHTML = technologies.map(item => `
    <span class="skill-tag px-3 py-1.5 rounded-lg bg-accent-50 dark:bg-accent-900/20 text-xs font-semibold text-accent-700 dark:text-accent-300 border border-accent-200 dark:border-accent-800">${currentLang === 'id' ? item.label_id : item.label_en}</span>
  `).join('');
}

function renderPortfolioData() {
  renderProjects(portfolioState.projects.length ? portfolioState.projects : fallbackPortfolioData.projects);
  renderCertificates(portfolioState.certificates.length ? portfolioState.certificates : fallbackPortfolioData.certificates);
  renderTechnologies(portfolioState.technologies.length ? portfolioState.technologies : fallbackPortfolioData.technologies);
}

async function loadPortfolioData() {
  try {
    const response = await fetch('/api/portfolio');
    if (!response.ok) throw new Error('API not available');
    const data = await response.json();
    portfolioState.projects = Array.isArray(data.projects) ? data.projects : [];
    portfolioState.certificates = Array.isArray(data.certificates) ? data.certificates : [];
    portfolioState.technologies = Array.isArray(data.technologies) ? data.technologies : [];
  } catch (error) {
    portfolioState.projects = [];
    portfolioState.certificates = [];
    portfolioState.technologies = [];
  }
  renderPortfolioData();
}

// Load saved theme, default to dark to match the reference portfolio theme
if (localStorage.getItem('theme') === 'light') {
  document.documentElement.classList.remove('dark');
} else {
  document.documentElement.classList.add('dark');
}

document.getElementById('themeToggle').addEventListener('click', toggleTheme);
document.getElementById('themeToggleMobile').addEventListener('click', toggleTheme);

// ==================== Language Toggle ====================
document.getElementById('langToggle').addEventListener('click', () => {
  setLanguage(currentLang === 'id' ? 'en' : 'id');
});
document.getElementById('langToggleMobile').addEventListener('click', () => {
  setLanguage(currentLang === 'id' ? 'en' : 'id');
});

// ==================== Mobile Menu ====================
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Close mobile menu on link click
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
});

// ==================== Navbar Scroll Effect ====================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 50) {
    navbar.classList.add('bg-white/80', 'dark:bg-dark-900/80', 'glass', 'shadow-sm', 'border-b', 'border-dark-200', 'dark:border-dark-800');
  } else {
    navbar.classList.remove('bg-white/80', 'dark:bg-dark-900/80', 'glass', 'shadow-sm', 'border-b', 'border-dark-200', 'dark:border-dark-800');
  }

  lastScroll = currentScroll;
});

// ==================== Active Nav Link ====================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active', 'text-primary-600', 'dark:text-primary-400');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active', 'text-primary-600', 'dark:text-primary-400');
    }
  });
});

// ==================== Scroll Animations ====================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');

      // Animate progress bars
      entry.target.querySelectorAll('.progress-bar').forEach(bar => {
        const width = bar.getAttribute('data-width');
        setTimeout(() => {
          bar.style.width = width;
        }, 300);
      });
    }
  });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(el => {
  observer.observe(el);
});

// ==================== Back to Top ====================
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 500) {
    backToTop.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');
    backToTop.classList.add('opacity-100', 'translate-y-0', 'pointer-events-auto');
  } else {
    backToTop.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
    backToTop.classList.remove('opacity-100', 'translate-y-0', 'pointer-events-auto');
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ==================== Particles ====================
function createParticles() {
  const container = document.getElementById('particles');
  const colors = ['bg-primary-400', 'bg-accent-400', 'bg-purple-400'];

  for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.className = `particle ${colors[Math.floor(Math.random() * colors.length)]}`;
    const size = Math.random() * 4 + 2;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.opacity = Math.random() * 0.3 + 0.1;

    const duration = Math.random() * 10 + 10;
    const delay = Math.random() * 10;
    particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;

    container.appendChild(particle);
  }
}

createParticles();

// ==================== Contact Form ====================
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const successMsg = document.getElementById('formSuccess');
  successMsg.classList.remove('hidden');

  // Reset form
  e.target.reset();

  setTimeout(() => {
    successMsg.classList.add('hidden');
  }, 5000);
});

// ==================== Smooth Scroll for anchor links ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ==================== Project Detail Modal ====================
const projectModal = document.getElementById('projectModal');
const projectModalTitle = document.getElementById('projectModalTitle');
const projectModalBadge = document.getElementById('projectModalBadge');
const projectModalRole = document.getElementById('projectModalRole');
const projectModalDesc = document.getElementById('projectModalDesc');
const projectModalTech = document.getElementById('projectModalTech');
const projectModalFeatures = document.getElementById('projectModalFeatures');
const projectModalDemo = document.getElementById('projectModalDemo');
const projectModalGithub = document.getElementById('projectModalGithub');
const projectModalClose = document.getElementById('projectModalClose');

function closeProjectModal() {
  if (!projectModal) return;
  projectModal.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
}

function openProjectModal(projectKey) {
  const project = projectData[projectKey];
  if (!project || !projectModal) return;

  projectModalBadge.textContent = project.badge;
  projectModalTitle.textContent = translations[currentLang][project.titleKey];
  projectModalRole.textContent = translations[currentLang][project.roleKey];
  projectModalDesc.textContent = translations[currentLang][project.descKey];

  projectModalTech.innerHTML = project.tech.map(tech => `
    <span class="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono font-semibold text-slate-200">${tech}</span>
  `).join('');

  projectModalFeatures.innerHTML = project.features.map(featureKey => `
    <li class="flex items-start gap-2 text-sm text-slate-300">
      <span class="text-fuchsia-400 mt-0.5">✓</span>
      <span>${translations[currentLang][featureKey]}</span>
    </li>
  `).join('');

  if (project.demoUrl) {
    projectModalDemo.href = project.demoUrl;
    projectModalDemo.classList.remove('pointer-events-none', 'opacity-50');
    projectModalDemo.removeAttribute('aria-disabled');
  } else {
    projectModalDemo.href = '#';
    projectModalDemo.classList.add('pointer-events-none', 'opacity-50');
    projectModalDemo.setAttribute('aria-disabled', 'true');
  }

  if (project.githubUrl) {
    projectModalGithub.href = project.githubUrl;
    projectModalGithub.classList.remove('pointer-events-none', 'opacity-50');
    projectModalGithub.removeAttribute('aria-disabled');
  } else {
    projectModalGithub.href = '#';
    projectModalGithub.classList.add('pointer-events-none', 'opacity-50');
    projectModalGithub.setAttribute('aria-disabled', 'true');
  }

  projectModalDemo.textContent = project.demoUrl ? translations[currentLang].proj_demo : translations[currentLang].proj_demo_unavailable;
  projectModalGithub.textContent = translations[currentLang].proj_github;
  projectModalClose.textContent = translations[currentLang].proj_close;

  projectModal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
}

document.querySelectorAll('[data-project-trigger]').forEach(button => {
  button.addEventListener('click', () => openProjectModal(button.getAttribute('data-project-trigger')));
});

document.querySelectorAll('[data-project-demo-state]').forEach(button => {
  button.addEventListener('click', () => {
    const projectKey = button.getAttribute('data-project-demo-state');
    const project = projectData[projectKey];
    if (project && project.demoUrl) {
      window.open(project.demoUrl, '_blank', 'noopener,noreferrer');
      return;
    }
    openProjectModal(projectKey);
  });
});

document.querySelectorAll('[data-project-github-state]').forEach(button => {
  button.addEventListener('click', () => {
    const projectKey = button.getAttribute('data-project-github-state');
    const project = projectData[projectKey];
    if (project && project.githubUrl) {
      window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
      return;
    }
    openProjectModal(projectKey);
  });
});

if (projectModalClose) {
  projectModalClose.addEventListener('click', closeProjectModal);
}

if (projectModal) {
  projectModal.addEventListener('click', event => {
    if (event.target === projectModal) {
      closeProjectModal();
    }
  });
}

window.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeProjectModal();
  }
});

// Initialize language
setLanguage('id');
loadPortfolioData();