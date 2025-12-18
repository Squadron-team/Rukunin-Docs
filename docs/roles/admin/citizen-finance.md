---
sidebar_position: 13
---

# Monitor Iuran

<div className="role-badge admin">
📊 Role: Admin / Bendahara RW
</div>

Fitur **Monitor Iuran Keuangan Warga** dirancang untuk memberikan transparansi penuh terhadap arus kas warga, memantau status iuran bulanan secara real-time, serta mempermudah proses pencatatan pembayaran warga.

---

## Mengakses Menu Keuangan Warga

<div className="step-container">
<div className="step-number">1</div>
<div className="step-content">
<h3>Masuk ke Menu Admin</h3>
<p>Buka dasbor admin dan pilih menu <strong>Keuangan Warga</strong>.</p>
</div>
</div>

<div className="step-container">
<div className="step-number">2</div>
<div className="step-content">
<h3>Lihat Ringkasan Keuangan</h3>
<p>Halaman utama akan menampilkan total pemasukan, pengeluaran, dan saldo akhir saat ini.</p>
</div>
</div>

---

## Ringkasan Keuangan & Iuran Bulanan

Halaman ini menyediakan gambaran cepat mengenai kondisi finansial lingkungan:

| Informasi | Deskripsi |
| --- | --- |
| **Total Pemasukan** | Akumulasi seluruh dana yang masuk (iuran, donasi, dll). |
| **Total Pengeluaran** | Akumulasi seluruh dana yang telah digunakan. |
| **Saldo Akhir** | Sisa dana yang tersedia di kas saat ini. |
| **Status Iuran** | Statistik jumlah warga yang sudah lunas dan belum lunas di bulan berjalan. |
| **Persentase Terkumpul** | Visualisasi progres penagihan iuran bulan ini dalam bentuk *progress bar*. |

---

## Riwayat Iuran Warga

Pada bagian **Daftar Iuran**, admin dapat memantau setiap transaksi per individu:

* **Filter Status**: Terdapat opsi untuk memfilter tampilan berdasarkan status (Semua, Lunas, Belum Lunas).
* **Kartu Transaksi**: Menampilkan nama warga, periode bulan iuran, nominal, dan tanggal pembayaran.
* **Label Status**:
* <span style={{color: '#28a745'}}>● Lunas</span>: Pembayaran sudah diterima dan diverifikasi.
* <span style={{color: '#ffc107'}}>● Belum Lunas</span>: Tagihan yang belum dibayarkan oleh warga.


* **Tombol Bayar Cepat**: Untuk warga yang belum lunas, tersedia tombol **+ Bayar** untuk langsung memproses pembayaran.

---

## Mencatat Pembayaran Baru

<div className="step-container">
<div className="step-number">1</div>
<div className="step-content">
<h3>Buka Form Catat Pembayaran</h3>
<p>Klik menu <strong>Catat Pembayaran</strong> pada bagian Menu Cepat.</p>
</div>
</div>

<div className="step-container">
<div className="step-number">2</div>
<div className="step-content">
<h3>Isi Data Pembayaran</h3>
<p>Lengkapi formulir dengan informasi berikut:</p>
<ul>
<li><strong>Nama Warga</strong>: Pilih atau masukkan nama warga yang membayar.</li>
<li><strong>Periode Iuran</strong>: Masukkan bulan/tahun iuran (contoh: Januari 2025).</li>
<li><strong>Nominal (Rp)</strong>: Jumlah uang yang dibayarkan.</li>
<li><strong>Tanggal Pembayaran</strong>: Pilih tanggal saat uang diterima.</li>
<li><strong>Catatan (Opsional)</strong>: Keterangan tambahan jika diperlukan.</li>
</ul>
</div>
</div>

<div className="step-container">
<div className="step-number">3</div>
<div className="step-content">
<h3>Simpan Data</h3>
<p>Klik tombol <strong>Simpan Pembayaran</strong>. Saldo dan status iuran akan otomatis diperbarui.</p>
</div>
</div>

---

## Menu Cepat (Quick Access)

Untuk mempercepat navigasi, tersedia tiga pintasan utama:

1. **Lihat Semua Iuran**: Membuka daftar lengkap riwayat pembayaran warga.
2. **Catat Pembayaran**: Membuka formulir input pembayaran manual.
3. **Cetak Laporan**: Menghasilkan dokumen laporan keuangan dalam format siap cetak.

---

## Aturan & Ketentuan

:::info Informasi

* Saldo akhir dihitung secara otomatis menggunakan rumus: Pemasukan - Pengeluaran = Saldo.
* Data pembayaran yang sudah disimpan akan masuk ke dalam Riwayat Iuran dan tidak dapat dihapus tanpa akses khusus (audit trail).
* Laporan keuangan dapat diunduh kapan saja oleh admin untuk keperluan rapat warga.
:::

---

## Manfaat Fitur Keuangan

:::tip Keunggulan

* **Akurasi Data**: Meminimalisir kesalahan pencatatan manual di buku fisik.
* **Transparansi**: Memudahkan warga mengetahui penggunaan dana mereka.
* **Efisiensi**: Mempercepat proses penagihan dengan data warga yang belum lunas secara *real-time*.
:::

---

**Butuh bantuan lebih lanjut?** Hubungi tim support: finance-support@rukunin.app

---
