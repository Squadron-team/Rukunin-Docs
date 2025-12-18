---
sidebar_position: 11
---

# Persetujuan Bendahara

<div className="role-badge admin">
  ✅ Role: Bendahara RW / Admin
</div>

Fitur **Persetujuan Bendahara** digunakan untuk meninjau, menyetujui, atau menolak pengajuan dana dari Bendahara RT sebelum dana dicairkan. Fitur ini memastikan kontrol, transparansi, dan akuntabilitas keuangan di tingkat RW.

---

## Mengakses Menu Persetujuan Bendahara

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
    <h3>Pilih Persetujuan Bendahara</h3>
    <p>Klik menu <strong>Persetujuan Bendahara</strong> untuk melihat daftar pengajuan dana</p>
  </div>
</div>

---

## Ringkasan Status Pengajuan

Pada bagian atas halaman, sistem menampilkan ringkasan jumlah pengajuan berdasarkan status:

| Status | Deskripsi |
|------|-----------|
| **Menunggu** | Pengajuan yang belum diproses |
| **Disetujui** | Pengajuan yang telah disetujui |
| **Ditolak** | Pengajuan yang ditolak |

Ringkasan ini membantu bendahara memantau beban kerja dan status persetujuan secara cepat.

---

## Filter Daftar Pengajuan

Tersedia filter untuk memudahkan pencarian pengajuan:

| Filter | Fungsi |
|------|--------|
| **Semua** | Menampilkan seluruh pengajuan |
| **Menunggu** | Hanya pengajuan yang belum diproses |
| **Disetujui** | Pengajuan yang telah disetujui |
| **Ditolak** | Pengajuan yang ditolak |

---

## Daftar Persetujuan Dana

Setiap kartu pengajuan menampilkan informasi utama:

- **Judul pengajuan** (contoh: Pengajuan Dana Kegiatan)
- **RT pengaju**
- **Nama Bendahara RT**
- **Jumlah dana**
- **Waktu pengajuan**
- **Status pengajuan**

---

## Menyetujui Pengajuan Dana

<div className="step-container">
  <div className="step-number">1</div>
  <div className="step-content">
    <h3>Periksa Pengajuan</h3>
    <p>Tinjau detail pengajuan dana yang berstatus <strong>Menunggu</strong></p>
  </div>
</div>

<div className="step-container">
  <div className="step-number">2</div>
  <div className="step-content">
    <h3>Klik Setujui</h3>
    <p>Tekan tombol <strong>✔ Setujui</strong> pada kartu pengajuan</p>
  </div>
</div>

<div className="step-container">
  <div className="step-number">3</div>
  <div className="step-content">
    <h3>Konfirmasi</h3>
    <p>Sistem akan menyimpan status pengajuan sebagai <strong>Disetujui</strong></p>
  </div>
</div>

Setelah disetujui:
- Pengajuan tercatat sebagai pengeluaran resmi
- Data otomatis masuk ke laporan keuangan RT/RW

---

## Menolak Pengajuan Dana

<div className="step-container">
  <div className="step-number">1</div>
  <div className="step-content">
    <h3>Pilih Pengajuan</h3>
    <p>Pilih pengajuan dana yang tidak sesuai</p>
  </div>
</div>

<div className="step-container">
  <div className="step-number">2</div>
  <div className="step-content">
    <h3>Klik Tolak</h3>
    <p>Tekan tombol <strong>✖ Tolak</strong></p>
  </div>
</div>

<div className="step-container">
  <div className="step-number">3</div>
  <div className="step-content">
    <h3>Catatan Penolakan</h3>
    <p>(Opsional) Berikan alasan penolakan sebagai catatan audit</p>
  </div>
</div>

Pengajuan yang ditolak:
- Tidak masuk ke laporan keuangan
- Dapat diajukan ulang oleh Bendahara RT

---

## Status Pengajuan

| Status | Keterangan |
|------|------------|
| **Menunggu** | Menunggu keputusan bendahara RW |
| **Disetujui** | Dana disetujui dan siap direalisasikan |
| **Ditolak** | Pengajuan tidak disetujui |

Status ditandai dengan warna:
- 🟠 Oranye → Menunggu
- 🟢 Hijau → Disetujui
- 🔴 Merah → Ditolak

---

## Manfaat Fitur Persetujuan Bendahara

:::tip Manfaat
- Kontrol keuangan yang lebih ketat
- Mencegah pengeluaran tidak sah
- Meningkatkan transparansi antar RT dan RW
- Mendukung audit dan pelaporan keuangan
:::

---

## Troubleshooting

### Pengajuan tidak muncul
Kemungkinan:
1. Belum diajukan oleh Bendahara RT
2. Filter status tidak sesuai

**Solusi**: Gunakan filter **Semua**

### Salah menekan Setujui/Tolak
**Solusi**: Hubungi admin sistem untuk koreksi manual (audit trail tetap tersimpan)

### Jumlah dana tidak sesuai
**Solusi**: Tolak pengajuan dan minta Bendahara RT mengajukan ulang dengan nominal benar

---

**Butuh bantuan?**  
Hubungi tim support: bendahara-support@rukunin.app
