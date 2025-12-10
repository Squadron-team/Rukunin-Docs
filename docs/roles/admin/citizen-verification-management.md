---
sidebar_position: 6
---
# Verifikasi Data Warga

<div className="role-badge admin">
  👤 Role: Admin
</div>

Panduan ini menjelaskan proses verifikasi identitas warga dalam sistem Rukunin, yang penting untuk memastikan keabsahan data dan akses layanan.

## Mengakses Menu Verifikasi

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
    <h3>Pilih Verifikasi Warga</h3>
    <p>Klik menu <strong>Verifikasi Warga</strong> untuk melihat daftar warga yang belum diverifikasi</p>
  </div>
</div>

## Daftar Warga Belum Diverifikasi

Halaman ini menampilkan:

- **Nama lengkap warga**
- **NIK**
- **Alamat**
- **Status**: Belum Diverifikasi

Contoh:

| Nama         | NIK               | Alamat             | Status             |
|--------------|-------------------|---------------------|--------------------|
| Budi Santoso | 3275010701010001  | Jl. Melati No. 12   | Belum Diverifikasi |
| Siti Aminah  | 3275011202020002  | Jl. Kenanga No. 5   | Belum Diverifikasi |

## Proses Verifikasi

<div className="step-container">
  <div className="step-number">1</div>
  <div className="step-content">
    <h3>Buka Detail Warga</h3>
    <p>Klik nama warga dari daftar untuk membuka halaman <strong>Detail Verifikasi</strong></p>
  </div>
</div>

<div className="step-container">
  <div className="step-number">2</div>
  <div className="step-content">
    <h3>Periksa Dokumen Identitas</h3>
    <p>Pastikan foto dan data dokumen sesuai dengan informasi warga</p>
  </div>
</div>

<div className="step-container">
  <div className="step-number">3</div>
  <div className="step-content">
    <h3>Verifikasi atau Tolak</h3>
    <p>Pilih salah satu tindakan:</p>
    <ul>
      <li><strong>Verifikasi Warga</strong> – Jika data valid</li>
      <li><strong>Tolak Verifikasi</strong> – Jika data tidak sesuai atau tidak lengkap</li>
    </ul>
  </div>
</div>

## Tips Verifikasi

:::tip Best Practice

- **Cocokkan NIK dan foto** dengan dokumen resmi
- **Pastikan alamat lengkap dan jelas**
- **Gunakan penolakan jika data tidak valid**
- **Catat alasan penolakan untuk audit**
- **Verifikasi hanya dilakukan oleh admin yang berwenang**

:::

## Troubleshooting

### Tidak bisa verifikasi warga

Kemungkinan penyebab:

1. Dokumen belum diunggah
2. Data tidak lengkap
3. Sistem gagal menyimpan status

**Solusi**: Periksa kembali data dan coba ulangi proses verifikasi

### Warga tetap muncul di daftar belum diverifikasi

**Solusi**:

1. Refresh halaman
2. Pastikan status sudah berubah
3. Hubungi support jika masalah berlanjut

---

**Butuh bantuan?** Hubungi tim support: admin-support@rukunin.app