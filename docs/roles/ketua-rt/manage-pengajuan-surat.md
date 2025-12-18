---
sidebar_position: 6
---

# Kelola Pengajuan Surat Warga

<div className="role-badge ketua-rt">
  👔 Role: Ketua RT
</div>

Panduan pengelolaan pengajuan surat dari warga: Domisili, Tidak Mampu, Usaha, Koreksi, Keluarga, dan Lainnya.

## Melihat Daftar Pengajuan Surat

<div className="step-container">
  <div className="step-number">1</div>
  <div className="step-content">
    <h3>Akses Menu Layanan</h3>
    <p>Dari dashboard, pilih tab <strong>Layanan</strong>, lalu klik <strong>Pengajuan Surat</strong>.</p>
  </div>
</div>

<div className="step-container">
  <div className="step-number">2</div>
  <div className="step-content">
    <h3>Ringkasan & Kategori</h3>
    <p>Halaman menampilkan kartu kategori dengan jumlah pengajuan dan panel <strong>Pengajuan Terbaru</strong> (4 entri terakhir).</p>
    <ul>
      <li>Kategori: <strong>Domisili</strong>, <strong>Tidak Mampu</strong>, <strong>Usaha</strong>, <strong>Koreksi</strong>, <strong>Keluarga</strong>, <strong>Lainnya</strong></li>
      <li>Pengajuan Terbaru: kategori, nama pengirim, waktu, status singkat</li>
    </ul>
  </div>
</div>

## Melihat Daftar per Kategori

<div className="step-container">
  <div className="step-number">1</div>
  <div className="step-content">
    <h3>Daftar Kategori</h3>
    <p>Klik kategori untuk melihat daftar pengajuan pada kategori tersebut.</p>
    <p>Fitur: filter status (<strong>Menunggu</strong>/<strong>Diterima</strong>/<strong>Ditolak</strong>)</p>
  </div>
</div>

Daftar menampilkan setiap pengajuan dengan kolom: **Kategori Surat**, **Nama Pengirim**, **Waktu Pengajuan**, **Status**.

Klik sebuah entri untuk membuka halaman detail pengajuan.

## Detail Pengajuan

<div className="step-container">
  <div className="step-number">1</div>
  <div className="step-content">
    <h3>Informasi Lengkap</h3>
    <p>Halaman detail menampilkan:</p>
    <ul>
      <li>Jenis surat (mis. Surat Keterangan Domisili)</li>
      <li>Nama pemohon</li>
      <li>Tujuan</li>
      <li>Tanggal dikirim</li>
      <li>Lampiran pemohon (lihat/download)</li>
      <li>Riwayat status (opsional)</li>
    </ul>
  </div>
</div>

<div className="step-container">
  <div className="step-number">2</div>
  <div className="step-content">
    <h3>Memproses Pengajuan</h3>
    <p>Jika status = <strong>Menunggu</strong>, tersedia aksi:</p>
    <ul>
      <li><strong>Setuju</strong> — isi catatan opsional & lampiran (opsional), lalu konfirmasi di modal.</li>
      <li><strong>Tolak</strong> — isi catatan penolakan (opsional) & lampiran, lalu konfirmasi di modal.</li>
    </ul>
    <p>Setelah diproses (Diterima/Ditolak) status final dan tidak dapat diubah lagi.</p>
  </div>
</div>

## Alur Proses Singkat

<div className="step-container">
  <div className="step-number">1</div>
  <div className="step-content">
    <h3>Pilih Aksi</h3>
    <p>Pada halaman detail, klik <strong>Setuju</strong> atau <strong>Tolak</strong> (hanya saat Menunggu).</p>
  </div>
</div>

<div className="step-container">
  <div className="step-number">2</div>
  <div className="step-content">
    <h3>Isi Catatan / Lampiran</h3>
    <p>Tambahkan catatan penjelasan atau upload lampiran jika diperlukan (opsional).</p>
  </div>
</div>

<div className="step-container">
  <div className="step-number">3</div>
  <div className="step-content">
    <h3>Konfirmasi</h3>
    <p>Tinjau modal konfirmasi. Setelah konfirmasi, status diperbarui dan proses selesai.</p>
  </div>
</div>

## Catatan & Validasi

:::warning Perhatian
- Hanya pengurus berwenang yang dapat memproses (Setuju/Tolak) pengajuan.
- Pengajuan yang sudah diproses tidak dapat diproses ulang.
:::

:::tip Best Practice
- Sertakan catatan penolakan yang jelas agar pemohon memahami alasan.
- Simpan lampiran hasil keputusan untuk arsip.
:::

## Lihat Juga

- [Mengelola Data Warga](./manage-residents)
- [Manajemen Pengajuan Surat](./manage-pengajuan-surat)

---