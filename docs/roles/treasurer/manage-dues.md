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
    <p>Dari dashboard, pilih tab <strong>Iuran</strong>, lalu klik <strong>Data Iuran</strong>. Halaman ini adalah daftar pembayaran yang dikirim oleh warga dan difokuskan untuk proses verifikasi oleh Bendahara.</p>
  </div>
</div>

<div className="step-container">
  <div className="step-number">2</div>
  <div className="step-content">
    <h3>Daftar Verifikasi</h3>
    <p>Di halaman verifikasi Anda akan melihat daftar entri iuran yang menunggu pemeriksaan. Setiap baris menampilkan:</p>
    <ul>
      <li>Nama warga</li>
      <li>RT</li>
      <li>Jumlah yang dilaporkan</li>
      <li>Tombol <strong>Verifikasi</strong> (tap untuk membuka halaman detail)</li>
    </ul>
    <p>Terdapat filter untuk memilih RT sehingga Anda dapat memfokuskan verifikasi ke RT tertentu.</p>
  </div>
</div>

## Verifikasi Pembayaran

<div className="step-container">
  <div className="step-number">1</div>
  <div className="step-content">
    <h3>Buka Halaman Detail</h3>
    <p>
      Ketika Anda tap <strong>Verifikasi</strong> pada baris, dibuka halaman detail yang menampilkan:
    </p>
    <ul>
      <li>Nama warga</li>
      <li>Asal RT</li>
      <li>Jenis iuran</li>
      <li>Jumlah</li>
      <li>Tanggal transfer</li>
      <li>Metode pembayaran</li>
      <li>Lampiran bukti pembayaran (gambar yang dapat di-zoom)</li>
    </ul>
  </div>
</div>

<div className="step-container">
  <div className="step-number">2</div>
  <div className="step-content">
    <h3>Hasil Deteksi AI</h3>
    <p>Halaman juga menampilkan hasil deteksi otomatis oleh sistem (AI) terkait kemungkinan manipulasi pada bukti. Hasil dapat berupa label seperti <strong>Perlu Pemeriksaan</strong> atau <strong>Terverifikasi Asli</strong>. Namun:</p>
    <p>AI hanya membantu mendeteksi anomali,  Bendahara wajib melakukan verifikasi manual untuk memastikan kebenaran transaksi.</p>
  </div>
</div>

:::warning Perhatian
Hasil deteksi AI bersifat rekomendasi. Selalu lakukan pemeriksaan manual pada bukti pembayaran sebelum mengonfirmasi.
:::

<div className="step-container">
  <div className="step-number">3</div>
  <div className="step-content">
    <h3>Cek Ulang</h3>
    <p>Jika perlu, gunakan tombol <strong>Cek Ulang</strong> untuk menjalankan deteksi AI ulang terhadap lampiran. Ini berguna jika gambar telah diperbaiki atau diunggah ulang.</p>
  </div>
</div>

<div className="step-container">
  <div className="step-number">4</div>
  <div class="step-content">
    <h3>Tolak atau Konfirmasi</h3>
    <p>Setelah pemeriksaan manual selesai, pilih:</p>
    <ul>
      <li>
        <strong>Konfirmasi</strong> menandakan pembayaran valid; sistem akan generate kwitansi dan mengubah status menjadi Lunas.
      </li>
      <li>
        <strong>Tolak</strong> jika bukti tidak valid; saat menolak, tampilkan form (opsional) untuk memasukkan alasan penolakan yang akan dikirim ke warga.
      </li>
    </ul>
    <p>Setelah Anda memilih Tolak atau Konfirmasi, entri tersebut akan dihapus dari daftar verifikasi (tidak lagi muncul pada filter Menunggu Verifikasi).</p>
  </div>
</div>

:::tip Praktik Baik
- Periksa nominal dan rekening tujuan.
- Zoom lampiran bukti untuk melihat watermark atau tanda manipulasi.
- Catat alasan penolakan bila menolak untuk mempermudah tindak lanjut.
:::

> Halaman ini hanya membahas proses verifikasi pembayaran. Untuk pembuatan kwitansi dan fitur transaksi lainnya, lihat halaman terkait:

- [Membuat Kwitansi](/docs/roles/treasurer/create-receipt)

---

**Butuh bantuan?** Hubungi: treasurer-support@rukunin.app
