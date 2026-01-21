# Setup Vercel KV Database (GRATIS & MUDAH!)

## ✅ Yang Sudah Saya Lakukan:

1. Install `@vercel/kv` package
2. Update API untuk pakai Vercel KV
3. Update frontend untuk connect ke API

## 🚀 Yang Perlu Anda Lakukan (3 LANGKAH MUDAH):

### Step 1: Push Code Terbaru ke GitHub

```bash
git add .
git commit -m "Add Vercel KV for greetings"
git push
```

### Step 2: Enable Vercel KV di Dashboard

1. Buka [Vercel Dashboard](https://vercel.com/dashboard)
2. Pilih project **adityamutiara**
3. Klik tab **"Storage"** (di menu atas)
4. Klik **"Create Database"**
5. Pilih **"KV"** (Key-Value Database)
6. Klik **"Continue"**
7. Beri nama: `wedding-greetings` (atau nama apapun)
8. Pilih region: **Singapore** atau **Tokyo** (terdekat dengan Indonesia)
9. Klik **"Create"**
10. Klik **"Connect to Project"**
11. Pilih project **adityamutiara**
12. Klik **"Connect"**

### Step 3: Redeploy Project

Setelah KV connected, Vercel akan auto-redeploy. Atau manual:

1. Di Vercel Dashboard, pilih project **adityamutiara**
2. Klik tab **"Deployments"**
3. Klik titik tiga (...) di deployment terakhir
4. Klik **"Redeploy"**

**ATAU** push dummy commit:

```bash
git commit --allow-empty -m "Trigger redeploy"
git push
```

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
4. Klik database **wedding-greetings**
5. Klik tab **"Data"**
6. Lihat key: `wedding_greetings`
7. Klik untuk lihat semua ucapan dalam format JSON

### Via API:
Buka di browser:
```
https://adityamutiara.vercel.app/api/greetings
```

## 💰 Biaya

**100% GRATIS!** Vercel KV free tier:
- ✅ 256 MB storage (cukup untuk ribuan ucapan)
- ✅ 30,000 commands/month
- ✅ Unlimited databases
- ✅ Auto-backup

Untuk wedding dengan ~200 guest:
- 200 guest × 10 requests = 2,000 requests
- Masih jauh dari limit 30,000!

## 🔧 Troubleshooting

### Error: "KV_REST_API_URL is not defined"
- Pastikan sudah connect KV ke project di Vercel Dashboard
- Redeploy project setelah connect

### Error: "Failed to add greeting"
- Cek Vercel logs: Dashboard → Project → "Logs"
- Pastikan KV sudah connected

### Ucapan tidak muncul
- Tunggu 10 detik (auto-refresh)
- Atau refresh manual (F5)
- Cek browser console (F12) untuk error

## ✨ Keuntungan Vercel KV

- ✅ **Built-in Vercel** (tidak perlu service eksternal)
- ✅ **Gratis selamanya** (free tier generous)
- ✅ **Sangat cepat** (low latency)
- ✅ **Auto-backup** (data aman)
- ✅ **Real-time sync** antar guest
- ✅ **Mudah lihat data** via dashboard

## 🎉 Selesai!

Setelah setup, undangan Anda akan punya database ucapan yang:
- ✅ Real-time sync ke semua guest
- ✅ Tersimpan permanen di Vercel
- ✅ Bisa diakses & download kapan saja
- ✅ Gratis selamanya!

**Selamat! Undangan Anda sudah production-ready! 🎊**
