# 📋 Panduan Lengkap Personalisasi Nama Tamu

Panduan ini menjelaskan cara menggunakan fitur personalisasi nama tamu di undangan pernikahan digital Anda.

---

## 🎯 Apa itu Personalisasi Nama Tamu?

Setiap tamu akan melihat **nama mereka sendiri** saat membuka undangan. Ini membuat undangan terasa lebih personal dan spesial.

**Contoh:**
- Link untuk Keluarga Santoso: `https://your-domain.com/?to=keluarga-santoso`
- Saat dibuka, akan muncul: **"Kepada Yth. Bapak/Ibu Keluarga Santoso"**

---

## 📝 Langkah-Langkah Penggunaan

### 1️⃣ Tambah/Edit Daftar Tamu

Buka file: **`src/data/guests.js`**

```javascript
export const guestList = [
  { name: "Bapak/Ibu Keluarga Santoso", slug: "keluarga-santoso" },
  { name: "Saudara Ahmad & Keluarga", slug: "ahmad-keluarga" },
  // Tambahkan tamu Anda di sini
]
```

**Aturan Slug:**
- ✅ Huruf kecil semua
- ✅ Tanpa spasi (gunakan `-`)
- ✅ Unik (tidak boleh sama)
- ✅ Contoh: "Bapak Budi" → `bapak-budi`

### 2️⃣ Generate Daftar Link

Jalankan script untuk melihat semua link:

```bash
node generate-links.js
```

Output akan menampilkan:
- Daftar lengkap semua link
- Format CSV untuk Excel/Google Sheets
- Template pesan WhatsApp

### 3️⃣ Lihat Daftar Link di File CSV

Buka file: **`daftar-tamu.csv`**

File ini bisa dibuka dengan:
- Microsoft Excel
- Google Sheets
- Notepad/Text Editor

Format:
```
Nama Tamu,Slug,Link Undangan
"Bapak/Ibu Keluarga Santoso","keluarga-santoso","https://your-domain.com/?to=keluarga-santoso"
```

### 4️⃣ Kirim Link ke Tamu

Gunakan template pesan dari file: **`template-pesan.txt`**

**Via WhatsApp:**
```
Assalamualaikum Bapak/Ibu Keluarga Santoso 🌸

Dengan penuh kebahagiaan, kami mengundang Bapak/Ibu 
untuk hadir di acara pernikahan kami.

Silakan buka undangan digital kami:
https://your-domain.com/?to=keluarga-santoso

Terima kasih 🙏
Putri & Adi
```

---

## 🧪 Testing

### Testing di Local (Development)

1. Pastikan server berjalan:
```bash
npm run dev
```

2. Buka di browser dengan parameter:
```
http://localhost:5173/?to=keluarga-santoso
http://localhost:5173/?to=ahmad-keluarga
```

3. Cek apakah nama tamu muncul di:
   - ✅ Halaman cover (home)
   - ✅ Halaman utama undangan

### Testing di Production

Setelah deploy, test dengan:
```
https://your-domain.com/?to=keluarga-santoso
```

---

## 📂 File-File Penting

| File | Fungsi |
|------|--------|
| `src/data/guests.js` | Daftar tamu (edit di sini) |
| `src/utils/urlParams.js` | Utility untuk baca URL parameter |
| `src/pages/Home.jsx` | Tampilan nama di cover page |
| `src/pages/Invitation.jsx` | Tampilan nama di halaman utama |
| `generate-links.js` | Script generate semua link |
| `daftar-tamu.csv` | Daftar link dalam format CSV |
| `template-pesan.txt` | Template pesan WhatsApp/Email |
| `GUEST_LINKS.md` | Dokumentasi lengkap |

---

## 💡 Tips & Trik

### 1. Cara Menambah Tamu Baru

Edit `src/data/guests.js`:
```javascript
{ name: "Bapak Dr. Ahmad Santoso", slug: "dr-ahmad-santoso" }
```

### 2. Format Nama yang Baik

✅ **Baik:**
- "Bapak/Ibu Keluarga Santoso"
- "Saudara Ahmad & Keluarga"
- "Bapak Dr. Budi Wijaya"
- "Teman-teman Kantor"

❌ **Hindari:**
- Nama terlalu panjang (lebih dari 50 karakter)
- Karakter spesial yang aneh

### 3. Grouping Tamu

Anda bisa mengelompokkan tamu:
```javascript
// Keluarga
{ name: "Bapak/Ibu Keluarga Santoso", slug: "keluarga-santoso" },
{ name: "Bapak/Ibu Keluarga Wijaya", slug: "keluarga-wijaya" },

// Teman Kantor
{ name: "Tim Marketing", slug: "tim-marketing" },
{ name: "Tim IT", slug: "tim-it" },

// Teman Kampus
{ name: "Sahabat Kampus Angkatan 2015", slug: "kampus-2015" },
```

### 4. Link Tanpa Nama (Generic)

Jika ada yang membuka tanpa parameter `?to=`, undangan tetap bisa dibuka tapi tanpa nama tamu.

Contoh:
- `https://your-domain.com/` → Tidak ada nama tamu
- `https://your-domain.com/?to=ahmad` → Muncul nama tamu

---

## 🔧 Troubleshooting

### Nama Tamu Tidak Muncul

**Penyebab:**
1. Slug tidak ada di `guests.js`
2. Typo di URL parameter
3. Browser cache

**Solusi:**
1. Cek `src/data/guests.js` apakah slug sudah ada
2. Pastikan URL: `?to=slug-yang-benar`
3. Hard refresh browser (Ctrl+F5)

### Link Tidak Berfungsi

**Penyebab:**
1. Domain belum diganti
2. Website belum di-deploy

**Solusi:**
1. Ganti `https://your-domain.com` dengan domain asli
2. Deploy website terlebih dahulu
3. Test di local dulu: `http://localhost:5173/?to=slug`

---

## 📊 Contoh Workflow Lengkap

### Skenario: Mengirim 50 Undangan

**Langkah 1:** Edit daftar tamu
```bash
# Edit src/data/guests.js
# Tambahkan 50 tamu dengan nama dan slug
```

**Langkah 2:** Generate link
```bash
node generate-links.js > output.txt
```

**Langkah 3:** Import ke spreadsheet
```bash
# Buka daftar-tamu.csv di Google Sheets
# Tambahkan kolom: Status Kirim, Tanggal Kirim, Konfirmasi
```

**Langkah 4:** Kirim bertahap
```
Hari 1: Kirim ke keluarga dekat (10 orang)
Hari 2: Kirim ke keluarga besar (20 orang)
Hari 3: Kirim ke teman & kolega (20 orang)
```

**Langkah 5:** Tracking
```
Gunakan Google Sheets untuk tracking:
- Sudah dikirim ✅
- Belum dikirim ⏳
- Sudah konfirmasi hadir ✅
- Tidak bisa hadir ❌
```

---

## 🎨 Kustomisasi Tampilan

Jika ingin mengubah tampilan nama tamu, edit file CSS:

**File:** `src/styles/main.css`

**Untuk Cover Page:**
```css
.guest-greeting {
  background: rgba(255, 255, 255, 0.15);
  padding: 25px 40px;
  border-radius: 16px;
  /* Sesuaikan style di sini */
}
```

**Untuk Main Page:**
```css
.guest-name-display {
  background: rgba(255, 255, 255, 0.15);
  padding: 20px 35px;
  border-radius: 12px;
  /* Sesuaikan style di sini */
}
```

---

## 📱 Contoh Pesan Lengkap

### WhatsApp - Formal

```
Assalamualaikum Wr. Wb.

Kepada Yth.
Bapak/Ibu Keluarga Santoso
Di Tempat

Dengan memohon rahmat dan ridho Allah SWT, 
kami mengundang Bapak/Ibu untuk hadir di 
acara pernikahan kami:

*Putri & Adi*

📅 Sabtu, 15 Februari 2026
🕐 Akad: 08:00 WIB | Resepsi: 11:00 WIB

Silakan buka undangan digital kami:
https://your-domain.com/?to=keluarga-santoso

Merupakan suatu kehormatan bagi kami apabila 
Bapak/Ibu berkenan hadir untuk memberikan 
doa restu.

Terima kasih 🙏

Wassalamualaikum Wr. Wb.

Putri & Adi
```

### Email - Formal

**Subject:** Undangan Pernikahan Putri & Adi

**Body:**
```
Kepada Yth.
Bapak/Ibu Keluarga Santoso
Di Tempat

Assalamualaikum Wr. Wb.

Dengan memohon rahmat dan ridho Allah SWT, kami mengundang 
Bapak/Ibu untuk hadir di acara pernikahan kami.

Silakan buka undangan digital kami dengan klik link berikut:
https://your-domain.com/?to=keluarga-santoso

Detail Acara:
- Akad Nikah: Sabtu, 15 Februari 2026, 08:00 WIB
- Resepsi: Sabtu, 15 Februari 2026, 11:00 WIB

Merupakan suatu kehormatan bagi kami apabila Bapak/Ibu 
berkenan hadir untuk memberikan doa restu.

Terima kasih.

Wassalamualaikum Wr. Wb.

Putri & Adi
```

---

## ✅ Checklist Sebelum Kirim

- [ ] Semua tamu sudah ditambahkan di `guests.js`
- [ ] Slug sudah unik dan tidak ada yang sama
- [ ] Domain sudah diganti dari `your-domain.com` ke domain asli
- [ ] Website sudah di-deploy dan bisa diakses
- [ ] Test minimal 3 link berbeda di browser
- [ ] Template pesan sudah disesuaikan
- [ ] Nama pengantin sudah benar di template
- [ ] Tanggal dan waktu sudah benar
- [ ] File CSV sudah di-backup

---

## 🆘 Butuh Bantuan?

Jika ada masalah atau pertanyaan:

1. Cek file `GUEST_LINKS.md` untuk dokumentasi detail
2. Cek file `template-pesan.txt` untuk template pesan
3. Jalankan `node generate-links.js` untuk generate ulang
4. Test di local: `npm run dev` lalu buka `localhost:5173/?to=test`

---

**Selamat menggunakan! Semoga acara pernikahan Anda lancar dan penuh berkah! 💒💕**
