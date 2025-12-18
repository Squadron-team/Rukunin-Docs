---
sidebar_position: 7
---

# Manajemen Laporan Warga

<div className="role-badge ketua-rt">
  👔 Role: Ketua RT
</div>

Panduan untuk melihat dan memproses laporan warga (kerusakan, gangguan, kejadian, dll.).

## Melihat Daftar Laporan dari Warga

<div className="step-container">
  <div className="step-number">1</div>
  <div className="step-content">
    <h3>Akses Menu Layanan</h3>
    <p>Dari dashboard, pilih tab <strong>Layanan</strong>, lalu klik <strong>Laporan Warga</strong>.</p>
  </div>
</div>

<div className="step-container">
  <div className="step-number">2</div>
  <div className="step-content">
    <h3>Ringkasan & Filter</h3>
    <p>Halaman menampilkan daftar laporan dengan filter status: <strong>Baru</strong>, <strong>In Progress</strong>, <strong>Resolved</strong>, <strong>Rejected</strong>.</p>
  </div>
</div>

Daftar menampilkan setiap laporan dengan informasi singkat:

- **Judul laporan**
- **Isi singkat laporan**
- **Lokasi**
- **Nama pelapor**

Setiap card/row mempunyai aksi cepat: tambah catatan, proses, selesai, tolak.

## Menambahkan Catatan & Memproses Laporan

<div className="step-container">
  <div className="step-number">1</div>
  <div className="step-content">
    <h3>Tambah Catatan</h3>
    <p>Klik ikon <strong>+</strong> pada card laporan untuk menambahkan catatan singkat terkait penanganan.</p>
  </div>
</div>

<div className="step-container">
  <div className="step-number">2</div>
  <div className="step-content">
    <h3>Proses / Selesai / Tolak</h3>
    <p>Pada tiap card tersedia tombol: <strong>Proses</strong>, <strong>Selesai</strong>, dan <strong>Tolak</strong>.</p>
    <p>Jika memilih <strong>Selesai</strong> atau <strong>Tolak</strong>, sistem akan menampilkan modal konfirmasi sebelum mengubah status.</p>
  </div>
</div>

Perhatian: laporan dengan status <strong>Resolved</strong> atau <strong>Rejected</strong> tidak dapat diproses ulang.

## Halaman Detail Laporan

Klik laporan pada daftar untuk membuka halaman detail yang menampilkan:

- Judul lengkap
- Isi laporan lengkap
- Lokasi
- Nama pelapor & kontak (jika tersedia)
- Waktu pengajuan
- Daftar catatan penanganan

Di halaman detail juga tersedia aksi untuk menambahkan catatan, memproses, menandai selesai, atau menolak (dengan konfirmasi).

## Validasi & Aturan

:::warning Perhatian
- Hanya pengurus berwenang yang dapat memproses atau menutup laporan.
- Setelah laporan ditandai Selesai atau Ditolak, status menjadi final dan tidak dapat diubah.
:::

:::tip Best Practice
- Tambahkan catatan penanganan setiap kali memindahkan status ke In Progress untuk dokumentasi.
- Gunakan lokasi yang spesifik agar penanganan lebih cepat.
:::

## Lihat Juga

- [Kelola Pengajuan Surat Warga](./manage-pengajuan-surat)
- [Mengelola Data Warga](./manage-residents)

---
