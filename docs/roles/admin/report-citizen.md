---
sidebar_position: 10
---

# Laporan Keuangan RT/RW

<div className="role-badge admin">
  💰 Role: Admin / Ketua RW
</div>

Fitur **Laporan Keuangan RT/RW** digunakan untuk memantau, merekap, dan mengunduh laporan keuangan dari setiap RT secara transparan dan terstruktur.

---

## Akses Menu Laporan Keuangan

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
    <h3>Pilih Laporan RT/RW</h3>
    <p>Klik menu <strong>Laporan RT/RW</strong> untuk melihat ringkasan laporan keuangan</p>
  </div>
</div>

---

## Ringkasan Keuangan RW

Pada bagian atas halaman Laporan RT/RW, sistem menampilkan ringkasan keuangan:

- **Filter Periode** (contoh: Bulan Ini)
- **Filter Status** (Semua / Terverifikasi / Belum Diverifikasi)

### Kartu Ringkasan

| Kartu | Deskripsi |
|------|-----------|
| **Total Pemasukan** | Total dana masuk dari seluruh RT |
| **Total Pengeluaran** | Total dana yang telah digunakan |
| **Saldo Akhir** | Selisih pemasukan dan pengeluaran |

Ringkasan ini membantu admin memantau kondisi keuangan RW secara cepat tanpa membuka detail laporan.

---

## Daftar Laporan RT

Bagian **Laporan Tersedia** menampilkan laporan keuangan tiap RT.

Informasi yang ditampilkan:
- **Nama RT**
- **Periode laporan**
- **Total saldo RT**
- **Status verifikasi bendahara**
- **Akses ke detail laporan**

### Status Laporan

| Status | Keterangan |
|------|------------|
| **Terverifikasi** | Laporan sudah disetujui bendahara |
| **Belum Diverifikasi** | Masih menunggu persetujuan |

---

## Melihat Detail Laporan RT

<div className="step-container">
  <div className="step-number">1</div>
  <div className="step-content">
    <h3>Pilih Laporan RT</h3>
    <p>Klik salah satu laporan RT dari daftar</p>
  </div>
</div>

<div className="step-container">
  <div className="step-number">2</div>
  <div className="step-content">
    <h3>Halaman Detail Laporan</h3>
    <p>Sistem akan menampilkan detail laporan keuangan RT</p>
  </div>
</div>

---

## Informasi Detail Laporan

Pada halaman **Detail Laporan**, ditampilkan:

### Informasi Umum
- **Nama RT**
- **Periode laporan**
- **Status verifikasi bendahara**

### Ringkasan Keuangan RT
- **Total Pemasukan**
- **Total Pengeluaran**
- **Saldo Akhir**

Nilai ditampilkan dengan warna:
- 🟢 Hijau → Pemasukan
- 🔴 Merah → Pengeluaran
- 🟠 Oranye → Saldo akhir

---

## Rincian Transaksi

Bagian **Rincian Transaksi** menampilkan semua aktivitas keuangan RT:

- **Iuran Warga** (pemasukan)
- **Biaya Operasional** (pengeluaran)
- **Tanggal transaksi**
- **Nominal transaksi**

Setiap transaksi diberi ikon:
- ⬇️ Pemasukan
- ⬆️ Pengeluaran

---

## Unduh Laporan PDF

<div className="step-container">
  <div className="step-number">1</div>
  <div className="step-content">
    <h3>Klik Unduh PDF</h3>
    <p>Tekan tombol <strong>Unduh PDF</strong> di bagian bawah halaman</p>
  </div>
</div>

<div className="step-container">
  <div className="step-number">2</div>
  <div className="step-content">
    <h3>File Laporan</h3>
    <p>Sistem akan menghasilkan file PDF laporan keuangan RT yang siap dicetak</p>
  </div>
</div>

---

## Export Rekap Laporan RW

Pada halaman Laporan RT/RW, tersedia tombol **Export** untuk:
- Mengunduh rekap laporan seluruh RT
- Digunakan untuk arsip RW atau pelaporan ke pihak kelurahan

---

## Manfaat Fitur Laporan Keuangan

:::tip Manfaat
- Transparansi keuangan RT/RW
- Memudahkan pengawasan bendahara
- Mengurangi kesalahan pencatatan manual
- Mendukung audit dan pelaporan resmi
:::

---

## Troubleshooting

### Data laporan tidak muncul
Kemungkinan:
1. Belum ada laporan dari RT
2. Filter periode tidak sesuai

**Solusi**: Ubah filter periode atau status

### Status belum terverifikasi
**Solusi**: Pastikan bendahara RT sudah menyetujui laporan

### Gagal unduh PDF
**Solusi**:
1. Cek koneksi internet
2. Coba refresh halaman
3. Hubungi admin sistem

---

**Butuh bantuan?**  
Hubungi tim support: keuangan-support@rukunin.app
