# ✅ Checklist Penggunaan Undangan Pernikahan

Gunakan checklist ini untuk memastikan semua langkah sudah dilakukan dengan benar.

---

## 📋 FASE 1: PERSIAPAN KONTEN

### Data Dasar
- [ ] Edit nama mempelai di `src/data/data.js`
- [ ] Edit tanggal akad di `src/data/data.js`
- [ ] Edit tanggal resepsi di `src/data/data.js`
- [ ] Edit lokasi akad di `src/data/data.js`
- [ ] Edit lokasi resepsi di `src/data/data.js`
- [ ] Edit kutipan/ayat di `src/data/data.js`
- [ ] Edit countdown date di `src/data/data.js`

### Media
- [ ] Upload foto background cover ke `public/images/`
- [ ] Upload foto background main ke `public/images/`
- [ ] Upload musik background ke `public/audio/` (opsional)
- [ ] Update path gambar di `src/data/data.js`
- [ ] Update path musik di `src/data/data.js`

### Firebase Setup
- [ ] Buat project di Firebase Console
- [ ] Aktifkan Firestore Database
- [ ] Copy Firebase config ke `src/data/data.js`
- [ ] Setup security rules di Firebase Console
- [ ] Test koneksi Firebase

---

## 📋 FASE 2: DAFTAR TAMU

### Input Tamu
- [ ] Buka file `src/data/guests.js`
- [ ] Tambahkan semua tamu dengan format:
  ```javascript
  { name: "Nama Lengkap", slug: "nama-slug" }
  ```
- [ ] Pastikan semua slug unik
- [ ] Pastikan slug huruf kecil dan pakai `-`
- [ ] Kelompokkan tamu (keluarga, teman, dll)

### Generate Link
- [ ] Jalankan `node generate-links.js`
- [ ] Cek output di terminal
- [ ] Buka file `daftar-tamu.csv`
- [ ] Import CSV ke Google Sheets (opsional)
- [ ] Tambah kolom tracking di spreadsheet

---

## 📋 FASE 3: TESTING

### Test Local
- [ ] Jalankan `npm run dev`
- [ ] Buka `http://localhost:5173/`
- [ ] Test tanpa parameter (generic)
- [ ] Test dengan parameter: `?to=keluarga-santoso`
- [ ] Cek nama muncul di cover page
- [ ] Cek nama muncul di main page
- [ ] Test countdown timer
- [ ] Test musik player
- [ ] Test form ucapan
- [ ] Test responsive (mobile view)

### Test Fitur
- [ ] Klik tombol "Buka Undangan"
- [ ] Cek loading screen muncul
- [ ] Cek animasi smooth
- [ ] Cek semua gambar load
- [ ] Cek musik auto-play (atau klik play)
- [ ] Kirim ucapan test
- [ ] Cek ucapan muncul di list
- [ ] Test di berbagai browser (Chrome, Firefox, Safari)

---

## 📋 FASE 4: BUILD & DEPLOY

### Build Production
- [ ] Jalankan `npm run build`
- [ ] Cek folder `dist` terbuat
- [ ] Cek ukuran file tidak terlalu besar
- [ ] Test preview: `npm run preview`
- [ ] Buka preview di browser
- [ ] Test semua fitur di preview

### Deploy
- [ ] Pilih hosting (Netlify/Vercel/GitHub Pages)
- [ ] Upload folder `dist` ke hosting
- [ ] Dapatkan domain/URL website
- [ ] Test website di URL production
- [ ] Test dengan parameter `?to=test`
- [ ] Cek SSL/HTTPS aktif

### Update Link
- [ ] Ganti semua `https://your-domain.com` dengan URL asli
- [ ] Update di `generate-links.js`
- [ ] Update di `daftar-tamu.csv`
- [ ] Update di `GUEST_LINKS.md`
- [ ] Generate ulang link dengan domain baru
- [ ] Export CSV baru

---

## 📋 FASE 5: PENGIRIMAN

### Persiapan Pesan
- [ ] Buka file `template-pesan.txt`
- [ ] Pilih template yang sesuai
- [ ] Sesuaikan nama pengantin
- [ ] Sesuaikan tanggal acara
- [ ] Sesuaikan waktu acara

### Kirim Undangan
- [ ] Buat spreadsheet tracking
- [ ] Kolom: Nama, Link, Status, Tanggal Kirim, Konfirmasi
- [ ] Kirim ke keluarga dekat (batch 1)
- [ ] Update status di spreadsheet
- [ ] Kirim ke keluarga besar (batch 2)
- [ ] Update status di spreadsheet
- [ ] Kirim ke teman & kolega (batch 3)
- [ ] Update status di spreadsheet

### Follow Up
- [ ] Cek siapa yang belum buka link (analytics)
- [ ] Follow up yang belum konfirmasi
- [ ] Catat jumlah yang hadir
- [ ] Update spreadsheet

---

## 📋 FASE 6: MONITORING

### Setelah Deploy
- [ ] Monitor ucapan yang masuk
- [ ] Balas ucapan tamu (opsional)
- [ ] Cek Firebase usage/quota
- [ ] Backup data ucapan
- [ ] Monitor website uptime

### Maintenance
- [ ] Cek website masih online
- [ ] Cek Firebase masih aktif
- [ ] Update info jika ada perubahan
- [ ] Tambah tamu baru jika perlu

---

## 📋 TROUBLESHOOTING CHECKLIST

### Jika Nama Tidak Muncul
- [ ] Cek slug ada di `guests.js`
- [ ] Cek typo di URL parameter
- [ ] Hard refresh browser (Ctrl+F5)
- [ ] Cek console browser untuk error
- [ ] Test di incognito mode

### Jika Link Tidak Berfungsi
- [ ] Cek website sudah deploy
- [ ] Cek domain sudah benar
- [ ] Cek SSL/HTTPS aktif
- [ ] Test di browser lain
- [ ] Cek internet connection

### Jika Ucapan Tidak Tersimpan
- [ ] Cek Firebase config benar
- [ ] Cek Firebase security rules
- [ ] Cek internet connection
- [ ] Cek console browser untuk error
- [ ] Cek Firebase quota

---

## 📋 FINAL CHECKLIST

### Sebelum Kirim Massal
- [ ] Semua konten sudah benar
- [ ] Semua gambar sudah upload
- [ ] Firebase sudah setup
- [ ] Website sudah deploy
- [ ] Test minimal 5 link berbeda
- [ ] Test di mobile & desktop
- [ ] Template pesan sudah siap
- [ ] Spreadsheet tracking sudah siap
- [ ] Backup semua data

### Hari H - 7
- [ ] Reminder ke tamu yang belum konfirmasi
- [ ] Update info jika ada perubahan
- [ ] Cek website masih online
- [ ] Backup data ucapan

### Hari H
- [ ] Website masih online ✅
- [ ] Semua fitur berfungsi ✅
- [ ] Siap menerima tamu ✅

---

## 🎉 SELESAI!

Jika semua checklist sudah ✅, undangan Anda siap dikirim!

**Selamat dan sukses untuk acara pernikahannya! 💒💕**

---

## 📞 Quick Reference

| Kebutuhan | File |
|-----------|------|
| Edit tamu | `src/data/guests.js` |
| Generate link | `node generate-links.js` |
| Lihat link | `daftar-tamu.csv` |
| Template pesan | `template-pesan.txt` |
| Panduan lengkap | `PANDUAN_PERSONALISASI.md` |
| Panduan singkat | `QUICK_START.md` |
| Test local | `npm run dev` |
| Build | `npm run build` |
