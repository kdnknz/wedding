# Setup Vercel Blob Storage (PALING MUDAH!)

## ✅ Yang Sudah Saya Lakukan:

1. Install `@vercel/blob` package
2. Update API untuk pakai Vercel Blob Storage
3. Blob akan menyimpan file `greetings.json`

## 🚀 Yang Perlu Anda Lakukan (2 LANGKAH SAJA!):

### Step 1: Push Code Terbaru

```bash
git add .
git commit -m "Use Vercel Blob Storage"
git push
```

### Step 2: Enable Blob Storage di Vercel

1. Buka [Vercel Dashboard](https://vercel.com/dashboard)
2. Pilih project **adityamutiara**
3. Klik tab **"Storage"**
4. Klik **"Create Database"**
5. Pilih **"Blob"** (Fast object storage) - yang ada icon kuning
6. Klik **"Continue"**
7. Beri nama: `wedding-storage` (atau nama apapun)
8. Klik **"Create"**
9. Klik **"Connect to Project"**
10. Pilih project **adityamutiara**
11. Klik **"Connect"**

### Step 3: Tunggu Auto-Redeploy

Vercel akan otomatis redeploy setelah Blob connected (1-2 menit).

### Step 4: TEST! 🎉

1. Buka: `https://adityamutiara.vercel.app/?to=keluarga-santoso`
2. Kirim ucapan
3. Seharusnya muncul alert: **"✅ Ucapan berhasil dikirim!"**
4. Buka tab baru: `https://adityamutiara.vercel.app/?to=keluarga-siti`
5. Ucapan dari guest pertama seharusnya muncul!

## 📊 Lihat Ucapan yang Masuk

### Via Vercel Dashboard:
1. Buka Vercel Dashboard
2. Pilih project **adityamutiara**
3. Klik tab **"Storage"**
4. Klik storage **wedding-storage**
5. Klik tab **"Browse"**
6. Lihat file: `greetings.json`
7. Klik untuk download atau lihat isinya

### Via API:
Buka di browser:
```
https://adityamutiara.vercel.app/api/greetings
```

## 💰 Biaya

**100% GRATIS!** Vercel Blob free tier:
- ✅ 500 MB storage
- ✅ 5,000 reads/month
- ✅ 1,000 writes/month
- ✅ Unlimited files

Untuk wedding dengan ~200 guest:
- 200 guest × 5 writes = 1,000 writes ✅
- 200 guest × 10 reads = 2,000 reads ✅
- File size: ~50KB (ribuan ucapan) ✅

Semua masih dalam limit gratis!

## 🔧 Troubleshooting

### Error: "BLOB_READ_WRITE_TOKEN is not defined"
- Pastikan sudah connect Blob ke project di Vercel Dashboard
- Tunggu 1-2 menit untuk auto-redeploy
- Atau manual redeploy: Dashboard → Deployments → Redeploy

### Error: "Failed to add greeting"
- Cek Vercel logs: Dashboard → Project → "Logs"
- Pastikan Blob sudah connected

### Ucapan tidak muncul
- Tunggu 10 detik (auto-refresh)
- Atau refresh manual (F5)
- Cek browser console (F12) untuk error

## ✨ Keuntungan Vercel Blob

- ✅ **Built-in Vercel** (tidak perlu service eksternal)
- ✅ **Gratis selamanya** (free tier generous)
- ✅ **Sangat cepat** (CDN global)
- ✅ **File-based** (mudah download & backup)
- ✅ **Real-time sync** antar guest
- ✅ **Simple setup** (paling mudah!)

## 🎉 Selesai!

Setelah setup, undangan Anda akan punya database ucapan yang:
- ✅ Real-time sync ke semua guest
- ✅ Tersimpan permanen di Vercel Blob
- ✅ Bisa download file JSON kapan saja
- ✅ Gratis selamanya!

**Ini solusi PALING MUDAH dan PALING SIMPLE! 🎊**
