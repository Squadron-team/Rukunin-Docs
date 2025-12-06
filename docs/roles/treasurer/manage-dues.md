---
sidebar_position: 2
---

# Mengelola Data Iuran

<div className="role-badge treasurer">
  💰 Role: Bendahara
</div>

Panduan lengkap untuk mengelola data iuran warga menggunakan aplikasi Rukunin.

## Melihat Data Iuran

<div className="step-container">
  <div className="step-number">1</div>
  <div className="step-content">
    <h3>Akses Menu Iuran</h3>
    <p>Dari dashboard, pilih tab <strong>Iuran</strong>, lalu klik <strong>Data Iuran</strong></p>
  </div>
</div>

<div className="step-container">
  <div className="step-number">2</div>
  <div className="step-content">
    <h3>Lihat Ringkasan</h3>
    <p>Anda akan melihat ringkasan iuran bulan ini:</p>
    <ul>
      <li>Total warga wajib iuran</li>
      <li>Jumlah yang sudah bayar</li>
      <li>Jumlah yang belum bayar</li>
      <li>Total terkumpul</li>
      <li>Persentase pembayaran</li>
    </ul>
  </div>
</div>

### Filter & Tampilan

Gunakan filter untuk mempermudah monitoring:

| Filter | Deskripsi |
|--------|-----------|
| **Bulan** | Pilih bulan yang ingin dilihat |
| **Status** | Lunas, Belum Bayar, Terlambat |
| **RT** | Filter berdasarkan RT tertentu (khusus RW) |
| **Jumlah** | Berdasarkan nominal iuran |

## Verifikasi Pembayaran

<div className="step-container">
  <div className="step-number">1</div>
  <div className="step-content">
    <h3>Lihat Pembayaran Pending</h3>
    <p>Filter status <strong>Menunggu Verifikasi</strong> untuk melihat pembayaran yang perlu diverifikasi</p>
  </div>
</div>

<div className="step-container">
  <div className="step-number">2</div>
  <div className="step-content">
    <h3>Cek Detail Pembayaran</h3>
    <p>Klik pembayaran untuk melihat detail:</p>
    <ul>
      <li>Nama warga</li>
      <li>Jumlah yang dibayar</li>
      <li>Tanggal transfer</li>
      <li>Metode pembayaran</li>
      <li>Bukti transfer (foto)</li>
    </ul>
  </div>
</div>

<div className="step-container">
  <div className="step-number">3</div>
  <div className="step-content">
    <h3>Verifikasi Bukti</h3>
    <p>Periksa bukti transfer:</p>
    <ul>
      <li>Cek nominal sesuai</li>
      <li>Cek rekening tujuan benar</li>
      <li>Cek tanggal transfer</li>
      <li>Cek nama pengirim</li>
    </ul>
  </div>
</div>

<div className="step-container">
  <div className="step-number">4</div>
  <div className="step-content">
    <h3>Approve atau Tolak</h3>
    <p>Pilih salah satu:</p>
    <ul>
      <li><strong>Verifikasi</strong> - Jika bukti valid, sistem otomatis generate kwitansi</li>
      <li><strong>Tolak</strong> - Jika ada masalah, berikan alasan penolakan</li>
    </ul>
  </div>
</div>

:::tip Verifikasi Cepat
Jika bukti transfer sudah jelas dan benar, Anda bisa verifikasi langsung dari notifikasi tanpa perlu buka detail.
:::

## Mencatat Pembayaran Manual

Untuk pembayaran tunai atau langsung:

<div className="step-container">
  <div className="step-number">1</div>
  <div className="step-content">
    <h3>Pilih Warga</h3>
    <p>Dari daftar iuran, klik warga yang ingin dicatat pembayarannya</p>
  </div>
</div>

<div className="step-container">
  <div className="step-number">2</div>
  <div className="step-content">
    <h3>Klik Catat Pembayaran</h3>
    <p>Klik tombol <strong>Catat Pembayaran Manual</strong></p>
  </div>
</div>

<div className="step-container">
  <div className="step-number">3</div>
  <div className="step-content">
    <h3>Isi Detail</h3>
    <p>Lengkapi informasi:</p>
    <ul>
      <li>Jumlah yang dibayar</li>
      <li>Tanggal pembayaran</li>
      <li>Metode: Tunai/Transfer</li>
      <li>Keterangan (opsional)</li>
    </ul>
  </div>
</div>

<div className="step-container">
  <div className="step-number">4</div>
  <div className="step-content">
    <h3>Simpan & Generate Kwitansi</h3>
    <p>Klik <strong>Simpan</strong>, sistem akan:</p>
    <ul>
      <li>Mencatat pembayaran</li>
      <li>Generate kwitansi otomatis</li>
      <li>Update status menjadi "Lunas"</li>
      <li>Kirim notifikasi ke warga</li>
    </ul>
  </div>
</div>

## Membuat Kwitansi

Kwitansi dibuat otomatis setelah verifikasi, namun Anda bisa cetak ulang:

<div className="step-container">
  <div className="step-number">1</div>
  <div className="step-content">
    <h3>Akses Riwayat Iuran</h3>
    <p>Tab <strong>Iuran → Riwayat Iuran</strong></p>
  </div>
</div>

<div className="step-container">
  <div className="step-number">2</div>
  <div className="step-content">
    <h3>Cari Pembayaran</h3>
    <p>Cari pembayaran warga yang kwitansinya akan dicetak</p>
  </div>
</div>

<div className="step-container">
  <div className="step-number">3</div>
  <div className="step-content">
    <h3>Cetak Kwitansi</h3>
    <p>Klik <strong>Cetak Kwitansi</strong>, pilih format:</p>
    <ul>
      <li><strong>PDF</strong> - Untuk dikirim digital</li>
      <li><strong>Print</strong> - Untuk cetak fisik</li>
      <li><strong>Share</strong> - Kirim via WhatsApp/Email</li>
    </ul>
  </div>
</div>

### Format Kwitansi

Kwitansi mencakup informasi:
- Nomor kwitansi (auto-generated)
- Tanggal pembayaran
- Nama warga dan alamat
- Periode iuran (bulan/tahun)
- Jumlah yang dibayar
- Terbilang
- Tanda tangan Bendahara (digital)
- QR Code untuk verifikasi

## Mengirim Reminder Iuran

<div className="step-container">
  <div className="step-number">1</div>
  <div className="step-content">
    <h3>Filter Belum Bayar</h3>
    <p>Filter status <strong>Belum Bayar</strong></p>
  </div>
</div>

<div className="step-container">
  <div className="step-number">2</div>
  <div className="step-content">
    <h3>Pilih Warga</h3>
    <p>Centang warga yang akan dikirimi reminder (bisa multiple)</p>
  </div>
</div>

<div className="step-container">
  <div className="step-number">3</div>
  <div className="step-content">
    <h3>Kirim Reminder</h3>
    <p>Klik <strong>Kirim Reminder</strong>, pilih metode:</p>
    <ul>
      <li><strong>Notifikasi App</strong> - Via aplikasi</li>
      <li><strong>WhatsApp</strong> - Via WA broadcast</li>
      <li><strong>SMS</strong> - Via SMS</li>
    </ul>
  </div>
</div>

:::tip Auto-Reminder
Anda bisa set auto-reminder H-3, H-1, dan H+2 setelah jatuh tempo di menu Pengaturan.
:::

## Mengelola Tunggakan

<div className="step-container">
  <div className="step-number">1</div>
  <div className="step-content">
    <h3>Lihat Tunggakan</h3>
    <p>Filter status <strong>Terlambat</strong> atau <strong>Menunggak</strong></p>
  </div>
</div>

<div className="step-container">
  <div className="step-number">2</div>
  <div className="step-content">
    <h3>Cek Histori</h3>
    <p>Klik warga untuk melihat:</p>
    <ul>
      <li>Bulan-bulan yang menunggak</li>
      <li>Total tunggakan</li>
      <li>Denda (jika ada)</li>
      <li>Histori pembayaran sebelumnya</li>
    </ul>
  </div>
</div>

<div className="step-container">
  <div className="step-number">3</div>
  <div className="step-content">
    <h3>Koordinasi</h3>
    <p>Untuk tunggakan > 3 bulan:</p>
    <ul>
      <li>Hubungi warga via telpon/WA</li>
      <li>Tanyakan kendala pembayaran</li>
      <li>Tawarkan solusi (cicilan, keringanan, dll)</li>
      <li>Laporkan ke Ketua RT/RW jika perlu</li>
    </ul>
  </div>
</div>

## Laporan Iuran Bulanan

<div className="step-container">
  <div className="step-number">1</div>
  <div className="step-content">
    <h3>Generate Laporan</h3>
    <p>Tab <strong>Iuran → Riwayat Iuran</strong>, klik <strong>Laporan Bulanan</strong></p>
  </div>
</div>

<div className="step-container">
  <div className="step-number">2</div>
  <div className="step-content">
    <h3>Pilih Periode</h3>
    <p>Pilih bulan dan tahun yang akan dilaporkan</p>
  </div>
</div>

<div className="step-container">
  <div className="step-number">3</div>
  <div className="step-content">
    <h3>Download</h3>
    <p>Laporan mencakup:</p>
    <ul>
      <li>Ringkasan pembayaran</li>
      <li>Daftar warga lunas</li>
      <li>Daftar warga belum bayar</li>
      <li>Total pemasukan iuran</li>
      <li>Grafik persentase pembayaran</li>
    </ul>
  </div>
</div>

## Tips Pengelolaan Iuran

:::tip Best Practice
- **Verifikasi cepat** - Proses pembayaran maksimal 1x24 jam
- **Update status** - Selalu update status pembayaran real-time
- **Reminder rutin** - Kirim reminder H-3 sebelum jatuh tempo
- **Follow up tunggakan** - Hubungi warga yang menunggak > 2 bulan
- **Laporan bulanan** - Buat laporan setiap akhir bulan
- **Transparansi** - Share laporan ke grup warga
:::

## Troubleshooting

### Pembayaran tidak masuk

**Solusi**:
1. Cek apakah warga upload bukti transfer
2. Pastikan nominal dan rekening benar
3. Tanya tanggal dan jam transfer
4. Cek mutasi rekening RT/RW
5. Jika sudah masuk rekening tapi belum tercatat, input manual

### Kwitansi hilang

**Solusi**:
Cetak ulang dari **Riwayat Iuran** dengan nomor kwitansi yang sama.

### Data pembayaran salah

**Solusi**:
1. Jika belum diverifikasi: Edit data lalu verifikasi
2. Jika sudah diverifikasi: Tidak bisa edit, buat catatan koreksi
3. Hubungi admin untuk adjust data jika perlu

---

**Butuh bantuan?** Hubungi: treasurer-support@rukunin.app
