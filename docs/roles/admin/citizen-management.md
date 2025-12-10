---
sidebar_position: 5
---
# Mengelola Data Warga

<div className="role-badge admin">
  👤 Role: Admin
</div>

Panduan lengkap untuk mengelola data warga dalam sistem Rukunin.

## Mengakses Menu Data Warga

<div className="step-container">
  <div className="step-number">1</div>
  <div className="step-content">
    <h3>Pilih Data Warga</h3>
    <p>Klik menu <strong>Data Warga</strong> untuk melihat daftar semua warga</p>
  </div>
</div>

## Melihat Daftar Warga

Halaman ini menampilkan:

- **Nama lengkap warga**
- **NIK (Nomor Induk Kependudukan)**
- **Alamat tempat tinggal**
- **Nomor telepon**
- **Status warga** (Aktif / Nonaktif)

### Contoh Tampilan

| Nama           | NIK               | Alamat             | Telepon       | Status     |
|----------------|-------------------|---------------------|---------------|------------|
| Budi Santoso   | 3201012345678901  | Jl. Melati No. 12   | 081234567890  | Aktif      |
| Siti Aminah    | 3201012345678902  | Gang Mawar No. 5    | 081234567891  | Aktif      |
| Rangga Saputra | 3201012345678903  | RT 02 / RW 01       | 081234567892  | Nonaktif   |

## Menambah Warga Baru

<div className="step-container">
  <div className="step-number">1</div>
  <div className="step-content">
    <h3>Klik Tombol Tambah</h3>
    <p>Gunakan tombol <strong>+ Tambah Warga</strong> di pojok kanan bawah</p>
  </div>
</div>

<div className="step-container">
  <div className="step-number">2</div>
  <div className="step-content">
    <h3>Isi Formulir</h3>
    <p>Lengkapi data berikut:</p>
    <ul>
      <li>Nama Lengkap</li>
      <li>NIK</li>
      <li>Alamat</li>
      <li>No. Telepon</li>
      <li>Status Warga (Aktif / Nonaktif)</li>
    </ul>
  </div>
</div>

<div className="step-container">
  <div className="step-number">3</div>
  <div className="step-content">
    <h3>Simpan Data</h3>
    <p>Klik <strong>Simpan Data</strong> untuk menyimpan informasi warga baru</p>
  </div>
</div>

## Mengedit Data Warga

<div className="step-container">
  <div className="step-number">1</div>
  <div className="step-content">
    <h3>Pilih Warga</h3>
    <p>Klik nama warga yang ingin diedit dari daftar</p>
  </div>
</div>

<div className="step-container">
  <div className="step-number">2</div>
  <div className="step-content">
    <h3>Edit Informasi</h3>
    <p>Ubah data yang diperlukan seperti alamat, telepon, atau status</p>
  </div>
</div>

<div className="step-container">
  <div className="step-number">3</div>
  <div className="step-content">
    <h3>Simpan Perubahan</h3>
    <p>Klik <strong>Simpan</strong> untuk menyimpan perubahan</p>
  </div>
</div>

## Menonaktifkan Warga

:::danger Penting
Status Nonaktif menandakan warga tidak aktif dalam sistem. Gunakan fitur ini untuk warga pindah atau tidak terdata.
:::

Langkah-langkah:

1. Buka detail warga
2. Ubah status menjadi **Nonaktif**
3. Simpan perubahan

## Filter & Pencarian

Gunakan fitur pencarian dan filter untuk memudahkan pengelolaan:

| Filter | Deskripsi |
|--------|-----------|
| **Semua** | Tampilkan semua warga |
| **Aktif** | Warga yang masih aktif |
| **Nonaktif** | Warga yang sudah dinonaktifkan |
| **Nama/NIK** | Cari berdasarkan nama atau NIK |

## Tips Pengelolaan Warga

:::tip Best Practice

- **Validasi NIK** sebelum menyimpan data
- **Update berkala** untuk alamat dan kontak
- **Gunakan status Nonaktif** untuk warga yang sudah pindah
- **Pantau duplikasi data** dengan pencarian NIK

:::

---

**Butuh bantuan?** Hubungi tim support: admin-support@rukunin.app