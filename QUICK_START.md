# 🚀 Quick Start - Personalisasi Nama Tamu

Panduan singkat untuk langsung mulai menggunakan fitur personalisasi nama tamu.

---

## ⚡ 3 Langkah Cepat

### 1. Edit Daftar Tamu
```bash
# Buka file ini:
src/data/guests.js

# Tambahkan tamu Anda:
{ name: "Bapak/Ibu Nama Tamu", slug: "nama-tamu" }
```

### 2. Generate Link
```bash
# Jalankan di terminal:
node generate-links.js

# Atau lihat file CSV:
daftar-tamu.csv
```

### 3. Kirim ke Tamu
```
Format link:
https://your-domain.com/?to=nama-tamu

Contoh:
https://your-domain.com/?to=keluarga-santoso
```

---

## 🧪 Test Sekarang

```bash
# 1. Jalankan server
npm run dev

# 2. Buka di browser
http://localhost:5173/?to=keluarga-santoso

# 3. Cek apakah nama muncul ✅
```

---

## 📋 Aturan Slug

| ✅ Benar | ❌ Salah |
|---------|---------|
| `keluarga-santoso` | `Keluarga Santoso` |
| `bapak-ahmad` | `bapak ahmad` |
| `tim-marketing` | `Tim_Marketing` |
| `sahabat-kampus` | `sahabat kampus` |

**Ingat:** huruf kecil, pakai `-`, tanpa spasi!

---

## 📱 Template Pesan Cepat

```
Assalamualaikum [NAMA TAMU] 🌸

Kami mengundang Anda di acara pernikahan kami:

💒 Putri & Adi
📅 Sabtu, 15 Februari 2026

Buka undangan:
[LINK]

Terima kasih 🙏
Putri & Adi
```

---

## 📂 File Penting

| File | Untuk Apa? |
|------|-----------|
| `src/data/guests.js` | ✏️ Edit daftar tamu |
| `generate-links.js` | 🔗 Generate semua link |
| `daftar-tamu.csv` | 📊 Lihat di Excel/Sheets |
| `template-pesan.txt` | 💬 Template WhatsApp |
| `PANDUAN_PERSONALISASI.md` | 📖 Panduan lengkap |

---

## 🆘 Troubleshooting Cepat

**Nama tidak muncul?**
→ Cek slug di `guests.js` sudah benar

**Link tidak berfungsi?**
→ Ganti `your-domain.com` dengan domain asli

**Mau tambah tamu?**
→ Edit `src/data/guests.js`, save, refresh browser

---

## ✅ Checklist

- [ ] Tambah semua tamu di `guests.js`
- [ ] Test 1-2 link di browser
- [ ] Ganti domain di semua link
- [ ] Siapkan template pesan
- [ ] Mulai kirim! 🎉

---

**Butuh detail lebih?** Baca `PANDUAN_PERSONALISASI.md`

**Selamat mencoba! 💕**
