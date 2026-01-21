# Panduan Deploy ke Vercel

## ⚠️ PENTING: Setup Database Dulu!

Sebelum deploy, Anda perlu setup database untuk ucapan. Ikuti panduan di **`JSONBIN_SETUP.md`** (hanya 2 menit!).

Atau biarkan default untuk pakai localStorage (ucapan tidak sync antar guest).

---

1. **Serverless API** di `api/greetings.js`
   - Endpoint untuk save & load ucapan
   - Data tersimpan di `data/greetings.json`

2. **Frontend sudah diupdate**
   - Tidak pakai Firebase lagi
   - Pakai API lokal (Vercel Serverless Function)
   - Auto-refresh setiap 5 detik untuk lihat ucapan baru

3. **File konfigurasi Vercel** (`vercel.json`)

## 🚀 Cara Deploy ke Vercel (GRATIS)

### Step 1: Buat Akun Vercel

1. Buka [vercel.com](https://vercel.com)
2. Klik "Sign Up" 
3. Login dengan GitHub (recommended) atau email

### Step 2: Push Code ke GitHub

```bash
# Inisialisasi git (jika belum)
git init

# Add semua file
git add .

# Commit
git commit -m "Wedding invitation with serverless API"

# Buat repository di GitHub, lalu:
git remote add origin https://github.com/USERNAME/REPO-NAME.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy di Vercel

**Opsi A: Via Website (Paling Mudah)**

1. Login ke [vercel.com](https://vercel.com)
2. Klik "Add New Project"
3. Import repository GitHub Anda
4. Vercel akan auto-detect Vite project
5. Klik "Deploy"
6. Tunggu 1-2 menit
7. Done! Anda akan dapat URL seperti: `https://your-project.vercel.app`

**Opsi B: Via CLI**

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Follow prompts, pilih default untuk semua
```

### Step 4: Test

1. Buka URL Vercel Anda
2. Buka dengan link guest: `https://your-project.vercel.app?to=keluarga-wijaya`
3. Kirim ucapan
4. Buka di tab baru dengan guest lain: `?to=keluarga-siti`
5. Ucapan dari guest pertama seharusnya muncul!

## 📝 Update Konten

Setiap kali Anda push ke GitHub, Vercel akan auto-deploy ulang:

```bash
# Edit file (misalnya data.js untuk ubah tanggal/lokasi)
# Lalu:
git add .
git commit -m "Update wedding details"
git push
```

Vercel akan auto-deploy dalam 1-2 menit!

## 🎯 Custom Domain (Opsional)

1. Di Vercel Dashboard, pilih project Anda
2. Klik "Settings" → "Domains"
3. Tambahkan domain Anda (misalnya: `wedding-aditya-adinda.com`)
4. Follow instruksi untuk update DNS

## 📊 Lihat Ucapan yang Masuk

Ucapan tersimpan di file `data/greetings.json`. Untuk download:

**Opsi 1: Via GitHub**
- Buka repository GitHub Anda
- Navigate ke `data/greetings.json`
- Klik "Raw" → Save file

**Opsi 2: Via Vercel Dashboard**
- Buka Vercel Dashboard
- Pilih project → "Storage" → Download `greetings.json`

**Opsi 3: Via API**
- Buka: `https://your-project.vercel.app/api/greetings`
- Copy JSON yang muncul
- Paste ke Excel atau text editor

## 🔧 Troubleshooting

### Ucapan tidak tersimpan
- Cek Vercel logs: Dashboard → Project → "Logs"
- Pastikan folder `data/` ada di repository

### Error 404 di API
- Pastikan file `api/greetings.js` ada
- Pastikan `vercel.json` sudah di-commit

### Ucapan tidak muncul real-time
- Refresh manual (F5)
- Auto-refresh setiap 5 detik sudah diaktifkan

## 💰 Biaya

**GRATIS!** Vercel free tier include:
- ✅ Unlimited deployments
- ✅ 100GB bandwidth/month (cukup untuk ribuan guest)
- ✅ Serverless Functions
- ✅ Auto SSL (HTTPS)
- ✅ Custom domain

## 🎉 Selesai!

Sekarang undangan Anda sudah online dengan fitur ucapan yang berfungsi penuh, tanpa perlu setup Firebase!

Link undangan Anda:
- Umum: `https://your-project.vercel.app`
- Personalized: `https://your-project.vercel.app?to=nama-tamu`

Selamat! 🎊
