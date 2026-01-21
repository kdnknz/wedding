# 💒 Aplikasi Undangan Pernikahan

Aplikasi undangan pernikahan berbasis web yang modern, responsif, dan mudah dikustomisasi.

## ✨ Fitur

- 🎨 Desain modern dengan animasi smooth
- 📱 Responsif untuk semua perangkat (mobile, tablet, desktop)
- ⏱️ Countdown timer menuju hari pernikahan
- 💬 Sistem ucapan & komentar real-time dengan Firebase
- 🎵 Background music dengan kontrol play/pause
- 👤 Personalisasi nama tamu di undangan
- 🚀 Build menjadi single HTML statis
- 🌐 Mudah di-host di layanan gratis (Netlify, Vercel, GitHub Pages)

## 🛠️ Teknologi

- **React** - UI Library
- **Vite** - Build tool
- **Firebase Firestore** - Database untuk ucapan
- **CSS3** - Styling dengan animasi modern

## 📦 Instalasi

1. Install dependencies:
```bash
npm install
```

2. Setup Firebase:
   - Buat project di [Firebase Console](https://console.firebase.google.com)
   - Aktifkan Firestore Database
   - Copy konfigurasi Firebase ke `src/data/data.js`

3. Jalankan development server:
```bash
npm run dev
```

4. Build untuk production:
```bash
npm run build
```

## ⚙️ Konfigurasi

Edit file `src/data/data.js` untuk mengubah konten undangan:

```javascript
export const weddingData = {
  couple: {
    bride: "Nama Mempelai Wanita",
    groom: "Nama Mempelai Pria"
  },
  event: {
    akad: {
      date: "Tanggal Akad",
      time: "Waktu Akad",
      venue: "Tempat Akad",
      address: "Alamat Lengkap"
    },
    resepsi: {
      date: "Tanggal Resepsi",
      time: "Waktu Resepsi",
      venue: "Tempat Resepsi",
      address: "Alamat Lengkap"
    }
  },
  countdownDate: "2026-02-15T08:00:00",
  quote: "Kutipan atau ayat",
  quoteSource: "Sumber kutipan"
}
```

## 🔒 Firebase Security Rules

Tambahkan rules berikut di Firebase Console:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /greetings/{greeting} {
      allow read: if true;
      allow create: if request.resource.data.name is string 
                    && request.resource.data.message is string;
    }
  }
}
```

## 🚀 Deploy

### Netlify
```bash
npm run build
# Upload folder 'dist' ke Netlify
```

### Vercel
```bash
npm run build
# Upload folder 'dist' ke Vercel
```

### GitHub Pages
```bash
npm run build
# Push folder 'dist' ke branch gh-pages
```

## 👤 Personalisasi Nama Tamu

Aplikasi ini mendukung personalisasi nama tamu di undangan. Setiap tamu akan melihat namanya sendiri saat membuka link undangan.

### Cara Menggunakan:

1. **Edit Daftar Tamu**: Buka `src/data/guests.js` dan tambahkan tamu Anda:
```javascript
export const guestList = [
  { name: "Bapak/Ibu Keluarga Santoso", slug: "keluarga-santoso" },
  { name: "Saudara Ahmad & Keluarga", slug: "ahmad-keluarga" },
  // tambahkan tamu lainnya...
]
```

2. **Generate Link**: Setiap tamu memiliki link unik:
```
https://your-domain.com/?to=keluarga-santoso
https://your-domain.com/?to=ahmad-keluarga
```

3. **Generate Semua Link**: Jalankan script untuk melihat semua link:
```bash
node generate-links.js
```

4. **Lihat Dokumentasi Lengkap**: Baca file `GUEST_LINKS.md` untuk panduan detail dan template pesan WhatsApp/Email.

### Testing di Local:
```
http://localhost:5173/?to=keluarga-santoso
```

Nama tamu akan muncul di halaman cover dan halaman utama undangan.

## 📝 Lisensi

MIT License - Bebas digunakan untuk keperluan pribadi maupun komersial.

## 💝 Kontribusi

Kontribusi sangat diterima! Silakan buat pull request atau issue.
