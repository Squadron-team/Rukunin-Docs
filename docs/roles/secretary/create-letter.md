---
sidebar_position: 2
---

# Membuat Surat

<div className="role-badge secretary">
  📝 Role: Sekretaris
</div>

Panduan lengkap untuk membuat surat menggunakan aplikasi Rukunin.

## Jenis Surat yang Bisa Dibuat

Aplikasi Rukunin mendukung pembuatan berbagai jenis surat:

| Jenis Surat | Deskripsi | Template |
|-------------|-----------|----------|
| **Surat Keterangan Domisili** | Surat keterangan tempat tinggal | ✅ |
| **Surat Keterangan Tidak Mampu (SKTM)** | Untuk keperluan bantuan | ✅ |
| **Surat Pengantar KTP/KK** | Pengantar pembuatan dokumen | ✅ |
| **Surat Keterangan Usaha** | Untuk keperluan usaha | ✅ |
| **Surat Keterangan Kelahiran** | Pengantar akte kelahiran | ✅ |
| **Surat Keterangan Kematian** | Pengantar akte kematian | ✅ |
| **Surat Pengantar Nikah** | Untuk keperluan pernikahan | ✅ |
| **Surat Keterangan Pindah** | Untuk mutasi penduduk | ✅ |
| **Surat Kuasa** | Pemberian kuasa | ✅ |
| **Surat Undangan** | Undangan kegiatan/rapat | ✅ |

## Cara Membuat Surat

<div className="step-container">
  <div className="step-number">1</div>
  <div className="step-content">
    <h3>Akses Menu Buat Surat</h3>
    <p>Dari dashboard, pilih tab <strong>Surat</strong>, lalu klik <strong>Buat Surat</strong></p>
  </div>
</div>

<div className="step-container">
  <div className="step-number">2</div>
  <div className="step-content">
    <h3>Pilih Template Surat</h3>
    <p>Pilih jenis surat yang ingin dibuat dari daftar template yang tersedia</p>
  </div>
</div>

<div className="step-container">
  <div className="step-number">3</div>
  <div className="step-content">
    <h3>Isi Data Pemohon</h3>
    <p>Isi informasi pemohon:</p>
    <ul>
      <li>Pilih warga dari database (autocomplete)</li>
      <li>Data akan otomatis terisi (NIK, alamat, dll)</li>
      <li>Verifikasi data yang muncul</li>
    </ul>
  </div>
</div>

<div className="step-container">
  <div className="step-number">4</div>
  <div className="step-content">
    <h3>Lengkapi Detail Surat</h3>
    <p>Isi informasi tambahan sesuai jenis surat:</p>
    <ul>
      <li>Keperluan surat</li>
      <li>Tanggal berlaku</li>
      <li>Keterangan tambahan</li>
      <li>Data pendukung lainnya</li>
    </ul>
  </div>
</div>

<div className="step-container">
  <div className="step-number">5</div>
  <div className="step-content">
    <h3>Preview Surat</h3>
    <p>Klik <strong>Preview</strong> untuk melihat hasil surat sebelum disimpan</p>
  </div>
</div>

<div className="step-container">
  <div className="step-number">6</div>
  <div className="step-content">
    <h3>Generate & Simpan</h3>
    <p>Jika sudah sesuai:</p>
    <ul>
      <li>Klik <strong>Generate Surat</strong></li>
      <li>Sistem akan membuat nomor surat otomatis</li>
      <li>Surat tersimpan dalam format PDF</li>
    </ul>
  </div>
</div>

<div className="step-container">
  <div className="step-number">7</div>
  <div className="step-content">
    <h3>Tanda Tangan Digital (Opsional)</h3>
    <p>Untuk surat yang tidak perlu tanda tangan basah:</p>
    <ul>
      <li>Upload tanda tangan Ketua RT/RW</li>
      <li>Tambahkan stempel digital</li>
      <li>Surat siap dicetak atau dikirim digital</li>
    </ul>
  </div>
</div>

## Contoh: Membuat Surat Keterangan Domisili

### Langkah Detail

1. **Pilih Template** "Surat Keterangan Domisili"
2. **Data Pemohon**:
   - Ketik nama warga di search box
   - Pilih dari hasil pencarian
   - Data otomatis terisi: NIK, alamat, RT/RW
3. **Detail Surat**:
   - Keperluan: "Pembuatan SIM"
   - Masa berlaku: "3 bulan"
   - Keterangan: "Warga yang bersangkutan bertempat tinggal di alamat tersebut sejak tahun 2020"
4. **Preview**: Cek semua data sudah benar
5. **Generate**: Surat akan dibuat dengan nomor: `001/SKD/RT03/I/2024`
6. **Download PDF**: Surat siap dicetak

## Penomoran Surat Otomatis

Sistem akan generate nomor surat secara otomatis dengan format:

