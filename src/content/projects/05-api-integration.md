---
title: "Omnichannel API Gateway & Sync Service"
subtitle: "Pusat Integrasi Data & Penghubung Sistem Otomatis"
category: "Integrasi Sistem & API"
role: "Full-Stack"
description: "Pusat jembatan data yang menghubungkan sistem kasir fisik (POS), gudang logistik, dan toko online secara real-time. Ketika barang terjual di kasir, stok di marketplace online langsung berkurang detik itu juga."
impact: "Menghubungkan 5+ cabang usaha dengan sinkronisasi 10.000+ data barang tanpa selisih transaksi"
stack: ["FastAPI", "RESTful API", "Redis Caching", "PostgreSQL", "Nginx"]
github: "https://github.com/devanscreate/omnichannel-api-gateway"
demo: "https://devr-portfolio.pages.dev/#projects"
featured: false
span: normal
order: 5
images:
  - url: "/images/projects/project-5-1.jpg"
    title: "1. Throughput API & Status Endpoint Aktif"
    caption: "Grafik lalu lintas panggilan data real-time dengan indikator titik koneksi kasir dan toko online."
  - url: "/images/projects/project-5-2.jpg"
    title: "2. Log Sinkronisasi Data & Payload Inspector"
    caption: "Pemeriksaan struktur data JSON transaksi otomatis untuk memastikan tidak ada barang yang selisih."
  - url: "/images/projects/project-5-3.jpg"
    title: "3. Matriks Latensi Respon & Kecepatan Cabang"
    caption: "Tabel responsivitas server dengan kecepatan respon rata-rata di bawah 10 milidetik."
---

### Ringkasan Untuk Klien & Bisnis
Menghubungkan cabang fisik dan online shop agar tidak terjadi 'overselling' (barang sudah habis di toko tapi masih terbeli oleh pembeli online). Semua data berpusat dan saling menyapa otomatis.

### Keuntungan Nyata untuk Pemilik Usaha:
- **Stok Selalu Akurat**: Mengeliminasi komplain pembeli akibat pembatalan pesanan karena barang fisik ternyata sudah laku di toko offline.
- **Efisiensi Waktu**: Karyawan gudang tidak perlu lagi menghabiskan waktu malam hari untuk menyamakan catatan stok antar cabang.
- **Ekspansi Mudah**: Jika bisnis membuka cabang baru atau toko baru di marketplace, sistem dapat dihubungkan dalam sekejap tanpa merombak sistem lama.

### Spesifikasi Teknis (Under The Hood):
- **High-Throughput Gateway**: FastAPI dengan Redis in-memory cache untuk merespons query pencarian data dalam < 10 milidetik.
- **Rate-Limiting & Fault-Tolerance**: Mencegah server overload dengan sistem antrean teratur saat terjadi lonjakan panggilan API secara mendadak.
