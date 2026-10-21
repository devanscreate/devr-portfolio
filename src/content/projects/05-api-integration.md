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
