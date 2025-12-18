---
sidebar_position: 12
---

# Anggaran Tahunan

<div className="role-badge admin">
  📊 Role: Admin / Bendahara RW
</div>

Fitur **Anggaran Tahunan** digunakan untuk merencanakan, mengelola, dan memantau penggunaan anggaran RW dalam satu tahun berjalan. Fitur ini membantu memastikan pengelolaan keuangan dilakukan secara terstruktur, transparan, dan terkendali.

---

## Mengakses Menu Anggaran Tahunan

<div className="step-container">
  <div className="step-number">1</div>
  <div className="step-content">
    <h3>Buka Menu Keuangan</h3>
    <p>Dari halaman <strong>Beranda</strong>, pilih tab <strong>Keuangan</strong></p>
  </div>
</div>

<div className="step-container">
  <div className="step-number">2</div>
  <div className="step-content">
    <h3>Pilih Anggaran Tahunan</h3>
    <p>Klik menu <strong>Anggaran Tahunan</strong> untuk melihat data anggaran per tahun</p>
  </div>
</div>

---

## Pemilihan Tahun Anggaran

Pada bagian atas halaman, tersedia pilihan tahun anggaran:

- **Dropdown Tahun** (contoh: 2024)
- Data anggaran akan otomatis menyesuaikan dengan tahun yang dipilih

Fitur ini memungkinkan pengguna melihat riwayat dan perencanaan anggaran antar tahun.

---

## Ringkasan Anggaran Tahunan

Kartu ringkasan menampilkan informasi utama anggaran RW:

| Informasi | Deskripsi |
|---------|-----------|
| **Total Anggaran Tahunan** | Total dana yang dialokasikan |
| **Realisasi Anggaran** | Dana yang sudah digunakan |
| **Sisa Anggaran** | Dana yang masih tersedia |
| **Persentase Penggunaan** | Visualisasi pemakaian anggaran |

Indikator warna memudahkan pemantauan kondisi anggaran.

---

## Mode Tampilan Anggaran

Pengguna dapat beralih antara dua mode tampilan:

| Mode | Keterangan |
|----|------------|
| **Kategori** | Anggaran ditampilkan per kategori |
| **Per RT** | Anggaran ditampilkan berdasarkan RT |

Mode ini memberikan fleksibilitas dalam analisis anggaran.

---

## Anggaran Berdasarkan Kategori

Setiap kartu kategori menampilkan:

- **Nama kategori** (misal: Infrastruktur, Kegiatan Sosial, Keamanan)
- **Total anggaran kategori**
- **Realisasi anggaran**
- **Sisa anggaran**
- **Persentase penggunaan**
- **Progress bar penggunaan anggaran**

---

## Menambahkan Anggaran Baru

<div className="step-container">
  <div className="step-number">1</div>
  <div className="step-content">
    <h3>Klik Tambah Anggaran</h3>
    <p>Tekan tombol <strong>+ Tambah Anggaran</strong></p>
  </div>
</div>

<div className="step-container">
  <div className="step-number">2</div>
  <div className="step-content">
    <h3>Isi Form Anggaran</h3>
    <p>Lengkapi data berikut:</p>
    <ul>
      <li>Nama kategori</li>
      <li>Jumlah anggaran</li>
      <li>Keterangan (opsional)</li>
    </ul>
  </div>
</div>

<div className="step-container">
  <div className="step-number">3</div>
  <div className="step-content">
    <h3>Simpan Anggaran</h3>
    <p>Klik <strong>Simpan</strong> untuk menambahkan anggaran baru</p>
  </div>
</div>

---

## Aturan Pengelolaan Anggaran

:::warning Perhatian
- Total anggaran kategori tidak boleh melebihi total anggaran tahunan
- Setiap transaksi yang disetujui akan otomatis mengurangi sisa anggaran
- Perubahan anggaran tercatat dalam log audit sistem
:::

---

## Pemantauan & Pembaruan Anggaran

- Nilai realisasi diperbarui otomatis setelah pengeluaran disetujui
- Sisa anggaran dihitung secara real-time
- Data terintegrasi dengan laporan keuangan RT/RW

---

## Manfaat Fitur Anggaran Tahunan

:::tip Manfaat
- Perencanaan keuangan tahunan yang lebih rapi
- Menghindari pemborosan anggaran
- Mempermudah pengawasan penggunaan dana
- Mendukung transparansi dan akuntabilitas
- Memudahkan penyusunan laporan tahunan
:::

---

## Troubleshooting

### Tidak bisa menambahkan anggaran baru
Kemungkinan:
1. Total anggaran melebihi batas tahunan
2. Data wajib belum diisi

**Solusi**: Periksa kembali total anggaran dan lengkapi form

### Nilai anggaran tidak berubah
**Solusi**:
1. Refresh halaman
2. Pastikan transaksi sudah disetujui bendahara
3. Hubungi admin sistem jika masih bermasalah

### Sisa anggaran tidak sesuai
**Solusi**: Periksa pengajuan dana yang masih menunggu persetujuan

---

**Butuh bantuan?**  
Hubungi tim support: finance-support@rukunin.app
