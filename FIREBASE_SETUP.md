# Panduan Setup Firebase

## Masalah yang Anda Alami

1. **Button tetap disabled setelah kirim ucapan** ✅ SUDAH DIPERBAIKI
   - Sekarang ada feedback "Ucapan berhasil dikirim!" atau pesan error
   - Button akan kembali aktif setelah proses selesai

2. **Ucapan tidak muncul di guest lain** ❌ PERLU KONFIGURASI FIREBASE
   - Firebase belum dikonfigurasi (masih menggunakan placeholder)
   - Ikuti langkah di bawah untuk setup Firebase

## Cara Setup Firebase

### 1. Buat Project Firebase

1. Buka [Firebase Console](https://console.firebase.google.com/)
2. Klik "Add project" atau "Tambah project"
3. Beri nama project (contoh: "wedding-invitation")
4. Ikuti wizard setup (bisa disable Google Analytics jika tidak perlu)

### 2. Buat Web App

1. Di Firebase Console, klik icon **</>** (Web) untuk menambah web app
2. Beri nama app (contoh: "Wedding Web")
3. Klik "Register app"
4. Copy konfigurasi Firebase yang muncul (seperti contoh di bawah)

### 3. Enable Firestore Database

1. Di sidebar Firebase Console, klik **Firestore Database**
2. Klik "Create database"
3. Pilih mode:
   - **Test mode** (untuk development - data bisa diakses siapa saja selama 30 hari)
   - **Production mode** (lebih aman, perlu setup rules)
4. Pilih lokasi server (pilih yang terdekat, contoh: asia-southeast1)
5. Klik "Enable"

### 4. Setup Security Rules (Opsional tapi Disarankan)

Di tab **Rules** di Firestore, ganti dengan:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /greetings/{greeting} {
      // Siapa saja bisa baca
      allow read: if true;
      // Siapa saja bisa create (kirim ucapan baru)
      allow create: if request.resource.data.name is string &&
                       request.resource.data.message is string &&
                       request.resource.data.timestamp is timestamp;
      // Hanya bisa update untuk menambah comment
      allow update: if request.resource.data.diff(resource.data).affectedKeys()
                       .hasOnly(['comments']);
    }
  }
}
```

### 5. Copy Config ke Project

1. Copy konfigurasi Firebase dari console
2. Buka file `src/data/data.js`
3. Ganti bagian `firebaseConfig` dengan config Anda:

```javascript
export const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:xxxxxxxxxxxxx"
}
```

### 6. Test

1. Jalankan `npm run dev`
2. Buka undangan dengan link guest (contoh: `?to=keluarga-wijaya`)
3. Kirim ucapan
4. Buka di tab baru dengan guest berbeda (contoh: `?to=keluarga-siti`)
5. Ucapan dari guest pertama seharusnya muncul!

## Troubleshooting

### Error: "Firebase belum dikonfigurasi"
- Pastikan sudah mengganti semua nilai `YOUR_XXX` di `firebaseConfig`
- Restart dev server setelah mengubah config

### Error: "Missing or insufficient permissions"
- Cek Firestore Rules di Firebase Console
- Pastikan rules mengizinkan read/write untuk collection `greetings`

### Ucapan tidak muncul real-time
- Cek koneksi internet
- Buka Console browser (F12) untuk lihat error
- Pastikan Firestore sudah enabled di Firebase Console

## Keamanan

⚠️ **PENTING**: Jangan commit file `src/data/data.js` dengan Firebase config asli ke repository public!

Untuk production, gunakan environment variables:
1. Buat file `.env` (sudah ada di `.gitignore`)
2. Pindahkan config ke `.env`:
```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
...
```
3. Update `data.js` untuk baca dari env variables

## Alternatif Tanpa Firebase

Jika tidak ingin setup Firebase, Anda bisa:
1. Gunakan Supabase (lebih mudah setup)
2. Buat backend sendiri dengan Node.js + MongoDB
3. Disable fitur greeting (hapus GreetingSection dari Invitation.jsx)
