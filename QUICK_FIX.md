# Quick Fix untuk Error 404 API

## Masalah
API endpoint `/api/greetings` return 404 Not Found

## Penyebab
Vercel tidak mendeteksi API routes dengan benar

## Solusi

### 1. Push code terbaru
```bash
git add .
git commit -m "Fix API routes for Vercel"
git push
```

### 2. Test API endpoint
Setelah deploy selesai (1-2 menit), test dulu API-nya:

Buka di browser:
```
https://adityamutiara.vercel.app/api/test
```

Seharusnya muncul:
```json
{"message":"API is working!"}
```

Kalau berhasil, berarti API sudah jalan! ✅

### 3. Test greetings endpoint
Buka:
```
https://adityamutiara.vercel.app/api/greetings
```

Seharusnya muncul:
```json
[]
```

Kalau berhasil, coba kirim ucapan lagi!

## Jika Masih Error 404

Kemungkinan Vercel tidak mendeteksi folder `api/`. Coba:

### Opsi A: Cek di Vercel Dashboard
1. Buka Vercel Dashboard
2. Pilih project **adityamutiara**
3. Klik tab **"Functions"**
4. Lihat apakah ada function `greetings` dan `test`
5. Kalau tidak ada, berarti API tidak ter-deploy

### Opsi B: Manual redeploy
1. Di Vercel Dashboard → **Deployments**
2. Klik deployment terakhir → titik tiga (...) → **"Redeploy"**
3. Tunggu selesai
4. Test lagi

### Opsi C: Cek Logs
1. Di Vercel Dashboard → **Deployments**
2. Klik deployment terakhir
3. Klik tab **"Build Logs"**
4. Cari error message
5. Screenshot dan kirim ke saya

## Alternatif: Pakai Supabase (Lebih Mudah)

Kalau Vercel API masih bermasalah, kita bisa pakai Supabase:
- ✅ Setup 5 menit
- ✅ Gratis selamanya
- ✅ Real-time database
- ✅ Tidak perlu Serverless Function

Mau coba Supabase?
