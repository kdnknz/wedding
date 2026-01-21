# Fix Error "Gagal mengirim ucapan"

## Masalah

Error terjadi karena Vercel Serverless Function tidak bisa write ke file system secara persistent.

## Solusi

Saya sudah update code untuk pakai **JSONBin.io** (gratis, simple, no backend needed).

## Yang Perlu Anda Lakukan

### Opsi 1: Setup JSONBin (RECOMMENDED - 2 menit) ⭐

Ikuti panduan lengkap di **`JSONBIN_SETUP.md`**

**Ringkasan singkat:**
1. Buka [jsonbin.io](https://jsonbin.io) → Sign up (gratis)
2. Create Bin baru dengan content: `[]`
3. Copy Bin ID
4. Buka `src/utils/greetingsApi.js`
5. Ganti `const BIN_ID = 'YOUR_BIN_ID'` dengan Bin ID Anda
6. Push ke GitHub → Vercel auto-deploy
7. Done! Ucapan akan sync antar semua guest ✅

### Opsi 2: Pakai localStorage (Tidak Recommended)

Jika tidak mau setup JSONBin, biarkan code seperti sekarang:
- ✅ Ucapan tetap bisa dikirim
- ✅ Tersimpan di browser masing-masing
- ❌ Tidak sync antar guest (setiap orang hanya lihat ucapan mereka sendiri)

## Test Setelah Setup

1. Buka: `https://adityamutiara.vercel.app/?to=keluarga-santoso`
2. Kirim ucapan
3. Buka tab baru: `https://adityamutiara.vercel.app/?to=keluarga-siti`
4. Ucapan dari guest pertama seharusnya muncul!

## Kenapa JSONBin?

- ✅ **Gratis** (100,000 requests/month - cukup untuk ribuan guest)
- ✅ **Setup cepat** (2 menit)
- ✅ **Tidak perlu backend**
- ✅ **Real-time sync** antar guest
- ✅ **Bisa download** semua ucapan kapan saja

## Butuh Bantuan?

Jika masih error setelah setup JSONBin, cek:
1. Bin ID sudah benar?
2. Sudah push & deploy ulang?
3. Cek browser console (F12) untuk error message

Atau hubungi saya untuk bantuan lebih lanjut!
