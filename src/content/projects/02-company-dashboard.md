---
title: "Business Operations & Analytics Dashboard"
subtitle: "Dashboard Manajemen Operasional & Laporan Keuangan"
category: "Sistem Manajemen Perusahaan"
role: "Full-Stack"
description: "Pusat kendali operasional internal perusahaan dalam satu layar. Memantau keluar-masuk stok barang di gudang, grafik performa penjualan harian tim sales, dan ekspor laporan keuangan otomatis."
impact: "Menghemat 15+ jam kerja manual staf setiap minggu dan mencegah selisih stok barang"
stack: ["React", "FastAPI", "PostgreSQL", "Charts.js", "Docker"]
github: "https://github.com/devanscreate/business-operations-dashboard"
demo: "https://devr-portfolio.pages.dev/#projects"
featured: true
span: normal
order: 2
images:
  - url: "/images/projects/project-2-1.jpg"
    title: "1. Ringkasan Eksekutif & Grafik Penjualan"
    caption: "Dashboard analitik modern dengan visualisasi tren pendapatan, target penjualan, dan metrik retensi."
  - url: "/images/projects/project-2-2.jpg"
    title: "2. Manajemen Inventaris & Logistik Gudang"
    caption: "Tabel stok real-time dengan status indikator ketersediaan barang dan peringatan stok menipis."
  - url: "/images/projects/project-2-3.jpg"
    title: "3. Laporan Laba Rugi & Rekap Finansial"
    caption: "Laporan keuangan komprehensif yang dapat diekspor ke PDF dan Excel hanya dalam satu klik."
---

### Ringkasan Untuk Klien & Bisnis
Sistem dashboard ini menggantikan pencatatan manual di buku atau spreadsheet yang rentan salah hitung. Pimpinan dan tim kerja bisa melihat kondisi kesehatan bisnis secara real-time dari mana saja.

### Keuntungan Nyata untuk Pemilik Usaha:
- **Laporan Otomatis**: Tidak perlu menunggu rekap staf berhari-hari; grafik pendapatan dan biaya langsung tersaji rapi dan bisa di-download ke PDF/Excel dengan sekali klik.
- **Pencegahan Selisih Stok**: Notifikasi otomatis saat stok barang di gudang menipis, meminimalkan potensi keterlambatan kirim ke konsumen.
- **Hak Akses Aman**: Manajer, kasir, dan akuntan memiliki batasan menu yang sesuai dengan tugasnya masing-masing.

### Spesifikasi Teknis (Under The Hood):
- **Frontend**: React SPA dengan komponen tabel interaktif dan grafik data Chart.js berkecepatan 60 FPS.
- **Backend**: Python FastAPI dengan asynchronous worker untuk pemrosesan query kalkulasi analitik besar.
- **Database**: PostgreSQL dengan relational modeling yang terisolasi dan backup otomatis berkala.
