# Setup JSONBin.io untuk Database Ucapan

## Kenapa JSONBin?

- ✅ **Gratis** (100,000 requests/month)
- ✅ **Tidak perlu backend**
- ✅ **Real-time sync** antar guest
- ✅ **Setup 2 menit**
- ✅ **Bisa download JSON kapan saja**

## Cara Setup (2 Menit)

### 1. Buat Akun JSONBin

1. Buka [jsonbin.io](https://jsonbin.io)
2. Klik "Sign Up" (gratis)
3. Verifikasi email

### 2. Buat Bin Baru

1. Login ke dashboard
2. Klik "Create Bin"
3. Isi dengan array kosong: `[]`
4. Klik "Create"
5. **Copy Bin ID** (contoh: `67a1b2c3d4e5f6g7h8i9j0k1`)

### 3. Copy API Key (Optional tapi Recommended)

1. Di dashboard, klik profile icon (kanan atas)
2. Klik "API Keys"
3. **Copy Master Key** (contoh: `$2a$10$...`)

### 4. Update Code

Buka file `src/utils/greetingsApi.js` dan ganti:

```javascript
const BIN_ID = '67a1b2c3d4e5f6g7h8i9j0k1' // Paste Bin ID Anda
const API_KEY = '$2a$10$...' // Paste API Key Anda
```

### 5. Deploy Ulang

```bash
git add .
git commit -m "Add JSONBin config"
git push
```

Vercel akan auto-deploy dalam 1-2 menit!

### 6. Test

1. Buka `https://adityamutiara.vercel.app/?to=keluarga-santoso`
2. Kirim ucapan
3. Buka di tab baru: `https://adityamutiara.vercel.app/?to=keluarga-siti`
4. Ucapan dari guest pertama seharusnya muncul! ✅

## Lihat Ucapan yang Masuk

### Opsi 1: Via JSONBin Dashboard
1. Login ke jsonbin.io
2. Klik Bin Anda
3. Lihat semua ucapan dalam format JSON

### Opsi 2: Via API
Buka di browser:
```
https://api.jsonbin.io/v3/b/YOUR_BIN_ID/latest
```

### Opsi 3: Download JSON
1. Buka JSONBin dashboard
2. Klik Bin Anda
3. Klik "Download" atau copy JSON
4. Paste ke Excel atau text editor

## Troubleshooting

### Error: "Failed to fetch"
- Pastikan Bin ID sudah benar
- Cek koneksi internet
- Coba refresh browser

### Error: "Failed to save"
- Pastikan API Key sudah benar (atau hapus jika tidak pakai)
- Cek quota JSONBin (100k requests/month)

### Ucapan tidak sync antar guest
- Tunggu 10 detik (auto-refresh)
- Atau refresh manual (F5)
- Pastikan Bin ID sama untuk semua

## Alternatif Tanpa JSONBin

Jika tidak mau setup JSONBin, aplikasi tetap jalan dengan **localStorage**:
- ✅ Ucapan tersimpan di browser masing-masing
- ❌ Tidak sync antar guest
- ✅ Tetap bisa export ucapan dari browser Anda

Untuk pakai localStorage saja, biarkan:
```javascript
const BIN_ID = 'YOUR_BIN_ID' // Jangan diganti
```

## Keamanan

JSONBin Bin bersifat public (siapa saja bisa baca/tulis jika punya Bin ID). Untuk production:

1. **Enable Access Control** di JSONBin dashboard
2. **Set Bin to Private**
3. **Gunakan API Key** untuk semua request

Tapi untuk wedding invitation yang temporary, public bin sudah cukup aman.

## Biaya

**GRATIS!** JSONBin free tier:
- ✅ 100,000 API requests/month
- ✅ Unlimited bins
- ✅ 100KB per bin (cukup untuk ribuan ucapan)

Untuk wedding dengan ~200 guest, estimasi usage:
- 200 guest × 10 requests = 2,000 requests
- Masih jauh dari limit 100,000!

## Selesai!

Sekarang undangan Anda punya database ucapan yang real-time sync! 🎉
