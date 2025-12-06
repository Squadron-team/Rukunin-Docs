---
sidebar_position: 2
---

# Mengelola Akun Pengguna

<div className="role-badge admin">
  👤 Role: Admin
</div>

Panduan lengkap untuk mengelola akun pengguna dalam sistem Rukunin.

## Mengakses Menu Kelola Akun

<div className="step-container">
  <div className="step-number">1</div>
  <div className="step-content">
    <h3>Buka Tab Administrasi</h3>
    <p>Dari dashboard, pilih tab <strong>Administrasi</strong></p>
  </div>
</div>

<div className="step-container">
  <div className="step-number">2</div>
  <div className="step-content">
    <h3>Pilih Kelola Akun</h3>
    <p>Klik menu <strong>Kelola Akun</strong> untuk melihat daftar semua pengguna</p>
  </div>
</div>

## Melihat Daftar Akun

Halaman Kelola Akun menampilkan:

- **Daftar semua pengguna** dengan informasi dasar
- **Filter berdasarkan role** (Admin, Ketua RW, Ketua RT, dst)
- **Status akun** (Aktif, Nonaktif, Pending)
- **Pencarian** berdasarkan nama atau NIK
- **Statistik** jumlah pengguna per role

### Filter & Pencarian

| Filter | Deskripsi |
|--------|-----------|
| **Semua** | Tampilkan semua pengguna |
| **Admin** | Hanya admin |
| **Pengurus** | Ketua RW, Ketua RT, Sekretaris, Bendahara |
| **Warga** | Akun warga biasa |
| **Aktif** | Akun yang sudah diverifikasi |
| **Pending** | Menunggu verifikasi |
| **Nonaktif** | Akun yang dinonaktifkan |

## Menambah Akun Baru

<div className="step-container">
  <div className="step-number">1</div>
  <div className="step-content">
    <h3>Klik Tombol Tambah</h3>
    <p>Klik tombol <strong>+ Tambah Akun</strong> di pojok kanan atas</p>
  </div>
</div>

<div className="step-container">
  <div className="step-number">2</div>
  <div className="step-content">
    <h3>Isi Formulir</h3>
    <p>Lengkapi data yang diperlukan:</p>
    <ul>
      <li>Nama lengkap</li>
      <li>NIK</li>
      <li>Email</li>
      <li>Nomor telepon</li>
      <li>Alamat lengkap</li>
      <li>RT/RW</li>
      <li>Role (Admin/Ketua RW/Ketua RT/Sekretaris/Bendahara/Warga)</li>
    </ul>
  </div>
</div>

<div className="step-container">
  <div className="step-number">3</div>
  <div className="step-content">
    <h3>Set Password Awal</h3>
    <p>Tentukan password sementara yang harus diganti pengguna saat login pertama</p>
  </div>
</div>

<div className="step-container">
  <div className="step-number">4</div>
  <div className="step-content">
    <h3>Simpan & Kirim Notifikasi</h3>
    <p>Setelah disimpan, sistem akan mengirim email/SMS berisi kredensial login</p>
  </div>
</div>

## Mengedit Akun

<div className="step-container">
  <div className="step-number">1</div>
  <div className="step-content">
    <h3>Pilih Akun</h3>
    <p>Cari dan klik akun yang ingin diedit dari daftar</p>
  </div>
</div>

<div className="step-container">
  <div className="step-number">2</div>
  <div className="step-content">
    <h3>Edit Informasi</h3>
    <p>Ubah data yang diperlukan:</p>
    <ul>
      <li>Data pribadi</li>
      <li>Alamat</li>
      <li>Kontak</li>
      <li>Role dan permissions</li>
    </ul>
  </div>
</div>

<div className="step-container">
  <div className="step-number">3</div>
  <div className="step-content">
    <h3>Simpan Perubahan</h3>
    <p>Klik <strong>Simpan</strong> untuk menyimpan perubahan</p>
  </div>
</div>

## Mengubah Role Pengguna

:::warning Perhatian
Mengubah role pengguna akan mengubah hak akses mereka dalam sistem. Pastikan Anda memberikan role yang sesuai.
:::

<div className="step-container">
  <div className="step-number">1</div>
  <div className="step-content">
    <h3>Buka Detail Akun</h3>
    <p>Klik akun yang ingin diubah role-nya</p>
  </div>
</div>

<div className="step-container">
  <div className="step-number">2</div>
  <div className="step-content">
    <h3>Edit Role</h3>
    <p>Pada bagian <strong>Role & Permissions</strong>, pilih role baru:</p>
    <ul>
      <li><strong>Admin</strong> - Akses penuh ke semua fitur</li>
      <li><strong>Ketua RW</strong> - Mengelola data tingkat RW</li>
      <li><strong>Ketua RT</strong> - Mengelola data tingkat RT</li>
      <li><strong>Sekretaris</strong> - Mengelola surat dan dokumen</li>
      <li><strong>Bendahara</strong> - Mengelola keuangan</li>
      <li><strong>Warga</strong> - Akses layanan dasar</li>
    </ul>
  </div>
</div>

<div className="step-container">
  <div className="step-number">3</div>
  <div className="step-content">
    <h3>Konfirmasi Perubahan</h3>
    <p>Sistem akan meminta konfirmasi. Klik <strong>Ya, Ubah Role</strong></p>
  </div>
</div>

<div className="step-container">
  <div className="step-number">4</div>
  <div className="step-content">
    <h3>Notifikasi</h3>
    <p>Pengguna akan menerima notifikasi tentang perubahan role mereka</p>
  </div>
</div>

## Reset Password

<div className="step-container">
  <div className="step-number">1</div>
  <div className="step-content">
    <h3>Akses Menu Reset</h3>
    <p>Buka detail akun, klik tombol <strong>Reset Password</strong></p>
  </div>
</div>

<div className="step-container">
  <div className="step-number">2</div>
  <div className="step-content">
    <h3>Generate Password Baru</h3>
    <p>Sistem akan generate password sementara secara otomatis</p>
  </div>
</div>

<div className="step-container">
  <div className="step-number">3</div>
  <div className="step-content">
    <h3>Kirim ke Pengguna</h3>
    <p>Password baru akan dikirim via email/SMS ke pengguna</p>
  </div>
</div>

## Menonaktifkan Akun

:::danger Penting
Menonaktifkan akun akan membuat pengguna tidak bisa login. Gunakan fitur ini dengan hati-hati.
:::

<div className="step-container">
  <div className="step-number">1</div>
  <div className="step-content">
    <h3>Pilih Akun</h3>
    <p>Buka detail akun yang akan dinonaktifkan</p>
  </div>
</div>

<div className="step-container">
  <div className="step-number">2</div>
  <div className="step-content">
    <h3>Nonaktifkan</h3>
    <p>Klik tombol <strong>Nonaktifkan Akun</strong></p>
  </div>
</div>

<div className="step-container">
  <div className="step-number">3</div>
  <div className="step-content">
    <h3>Berikan Alasan</h3>
    <p>Masukkan alasan penonaktifan untuk keperluan audit</p>
  </div>
</div>

<div className="step-container">
  <div className="step-number">4</div>
  <div className="step-content">
    <h3>Konfirmasi</h3>
    <p>Klik <strong>Ya, Nonaktifkan</strong> untuk konfirmasi</p>
  </div>
</div>

### Mengaktifkan Kembali

Untuk mengaktifkan akun yang dinonaktifkan:

1. Cari akun dengan filter **Nonaktif**
2. Buka detail akun
3. Klik **Aktifkan Kembali**
4. Pengguna akan menerima notifikasi

## Menghapus Akun

:::danger Peringatan
Penghapusan akun bersifat permanen dan tidak dapat dibatalkan. Data pengguna akan dihapus dari sistem.
:::

Prosedur penghapusan akun:

<div className="step-container">
  <div className="step-number">1</div>
  <div className="step-content">
    <h3>Backup Data</h3>
    <p>Pastikan data sudah di-backup terlebih dahulu</p>
  </div>
</div>

<div className="step-container">
  <div className="step-number">2</div>
  <div className="step-content">
    <h3>Verifikasi</h3>
    <p>Pastikan penghapusan ini memang diperlukan dan sudah mendapat persetujuan</p>
  </div>
</div>

<div className="step-container">
  <div className="step-number">3</div>
  <div className="step-content">
    <h3>Hapus Akun</h3>
    <p>Buka detail akun, scroll ke bawah, klik <strong>Hapus Akun</strong></p>
  </div>
</div>

<div className="step-container">
  <div className="step-number">4</div>
  <div className="step-content">
    <h3>Konfirmasi Ganda</h3>
    <p>Ketik <code>HAPUS</code> untuk konfirmasi penghapusan</p>
  </div>
</div>

## Tips Pengelolaan Akun

:::tip Best Practice
- **Verifikasi identitas** - Selalu verifikasi NIK dan dokumen pendukung
- **Role yang tepat** - Berikan role sesuai tanggung jawab
- **Update berkala** - Minta pengguna update data mereka secara berkala
- **Monitor aktivitas** - Pantau akun yang tidak aktif dalam waktu lama
- **Keamanan** - Nonaktifkan akun yang mencurigakan
:::

## Troubleshooting

### Akun tidak bisa login setelah dibuat

Kemungkinan penyebab:
1. Email/SMS kredensial belum diterima
2. Password salah
3. Akun belum diaktifkan

**Solusi**: Reset password dan kirim ulang kredensial

### Role tidak berubah setelah di-update

**Solusi**: 
1. Minta pengguna logout dan login kembali
2. Clear cache aplikasi
3. Jika masih bermasalah, hubungi support teknis

### Tidak bisa menghapus akun

Akun tidak bisa dihapus jika:
- Masih memiliki transaksi aktif
- Sedang menjabat sebagai pengurus
- Terkait dengan data penting lainnya

**Solusi**: Nonaktifkan akun daripada menghapus

---

**Butuh bantuan?** Hubungi tim support: admin-support@rukunin.app
