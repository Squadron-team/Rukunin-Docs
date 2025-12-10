---
sidebar_position: 3
---
# Manajemen Role & Hak Akses

<div className="role-badge admin">
  👤 Role: Admin
</div>

Panduan ini menjelaskan fitur manajemen role dalam sistem Rukunin, yang memungkinkan admin mengelola peran dan hak akses pengguna secara terstruktur.

## Statistik Role

Halaman utama menampilkan statistik ringkas:

- **6 Total Role** – Jumlah jenis role yang tersedia dalam sistem
- **13 Total Admin** – Jumlah pengguna yang memiliki role admin

## Navigasi Utama

Terdapat dua tombol aksi utama:

- **Kelola Akun** – Menu untuk melihat dan mengelola semua akun pengguna
- **Tambah Role** – Menu untuk membuat role baru dengan hak akses khusus

## Daftar Role Sistem

Setiap role memiliki deskripsi, jumlah pengguna, dan daftar izin akses. Contoh:

### Admin Sistem

- **Deskripsi**: Akses penuh ke seluruh sistem
- **Pengguna**: 2 pengguna
- **Izin Akses**:
  - Kelola Pengguna
  - Kelola Role
  - Kelola Data
  - Kelola Keuangan
  - Kelola Laporan

### Ketua RT

- **Deskripsi**: Mengelola data RT
- **Pengguna**: 5 pengguna

## Menambah Role Baru

<div className="step-container">
  <div className="step-number">1</div>
  <div className="step-content">
    <h3>Klik Tambah Role</h3>
    <p>Gunakan tombol <strong>Tambah Role</strong> untuk membuat role baru</p>
  </div>
</div>

<div className="step-container">
  <div className="step-number">2</div>
  <div className="step-content">
    <h3>Isi Detail Role</h3>
    <p>Masukkan nama role dan deskripsi singkat</p>
  </div>
</div>

<div className="step-container">
  <div className="step-number">3</div>
  <div className="step-content">
    <h3>Tentukan Hak Akses</h3>
    <p>Pilih izin akses yang relevan untuk role tersebut:</p>
    <ul>
      <li>Kelola Pengguna</li>
      <li>Kelola Role</li>
      <li>Kelola Data</li>
      <li>Kelola Keuangan</li>
      <li>Kelola Laporan</li>
    </ul>
  </div>
</div>

<div className="step-container">
  <div className="step-number">4</div>
  <div className="step-content">
    <h3>Simpan Role</h3>
    <p>Klik <strong>Simpan</strong> untuk menyimpan role baru ke sistem</p>
  </div>
</div>

## Menghapus Role

:::danger Peringatan
Role yang sudah digunakan oleh pengguna tidak bisa dihapus langsung. Pastikan tidak ada pengguna aktif dengan role tersebut.
:::

Langkah-langkah:

1. Buka daftar role
2. Pilih role yang ingin dihapus
3. Pastikan jumlah pengguna = 0
4. Klik <strong>Hapus Role</strong>
5. Konfirmasi penghapusan

## Tips Manajemen Role

:::tip Best Practice

- Gunakan nama role yang jelas dan deskriptif
- Batasi hak akses sesuai kebutuhan
- Review role secara berkala
- Hindari duplikasi role dengan izin yang sama
- Dokumentasikan perubahan role untuk audit

:::

---

**Butuh bantuan?** Hubungi tim support: admin-support@rukunin.app