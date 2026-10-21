# 🚀 Devan Regiana - Engineering Portfolio

> **Production-Grade Portfolio** untuk Full-Stack Software Engineer & DevOps / Site Reliability Engineer (SRE).  
> Dibangun dengan arsitektur modern berkecepatan tinggi, minim JavaScript (*zero-bundle overhead*), ramah SEO, dan siap skala produksi.

[![Astro](https://img.shields.io/badge/Astro-5.x-BC52EE?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare_Pages-Deployment-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://pages.cloudflare.com)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg?style=for-the-badge)](https://opensource.org/licenses/ISC)

---

## 📌 Daftar Isi
1. [Tentang Website Ini](#-tentang-website-ini)
2. [Fitur-Fitur Utama](#-fitur-fitur-utama)
3. [Tech Stack & Penjelasannya](#-tech-stack--penjelasannya)
4. [Struktur Folder](#-struktur-folder)
5. [Prasyarat Sistem](#-prasyarat-sistem)
6. [Cara Instalasi & Menjalankan Proyek](#-cara-instalasi--menjalankan-proyek)
7. [Pengaturan Environment Variable (.env)](#-pengaturan-environment-variable-env)
8. [Deployment Otomatis (CI/CD)](#-deployment-otomatis-cicd)
9. [Kontak & Informasi Pengembang](#-kontak--informasi-pengembang)

---

## 📖 Tentang Website Ini

Website ini adalah **portofolio profesional milik Devan Regiana**, seorang *Full-Stack Software Engineer* dan *DevOps / SRE Architect*. 

Berbeda dengan portofolio web biasa yang hanya menampilkan daftar screenshot, website ini dirancang layaknya sistem level produksi (*production-grade*):
- Menampilkan **studi kasus mendalam** (*case studies*) tentang arsitektur sistem, skalabilitas, dan optimasi performa.
- Memberikan bukti nyata penerapan standar industri seperti *Linux server hardening*, *decoupled socket bridges*, *zero-downtime deployment*, dan *microservices*.
- Dirancang dengan kecepatan akses maksimal menggunakan teknik **Static Site Generation (SSG)** sehingga halaman terbuka instan tanpa jeda loading yang berat.

---

## ✨ Fitur-Fitur Utama

- ⚡ **Super Cepat & Ringan (Zero-JS by Default)**: Halaman dirender menjadi HTML murni saat proses *build*, sehingga browser tidak perlu memproses script JavaScript yang berat.
- 🍱 **Bento Grid Case Studies**: Tampilan portofolio modern bergaya *Bento Box* dengan filter kategori interaktif (*All*, *Full-Stack*, *DevOps/SRE*, *Hybrid*).
- 🔍 **Interactive Architecture Modal**: Setiap proyek dilengkapi pop-up modal detail yang menampilkan diagram arsitektur, tantangan teknis, metrik dampak nyata, dan tautan repositori GitHub.
- 🖥️ **Live Simulated Terminal**: Simulasi *pipeline deployment* di bagian Hero yang memperlihatkan alur kerja pengujian otomatis, *linting*, dan *healthcheck*.
- 🌐 **Dukungan Multi-Bahasa (i18n)**: Pengunjung dapat berganti bahasa secara instan antara **Bahasa Indonesia** dan **English** hanya dengan satu klik tanpa reload halaman.
- 🌓 **Dark & Light Mode**: Tema gelap/terang otomatis menyesuaikan preferensi sistem operasi pengguna, dilengkapi skrip *anti-flicker* (anti-FOUC) dan penyimpanan pilihan ke *Local Storage*.
- 📩 **Formulir Kontak Siap Pakai**: Terhubung langsung ke layanan *Web3Forms* sehingga pesan dari recruiter atau klien langsung masuk ke email pengembang tanpa perlu server backend khusus.
- 📋 **One-Click Copy Email**: Tombol praktis untuk menyalin alamat email langsung ke *clipboard* pengguna.
- 🎯 **SEO & OpenGraph Lengkap**: Dilengkapi metadata lengkap, Twitter Card, OpenGraph image, dan Schema.org (JSON-LD) agar mudah diindeks oleh mesin pencari seperti Google.

---

## 🛠️ Tech Stack & Penjelasannya

Berikut adalah daftar teknologi yang digunakan dalam pembuatan proyek ini beserta alasan pemilihannya dengan penjelasan yang mudah dipahami:

| Kategori | Teknologi | Peran & Alasan Penggunaan |
| :--- | :--- | :--- |
| **Framework Web** | **Astro 5** (`astro: ^5.18.2`) | Framework modern untuk membuat website berbasis konten dengan arsitektur *"Islands Architecture"*. Astro merender halaman menjadi file HTML statis saat di-build, sehingga website sangat cepat dan hemat kuota pengunjung. |
| **Styling & CSS** | **Tailwind CSS v3** (`tailwindcss: ^3.4.17`) | Framework CSS utility-first yang mempermudah pembuatan desain kustom modern, responsif untuk semua ukuran layar (HP, tablet, laptop), serta memiliki dukungan *Dark Mode* bawaan yang rapi. |
| **Integrasi Styling** | **@astrojs/tailwind** (`^6.0.2`) | Plugin resmi dari tim Astro untuk mengintegrasikan Tailwind CSS secara otomatis tanpa konfigurasi yang rumit. |
| **Ikon UI** | **Lucide Astro** (`^0.556.0`) | Koleksi ikon SVG modern yang sangat bersih, konsisten, dan ringan karena hanya ikon yang dipakai saja yang disertakan ke dalam kode akhir (*tree-shaking*). |
| **Manajemen Konten** | **Astro Content Collections** | Fitur bawaan Astro untuk mengelola file studi kasus (format Markdown `.md`). Memiliki validasi skema tipe data ketat menggunakan **Zod** untuk mencegah kesalahan penulisan data proyek. |
| **Formulir Kontak** | **Web3Forms API** | Layanan formulir *serverless*. Memungkinkan formulir kontak mengirimkan email langsung ke inbox pemilik tanpa perlu membuat server backend atau database tambahan. |
| **Tipografi** | **Google Fonts (Inter & JetBrains Mono)** | Kombinasi font *Inter* (untuk tampilan tulisan antarmuka yang bersih dan mudah dibaca) serta *JetBrains Mono* (untuk teks bertema kode, terminal, dan data teknis). |
| **Hosting & CDN** | **Cloudflare Pages** | Layanan hosting global di jaringan *Edge Cloudflare* yang super cepat, aman dari serangan DDoS, dan memiliki uptime sangat tinggi. |
| **Deployment CLI** | **Wrangler** (`wrangler.json`) | Alat baris perintah (*CLI*) resmi dari Cloudflare untuk mengelola konfigurasi dan penerbitan berkas statis (`dist/`). |
| **Otomatisasi CI/CD** | **GitHub Actions** (`.github/workflows/deploy.yml`) | Sistem otomatisasi yang bertugas melakukan instalasi, pengetesan, kompilasi (*build*), dan pengunggahan website ke Cloudflare Pages secara otomatis setiap kali ada pembaruan kode di branch `main`. |

---

## 📁 Struktur Folder

Berikut adalah gambaran susunan file dan folder penting di dalam proyek ini:

```text
devr-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml            # Konfigurasi otomatisasi CI/CD ke Cloudflare Pages
├── public/                       # Berkas publik statis (favicon, resume.pdf, robots.txt)
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/               # Komponen-komponen antarmuka (UI)
│   │   ├── Contact.astro         # Bagian kontak & formulir kirim pesan
│   │   ├── Hero.astro            # Bagian utama atas (headline, CTA, simulasi terminal)
│   │   ├── ProductionStandards.astro # Bagian standar prinsip engineering
│   │   ├── ProjectCard.astro     # Kartu Bento dan modal detail proyek
│   │   └── SkillsMatrix.astro    # Tabel matriks keahlian teknis
│   ├── content/
│   │   └── projects/             # Berkas Markdown (.md) untuk setiap studi kasus proyek
│   │       ├── realtime-orderbook-platform.md
│   │       ├── enterprise-socket-bridge.md
│   │       ├── fintech-ekyc-verification-pipeline.md
│   │       ├── hardened-linux-reverse-proxy.md
│   │       └── centralized-observability-mesh.md
│   ├── content.config.ts         # Definisi skema data (Zod) untuk koleksi proyek
│   ├── i18n/
│   │   └── translations.ts       # Kamus terjemahan bilingual (Indonesia & Inggris)
│   ├── layouts/
│   │   └── Layout.astro          # Layout utama (HTML shell, Navbar, Footer, Dark Mode, SEO)
│   ├── pages/
│   │   └── index.astro           # Halaman utama (Home page)
│   └── styles/
│       └── global.css            # Pengaturan CSS global & animasi
├── .env                          # Pengaturan variabel lingkungan (kunci API)
├── astro.config.mjs              # Berkas konfigurasi utama Astro
├── package.json                  # Informasi paket, versi dependensi, dan script perintah
├── tailwind.config.mjs           # Berkas konfigurasi tema, warna, dan font Tailwind
├── tsconfig.json                 # Konfigurasi TypeScript
└── wrangler.json                 # Konfigurasi penerbitan Cloudflare Pages
```

---

## 💻 Prasyarat Sistem

Sebelum menjalankan proyek ini di komputer lokal, pastikan Anda telah menginstal:

1. **Node.js**: Versi `20.x` atau lebih baru (Disarankan versi LTS).  
   *Cek versi Node.js dengan perintah:*
   ```bash
   node -v
   ```
2. **Package Manager**: `npm` (bawaan dari instalasi Node.js), atau opsi lain seperti `pnpm` / `yarn`.
3. **Git**: Untuk mendownload atau mengelola repositori kode.

---

## 🚀 Cara Instalasi & Menjalankan Proyek

Ikuti langkah-langkah mudah berikut untuk menjalankan proyek di komputer Anda:

### 1. Clone Repositori
Buka terminal dan unduh kode sumber proyek:
```bash
git clone https://github.com/devanscreate/devr-portfolio.git
cd devr-portfolio
```

### 2. Pasang Semua Dependensi
Jalankan perintah berikut untuk mengunduh semua library yang diperlukan:
```bash
npm install
```

### 3. Siapkan File Konfigurasi Lingkungan (`.env`)
Salin atau buat file `.env` di folder utama proyek (lihat detail pada bagian selanjutnya):
```env
PUBLIC_WEB3FORMS_ACCESS_KEY="masukkan_access_key_web3forms_anda"
```

### 4. Jalankan Server Pengembangan (Development Mode)
Jalankan perintah berikut untuk memulai server lokal:
```bash
npm run dev
```
Setelah perintah dijalankan, buka browser Anda dan akses alamat:
```
http://localhost:4321
```
> 💡 *Fitur Hot-Reload aktif otomatis. Setiap perubahan pada file kode akan langsung terlihat di browser tanpa perlu me-refresh manual.*

### 5. Membuat Versi Produksi (Build)
Untuk menguji proses kompilasi sebelum di-deploy ke server:
```bash
npm run build
```
Hasil file statis yang siap di-deploy akan dibuat di folder `dist/`.

### 6. Menjalankan Preview Hasil Build
Untuk melihat hasil build produksi di server lokal:
```bash
npm run preview
```

---

## 🔑 Pengaturan Environment Variable (.env)

Proyek ini menggunakan variabel lingkungan untuk mengamankan integrasi dengan layanan eksternal.

Buat file bernama `.env` di direktori *root* (sejajar dengan `package.json`), lalu isi dengan konfigurasi berikut:

```env
# Kunci Akses Web3Forms untuk menerima pesan dari formulir kontak
PUBLIC_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key_here
```

### Cara Mendapatkan Kunci Web3Forms (Gratis):
1. Kunjungi situs resmi [https://web3forms.com](https://web3forms.com).
2. Masukkan alamat email tujuan tempat Anda ingin menerima pesan kontak.
3. Kunci akses (*Access Key*) akan langsung dikirimkan ke email Anda.
4. Salin kunci tersebut dan tempelkan pada nilai `PUBLIC_WEB3FORMS_ACCESS_KEY` di dalam file `.env`.

> ⚠️ **Catatan Penting**: Di Astro, variabel lingkungan yang diawali dengan kata `PUBLIC_` dapat dibaca oleh kode di sisi browser (klien).

---

## 🌐 Deployment Otomatis (CI/CD)

Proyek ini telah dikonfigurasi untuk ter-deploy secara otomatis ke **Cloudflare Pages** melalui **GitHub Actions**.

### Alur Kerja Deployment:
1. Setiap kali Anda melakukan `git push` ke branch `main`, GitHub Actions akan otomatis memicu workflow di `.github/workflows/deploy.yml`.
2. Server GitHub Actions akan:
   - Menyiapkan runtime Node.js v20.
   - Menginstal dependensi melalui `npm ci`.
   - Mengompilasi kode menjadi berkas statis dengan `npm run build`.
   - Mengunggah folder `dist/` ke Cloudflare Pages secara aman.
3. Website akan langsung aktif dalam hitungan detik di URL domain Cloudflare Anda.

### Rahasia GitHub (GitHub Repository Secrets) yang Dibutuhkan:
Jika Anda ingin menduplikasi deployment ini ke akun Cloudflare pribadi, tambahkan secrets berikut di menu **Settings > Secrets and variables > Actions** di repositori GitHub Anda:
- `CLOUDFLARE_API_TOKEN`: Token API Cloudflare dengan izin akses Cloudflare Pages.
- `CLOUDFLARE_ACCOUNT_ID`: ID Akun Cloudflare Anda.

---

## 👨‍💻 Kontak & Informasi Pengembang

- **Nama**: Devan Regiana
- **Peran**: Full-Stack Software Engineer & DevOps / SRE Architect
- **Lokasi**: Indonesia (Jakarta / Bandung / Remote)
- **GitHub**: [@devanscreate](https://github.com/devanscreate)
- **Email**: [dvnregiana007@gmail.com](mailto:dvnregiana007@gmail.com)

---

## 📄 Lisensi

Proyek ini dilisensikan di bawah lisensi [ISC License](file:///d:/1.%20WEB/devr-portfolio/package.json). Anda bebas menggunakan, memodifikasi, dan mengembangkan kode ini untuk keperluan portofolio pribadi maupun pembelajaran.
