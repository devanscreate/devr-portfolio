# 🚀 Devan Regiana - Engineering Portfolio

> **Production-Grade Portfolio** untuk Full-Stack Software Engineer & DevOps / Site Reliability Engineer (SRE).  
> Dibangun dengan arsitektur modern berkecepatan tinggi, minim JavaScript (_zero-bundle overhead_), ramah SEO, dan siap skala produksi.

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

Website ini adalah **portofolio profesional milik Devan Regiana**, seorang _Full-Stack Software Engineer_ dan _DevOps / SRE Architect_.

Berbeda dengan portofolio web biasa yang hanya menampilkan daftar screenshot, website ini dirancang layaknya sistem level produksi (_production-grade_):

- Menampilkan **studi kasus mendalam** (_case studies_) tentang arsitektur sistem, skalabilitas, dan optimasi performa.
- Memberikan bukti nyata penerapan standar industri seperti _Linux server hardening_, _decoupled socket bridges_, _zero-downtime deployment_, dan _microservices_.
- Dirancang dengan kecepatan akses maksimal menggunakan teknik **Static Site Generation (SSG)** sehingga halaman terbuka instan tanpa jeda loading yang berat.

---

## ✨ Fitur-Fitur Utama

- ⚡ **Super Cepat & Ringan (Zero-JS by Default)**: Halaman dirender menjadi HTML murni saat proses _build_, sehingga browser tidak perlu memproses script JavaScript yang berat.
- 🍱 **Bento Grid Case Studies**: Tampilan portofolio modern bergaya _Bento Box_ dengan filter kategori interaktif (_All_, _Full-Stack_, _DevOps/SRE_, _Hybrid_).
- 🔍 **Interactive Architecture Modal**: Setiap proyek dilengkapi pop-up modal detail yang menampilkan diagram arsitektur, tantangan teknis, metrik dampak nyata, dan tautan repositori GitHub.
- 🖥️ **Live Simulated Terminal**: Simulasi _pipeline deployment_ di bagian Hero yang memperlihatkan alur kerja pengujian otomatis, _linting_, dan _healthcheck_.
- 🌐 **Dukungan Multi-Bahasa (i18n)**: Pengunjung dapat berganti bahasa secara instan antara **Bahasa Indonesia** dan **English** hanya dengan satu klik tanpa reload halaman.
- 🌓 **Dark & Light Mode**: Tema gelap/terang otomatis menyesuaikan preferensi sistem operasi pengguna, dilengkapi skrip _anti-flicker_ (anti-FOUC) dan penyimpanan pilihan ke _Local Storage_.
- 📩 **Formulir Kontak Siap Pakai**: Terhubung langsung ke layanan _Web3Forms_ sehingga pesan dari recruiter atau klien langsung masuk ke email pengembang tanpa perlu server backend khusus.
- 📋 **One-Click Copy Email**: Tombol praktis untuk menyalin alamat email langsung ke _clipboard_ pengguna.
- 🎯 **SEO & OpenGraph Lengkap**: Dilengkapi metadata lengkap, Twitter Card, OpenGraph image, dan Schema.org (JSON-LD) agar mudah diindeks oleh mesin pencari seperti Google.

---

## 🛠️ Tech Stack & Penjelasannya

Berikut adalah daftar teknologi yang digunakan dalam pembuatan proyek ini beserta alasan pemilihannya dengan penjelasan yang mudah dipahami:

| Kategori              | Teknologi                                           | Peran & Alasan Penggunaan                                                                                                                                                                                                   |
| :-------------------- | :-------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Framework Web**     | **Astro 5** (`astro: ^5.18.2`)                      | Framework modern untuk membuat website berbasis konten dengan arsitektur _"Islands Architecture"_. Astro merender halaman menjadi file HTML statis saat di-build, sehingga website sangat cepat dan hemat kuota pengunjung. |
| **Styling & CSS**     | **Tailwind CSS v3** (`tailwindcss: ^3.4.17`)        | Framework CSS utility-first yang mempermudah pembuatan desain kustom modern, responsif untuk semua ukuran layar (HP, tablet, laptop), serta memiliki dukungan _Dark Mode_ bawaan yang rapi.                                 |
| **Integrasi Styling** | **@astrojs/tailwind** (`^6.0.2`)                    | Plugin resmi dari tim Astro untuk mengintegrasikan Tailwind CSS secara otomatis tanpa konfigurasi yang rumit.                                                                                                               |
| **Ikon UI**           | **Lucide Astro** (`^0.556.0`)                       | Koleksi ikon SVG modern yang sangat bersih, konsisten, dan ringan karena hanya ikon yang dipakai saja yang disertakan ke dalam kode akhir (_tree-shaking_).                                                                 |
| **Manajemen Konten**  | **Astro Content Collections**                       | Fitur bawaan Astro untuk mengelola file studi kasus (format Markdown `.md`). Memiliki validasi skema tipe data ketat menggunakan **Zod** untuk mencegah kesalahan penulisan data proyek.                                    |
| **Formulir Kontak**   | **Web3Forms API**                                   | Layanan formulir _serverless_. Memungkinkan formulir kontak mengirimkan email langsung ke inbox pemilik tanpa perlu membuat server backend atau database tambahan.                                                          |
| **Tipografi**         | **Google Fonts (Inter & JetBrains Mono)**           | Kombinasi font _Inter_ (untuk tampilan tulisan antarmuka yang bersih dan mudah dibaca) serta _JetBrains Mono_ (untuk teks bertema kode, terminal, dan data teknis).                                                         |
| **Hosting & CDN**     | **Cloudflare Pages**                                | Layanan hosting global di jaringan _Edge Cloudflare_ yang super cepat, aman dari serangan DDoS, dan memiliki uptime sangat tinggi.                                                                                          |
| **Deployment CLI**    | **Wrangler** (`wrangler.json`)                      | Alat baris perintah (_CLI_) resmi dari Cloudflare untuk mengelola konfigurasi dan penerbitan berkas statis (`dist/`).                                                                                                       |
| **Otomatisasi CI/CD** | **GitHub Actions** (`.github/workflows/deploy.yml`) | Sistem otomatisasi yang bertugas melakukan instalasi, pengetesan, kompilasi (_build_), dan pengunggahan website ke Cloudflare Pages secara otomatis setiap kali ada pembaruan kode di branch `main`.                        |

---

## 📁 Struktur Folder

Berikut adalah gambaran susunan file dan folder penting di dalam proyek ini:

```text
devr-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml            # Konfigurasi otomatisasi CI/CD ke Cloudflare Pages
├── public/                       # Berkas publik statis
│   ├── images/
│   │   ├── dev_portrait.jpg      # Foto portrait hero
│   │   └── projects/             # Screenshot UI 6 Proyek (3 gambar per proyek)
│   │       ├── project-1-1.jpg s/d project-1-3.jpg (E-Commerce)
│   │       ├── project-2-1.jpg s/d project-2-3.jpg (Dashboard)
│   │       ├── project-3-1.jpg s/d project-3-3.jpg (Booking)
│   │       ├── project-4-1.jpg s/d project-4-3.jpg (Fintech)
│   │       ├── project-5-1.jpg s/d project-5-3.jpg (API Gateway)
│   │       └── project-6-1.jpg s/d project-6-3.jpg (Cloud Server)
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── assets/                   # Aset gambar yang dioptimasi otomatis oleh Astro
│   ├── components/               # Komponen-komponen antarmuka (UI)
│   │   ├── Contact.astro         # Bagian kontak & formulir kirim pesan
│   │   ├── Hero.astro            # Bagian editorial hero, arch grid, & stiker warna-warni
│   │   ├── ProductionStandards.astro # Bagian jaminan kualitas ("Mengapa Memilih Saya")
│   │   ├── ProjectCard.astro     # Kartu 6 space proyek + galeri 3 screenshot interaktif
│   │   └── SkillsMatrix.astro    # 4 kartu solusi bisnis (Frontend, Backend, Cloud, Data)
│   ├── content/
│   │   └── projects/             # 6 File Markdown (.md) untuk masing-masing proyek
│   │       ├── 01-ecommerce-platform.md
│   │       ├── 02-company-dashboard.md
│   │       ├── 03-realtime-booking.md
│   │       ├── 04-fintech-verification.md
│   │       ├── 05-api-integration.md
│   │       └── 06-cloud-infrastructure.md
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
   _Cek versi Node.js dengan perintah:_
   ```bash
   node -v
   ```
2. **Package Manager**: `pnpm` (disarankan untuk kecepatan maksimal) atau `npm`.
   _Instal pnpm jika belum ada:_
   ```bash
   npm install -g pnpm
   ```
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
pnpm install
```

### 3. Siapkan File Konfigurasi Lingkungan (`.env`)

Salin atau buat file `.env` di folder utama proyek (lihat detail pada bagian selanjutnya):

```env
PUBLIC_WEB3FORMS_ACCESS_KEY="masukkan_access_key_web3forms_anda"
```

### 4. Jalankan Server Pengembangan (Development Mode)

Jalankan perintah berikut untuk memulai server lokal:

```bash
pnpm dev
```

Setelah perintah dijalankan, buka browser Anda dan akses alamat:

```
http://localhost:4321
```

> 💡 _Fitur Hot-Reload aktif otomatis. Setiap perubahan pada file kode akan langsung terlihat di browser tanpa perlu me-refresh manual._

### 5. Membuat Versi Produksi (Build)

Untuk menguji proses kompilasi sebelum di-deploy ke server:

```bash
pnpm build
```

Hasil file statis yang siap di-deploy akan dibuat di folder `dist/`.

### 6. Menjalankan Preview Hasil Build

Untuk melihat hasil build produksi di server lokal:

```bash
pnpm preview
```

---

## 🔑 Pengaturan Environment Variable (.env)

Proyek ini menggunakan variabel lingkungan untuk mengamankan integrasi dengan layanan eksternal.

Buat file bernama `.env` di direktori _root_ (sejajar dengan `package.json`), lalu isi dengan konfigurasi berikut:

```env
# Kunci Akses Web3Forms untuk menerima pesan dari formulir kontak
PUBLIC_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key_here
```

### Cara Mendapatkan Kunci Web3Forms (Gratis):

1. Kunjungi situs resmi [https://web3forms.com](https://web3forms.com).
2. Masukkan alamat email tujuan tempat Anda ingin menerima pesan kontak.
3. Kunci akses (_Access Key_) akan langsung dikirimkan ke email Anda.
4. Salin kunci tersebut dan tempelkan pada nilai `PUBLIC_WEB3FORMS_ACCESS_KEY` di dalam file `.env`.

> ⚠️ **Catatan Penting**: Di Astro, variabel lingkungan yang diawali dengan kata `PUBLIC_` dapat dibaca oleh kode di sisi browser (klien).

---

## 🌐 Deployment Otomatis (CI/CD)

Proyek ini telah dikonfigurasi untuk ter-deploy secara otomatis ke **Cloudflare Pages** melalui **GitHub Actions**.

### Alur Kerja Deployment:

1. Setiap kali Anda melakukan `git push` ke branch `main`, GitHub Actions akan otomatis memicu workflow di `.github/workflows/deploy.yml`.
2. Server GitHub Actions akan:
   - Menyiapkan runtime Node.js v20 dan pnpm.
   - Menginstal dependensi melalui `pnpm install --frozen-lockfile`.
   - Mengompilasi kode menjadi berkas statis dengan `pnpm run build`.
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
