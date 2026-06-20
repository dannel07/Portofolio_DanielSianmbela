# 🚀 Panduan Deploy Portfolio ke Cloudflare Pages dengan D1 Database

## 📋 Prasyarat
- Akun GitHub (untuk menyimpan kode)
- Akun Cloudflare (gratis) - daftar di https://dash.cloudflare.com/sign-up
- Git terinstall di komputer Anda
- Node.js dan npm terinstall (untuk testing lokal)

---

## 📚 Langkah 1: Persiapan Kode

### 1.1 Pastikan semua file sudah siap
Pastikan struktur folder Anda sudah lengkap seperti ini:
```
Portofolio_DanielSianmbela/
├── index.html              # Halaman utama portfolio
├── admin/
│   └── index.html          # Panel admin
├── functions/
│   ├── api/
│   │   ├── portfolio.js    # API endpoint
│   │   ├── projects.js     # CRUD projects
│   │   ├── certificates.js # CRUD certificates
│   │   └── technologies.js # CRUD technologies
│   └── _shared.js          # Shared utilities
├── db/
│   └── d1-schema.sql       # Database schema
├── wrangler.toml           # Config Cloudflare
├── .env                    # Environment variables
└── styles.css, script.js
```

### 1.2 Push kode ke GitHub
```bash
# Inisialisasi git (jika belum)
git init

# Tambahkan semua file
git add .

# Commit
git commit -m "Initial commit - Portfolio Daniel Sinambela"

# Hubungkan ke GitHub (ganti dengan repo Anda)
git remote add origin https://github.com/username/portfolio-daniel.git

# Push ke GitHub
git push -u origin main
```

---

## 🗄️ Langkah 2: Buat Database D1 di Cloudflare

### 2.1 Login ke Cloudflare Dashboard
1. Buka https://dash.cloudflare.com/
2. Login dengan akun Anda

### 2.2 Buat D1 Database
1. Di sidebar kiri, klik **"Workers & Pages"**
2. Klik tab **"D1 SQL Database"**
3. Klik tombol **"Create database"**
4. Masukkan nama: `portfolio_daniel`
5. Klik **"Create"**

### 2.3 Dapatkan Database ID
Setelah database dibuat, Anda akan melihat **Database ID** seperti ini:
```
xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```
**SIMPAN ID INI!** Anda akan memerlukannya nanti.

### 2.4 Import Schema Database
1. Di halaman database, klik tab **"Console"**
2. Buka file `db/d1-schema.sql` dari proyek Anda
3. Copy semua isi file tersebut
4. Paste ke Console D1
5. Klik **"Execute"** atau tekan Ctrl+Enter

Atau bisa menggunakan Wrangler CLI (jika sudah terinstall):
```bash
# Install Wrangler
npm install -g wrangler

# Login ke Cloudflare
wrangler login

# Import schema
wrangler d1 execute portfolio_daniel --file=./db/d1-schema.sql
```

### 2.5 Verifikasi Data
Di Console D1, jalankan query ini untuk memastikan data sudah masuk:
```sql
SELECT * FROM projects;
SELECT * FROM certificates;
SELECT * FROM technologies;
```

---

## 🌐 Langkah 3: Deploy ke Cloudflare Pages

### 3.1 Buat Cloudflare Pages Project
1. Di Cloudflare Dashboard, klik **"Workers & Pages"**
2. Klik **"Create application"**
3. Pilih tab **"Pages"**
4. Klik **"Connect to Git"**

### 3.2 Hubungkan Repository GitHub
1. Pilih **GitHub** sebagai Git provider
2. Authorize Cloudflare untuk mengakses GitHub
3. Pilih repository `portfolio-daniel` (atau nama repo Anda)
4. Klik **"Begin setup"**

### 3.3 Konfigurasi Build Settings
```
Project name: daniel-sinambela-portfolio
Production branch: main
Build command: (biarkan kosong)
Build output directory: /
Root directory: (biarkan kosong)
```

**Environment variables (optional):**
Tambahkan environment variable:
- Name: `NODE_VERSION`
- Value: `18`

Klik **"Save and Deploy"**

### 3.4 Tunggu Deploy Selesai
Cloudflare akan otomatis build dan deploy website Anda. Tunggu hingga status menjadi **"Success"**.

---

## 🔗 Langkah 4: Hubungkan D1 Database ke Pages

### 4.1 Buka Settings Project
1. Klik nama project Anda di list **Workers & Pages**
2. Klik tab **"Settings"**
3. Scroll ke bawah ke bagian **"Functions"**

### 4.2 Bind D1 Database
1. Cari bagian **"D1 database bindings"**
2. Klik **"Add binding"**
3. Isi form:
   - **Variable name:** `PORTFOLIO_DB` (harus sama dengan wrangler.toml)
   - **D1 database:** Pilih `portfolio_daniel`
4. Klik **"Save"**

### 4.3 Update wrangler.toml
Update file `wrangler.toml` dengan Database ID yang Anda dapatkan tadi:

```toml
name = "daniel-sinambela-portfolio"
compatibility_date = "2026-06-20"
pages_build_output_dir = "."

[[d1_databases]]
binding = "PORTFOLIO_DB"
database_name = "portfolio_daniel"
database_id = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"  # <-- Ganti dengan ID Anda
```

Push perubahan ke GitHub:
```bash
git add wrangler.toml
git commit -m "Update D1 database ID"
git push
```

Cloudflare akan otomatis redeploy.

---

## 🔐 Langkah 5: Konfigurasi Admin Token

### 5.1 Generate Admin Token
Buat token acak yang aman. Gunakan salah satu cara ini:

**Cara 1 - Online Generator:**
- Buka https://www.uuidgenerator.net/
- Copy UUID yang dihasilkan

**Cara 2 - Command Line (PowerShell):**
```powershell
[guid]::NewGuid().ToString()
```

**Contoh token:**
```
a1b2c3d4-e5f6-7890-abcd-ef1234567890
```

### 5.2 Set Environment Variable di Cloudflare
1. Di Cloudflare Pages project, buka **Settings**
2. Scroll ke **"Environment variables"**
3. Klik **"Add variables"**
4. Pilih **Production**
5. Tambahkan:
   - **Name:** `ADMIN_TOKEN`
   - **Value:** (paste token yang Anda buat)
6. Klik **"Save"**

### 5.3 Redeploy (opsional)
Jika perubahan tidak langsung aktif:
1. Buka tab **"Deployments"**
2. Klik **"Retry deployment"** pada deployment terbaru

---

## ✅ Langkah 6: Testing

### 6.1 Test Portfolio Website
1. Buka URL Cloudflare Pages Anda (misalnya: `https://daniel-sinambela-portfolio.pages.dev`)
2. Pastikan halaman portfolio muncul dengan benar
3. Cek apakah data projects, certificates, dan technologies tampil

### 6.2 Test API Endpoint
Buka di browser atau gunakan Postman/curl:
```
https://your-project.pages.dev/api/portfolio
```

Anda harus melihat response JSON seperti ini:
```json
{
  "projects": [...],
  "certificates": [...],
  "technologies": [...]
}
```

### 6.3 Test Admin Panel
1. Buka `https://your-project.pages.dev/admin`
2. Masukkan **Admin Token** yang Anda buat tadi
3. Klik **"Login"**
4. Anda harus bisa:
   - Melihat list projects, certificates, technologies
   - Menambah data baru
   - Edit data existing
   - Delete data

---

## 🎯 Cara Menggunakan Admin Panel

### Login ke Admin
1. Buka `https://your-project.pages.dev/admin`
2. Masukkan token yang Anda set di environment variables
3. Token akan tersimpan di browser Anda

### Menambah Project Baru
1. Klik tab **"Projects"**
2. Klik tombol **"Add New Project"**
3. Isi semua field:
   - **Slug:** URL-friendly identifier (contoh: `my-new-project`)
   - **Badge:** WEB, ML/AI, DESKTOP, atau MOBILE
   - **Accent Color:** indigo, emerald, violet, rose, dll
   - **Title (ID & EN):** Judul dalam Bahasa Indonesia & Inggris
   - **Description (ID & EN):** Deskripsi project
   - **Role (ID & EN):** Peran Anda di project
   - **Features (ID & EN):** List fitur, pisahkan dengan enter
   - **Tech Stack:** Teknologi yang digunakan, pisahkan dengan enter
   - **Demo URL & GitHub URL:** (opsional)
   - **Sort Order:** Urutan tampilan (angka lebih kecil = lebih awal)
   - **Published:** Centang untuk publish
4. Klik **"Save"**

### Mengedit/Hapus Data
- Klik tombol **"Edit"** untuk mengubah data
- Klik tombol **"Delete"** untuk menghapus (dengan konfirmasi)

### Logout
- Klik tombol **"Logout"** di pojok kanan atas

---

## 🔧 Troubleshooting

### Problem: API tidak berfungsi (404 error)
**Solusi:**
1. Pastikan folder `functions/` ada di root directory
2. Pastikan D1 binding sudah dikonfigurasi dengan nama `PORTFOLIO_DB`
3. Redeploy project dari Cloudflare Dashboard

### Problem: Admin token tidak valid
**Solusi:**
1. Cek environment variable `ADMIN_TOKEN` di Cloudflare Settings
2. Pastikan tidak ada spasi di awal/akhir token
3. Clear localStorage browser (F12 > Application > Local Storage > Clear)
4. Login ulang dengan token yang benar

### Problem: Database kosong
**Solusi:**
1. Buka D1 Console di Cloudflare
2. Jalankan ulang script `d1-schema.sql`
3. Verifikasi dengan query: `SELECT COUNT(*) FROM projects;`

### Problem: Changes tidak muncul setelah edit
**Solusi:**
1. Hard refresh browser (Ctrl+F5)
2. Clear cache browser
3. Cek Network tab di DevTools untuk melihat API response

---

## 📝 Custom Domain (Opsional)

Jika Anda ingin menggunakan domain sendiri (contoh: `danielsinambela.com`):

1. Di Cloudflare Pages project, buka **"Custom domains"**
2. Klik **"Set up a custom domain"**
3. Masukkan domain Anda
4. Follow instruksi untuk update DNS records
5. Tunggu DNS propagation (5-30 menit)

---

## 🆓 Biaya dan Limit (Free Tier)

Cloudflare Pages Free Tier mencakup:
- ✅ Unlimited bandwidth
- ✅ Unlimited requests
- ✅ 500 builds per month
- ✅ D1 Database: 5GB storage, 5 million reads/day
- ✅ Custom domain (dengan SSL gratis)
- ✅ Automatic HTTPS

**Cukup untuk portfolio personal!**

---

## 📞 Support

Jika ada masalah:
1. Cek Cloudflare Dashboard > Deployments > Logs
2. Cek browser DevTools > Console untuk error
3. Baca dokumentasi: https://developers.cloudflare.com/pages/
4. Community forum: https://community.cloudflare.com/

---

## 🎉 Selesai!

Portfolio Anda sekarang sudah online dengan:
- ✅ Website portfolio yang bisa diakses publik
- ✅ Database D1 gratis dari Cloudflare
- ✅ Admin panel untuk manage konten
- ✅ API endpoint untuk data portfolio
- ✅ Automatic deployments dari GitHub

**URL Anda:** `https://daniel-sinambela-portfolio.pages.dev`

Selamat! 🚀
