# 🚀 Panduan Setup Lengkap

## 1. Persiapan Awal

### Install Node.js
Pastikan Node.js sudah terinstall (versi 16 atau lebih baru):
```bash
node --version
npm --version
```

### Clone atau Download Project
```bash
# Jika menggunakan git
git clone <repository-url>
cd wedding-invitation

# Atau download dan extract ZIP
```

## 2. Install Dependencies

```bash
npm install
```

## 3. Setup Firebase

### A. Buat Project Firebase

1. Buka [Firebase Console](https://console.firebase.google.com)
2. Klik "Add project" atau "Tambah project"
3. Beri nama project (contoh: "wedding-invitation")
4. Ikuti wizard setup (Analytics opsional)

### B. Aktifkan Firestore Database

1. Di sidebar, pilih **Build** → **Firestore Database**
2. Klik **Create database**
3. Pilih mode **Production mode**
4. Pilih lokasi server (pilih yang terdekat, contoh: asia-southeast1)
5. Klik **Enable**

### C. Atur Security Rules

1. Di Firestore, pilih tab **Rules**
2. Ganti rules dengan:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /greetings/{greeting} {
      allow read: if true;
      allow create: if request.resource.data.name is string 
                    && request.resource.data.message is string
                    && request.resource.data.name.size() <= 100
                    && request.resource.data.message.size() <= 500;
      allow update: if false;
      allow delete: if false;
    }
  }
}
```

3. Klik **Publish**

### D. Dapatkan Config Firebase

1. Di Firebase Console, klik ⚙️ (Settings) → **Project settings**
2. Scroll ke bawah, di bagian "Your apps", klik icon **</>** (Web)
3. Beri nama app (contoh: "Wedding Web")
4. **Jangan** centang Firebase Hosting
5. Klik **Register app**
6. Copy konfigurasi yang muncul

### E. Masukkan Config ke Project

1. Buka file `src/data/data.js`
2. Ganti bagian `firebaseConfig` dengan config yang sudah dicopy:

```javascript
export const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
}
```

## 4. Kustomisasi Konten

Edit file `src/data/data.js`:

```javascript
export const weddingData = {
  couple: {
    bride: "Nama Mempelai Wanita",  // Ganti dengan nama asli
    groom: "Nama Mempelai Pria"     // Ganti dengan nama asli
  },
  event: {
    akad: {
      date: "Sabtu, 15 Februari 2026",
      time: "08:00 - 10:00 WIB",
      venue: "Masjid Al-Ikhlas",
      address: "Jl. Merdeka No. 123, Jakarta Selatan"
    },
    resepsi: {
      date: "Sabtu, 15 Februari 2026",
      time: "11:00 - 14:00 WIB",
      venue: "Gedung Serbaguna Melati",
      address: "Jl. Kenangan No. 456, Jakarta Selatan"
    }
  },
  countdownDate: "2026-02-15T08:00:00", // Format: YYYY-MM-DDTHH:mm:ss
  quote: "Kutipan atau ayat favorit Anda",
  quoteSource: "Sumber kutipan"
}
```

## 5. Tambahkan Assets (Opsional)

### Background Music
1. Siapkan file musik format MP3
2. Buat folder `public/audio/`
3. Copy file musik ke `public/audio/background.mp3`

### Foto
1. Buat folder `public/images/`
2. Copy foto-foto ke folder tersebut
3. Update path di `data.js` jika perlu

## 6. Testing Lokal

```bash
npm run dev
```

Buka browser dan akses: `http://localhost:5173`

### Checklist Testing:
- ✅ Halaman cover muncul dengan benar
- ✅ Tombol "Buka Undangan" berfungsi
- ✅ Loading screen muncul
- ✅ Countdown berjalan
- ✅ Detail acara tampil
- ✅ Form ucapan bisa diisi dan terkirim
- ✅ Ucapan muncul di list
- ✅ Music player berfungsi (play/pause)
- ✅ Responsif di mobile (test dengan resize browser)

## 7. Build untuk Production

```bash
npm run build
```

File hasil build ada di folder `dist/`

## 8. Deploy

### Option A: Netlify (Recommended)

1. Buat akun di [Netlify](https://netlify.com)
2. Klik **Add new site** → **Deploy manually**
3. Drag & drop folder `dist/` ke area upload
4. Tunggu proses deploy selesai
5. Dapatkan URL undangan Anda!

### Option B: Vercel

1. Buat akun di [Vercel](https://vercel.com)
2. Install Vercel CLI: `npm i -g vercel`
3. Jalankan: `vercel --prod`
4. Ikuti instruksi di terminal

### Option C: GitHub Pages

1. Install gh-pages: `npm install -D gh-pages`
2. Tambahkan di `package.json`:
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```
3. Jalankan: `npm run deploy`

## 9. Share Undangan

Setelah deploy, Anda akan mendapat URL seperti:
- Netlify: `https://your-wedding.netlify.app`
- Vercel: `https://your-wedding.vercel.app`
- GitHub Pages: `https://username.github.io/wedding`

Share URL tersebut ke tamu undangan via:
- WhatsApp
- Instagram
- Email
- Social media lainnya

## 🆘 Troubleshooting

### Error: Firebase not configured
- Pastikan sudah mengisi `firebaseConfig` di `src/data/data.js`
- Cek apakah semua field terisi dengan benar

### Ucapan tidak tersimpan
- Cek Firebase Security Rules sudah benar
- Pastikan Firestore Database sudah aktif
- Cek console browser untuk error (F12)

### Music tidak auto-play
- Browser modern memblokir auto-play
- User harus klik tombol "Buka Undangan" terlebih dahulu
- Ini adalah behavior normal untuk keamanan browser

### Build error
- Hapus folder `node_modules` dan `package-lock.json`
- Jalankan `npm install` lagi
- Coba build ulang: `npm run build`

## 📞 Support

Jika ada pertanyaan atau masalah, silakan buat issue di repository ini.

Selamat menggunakan! 💒✨
