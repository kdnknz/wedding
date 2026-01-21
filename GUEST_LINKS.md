# Daftar Link Undangan untuk Tamu

File ini berisi daftar lengkap link undangan yang dipersonalisasi untuk setiap tamu.

## Cara Menggunakan

1. **Edit Daftar Tamu**: Buka file `src/data/guests.js` untuk menambah/mengedit daftar tamu
2. **Generate Link**: Setiap tamu memiliki link unik dengan format: `https://your-domain.com/?to=slug-tamu`
3. **Kirim Link**: Kirim link yang sesuai kepada masing-masing tamu via WhatsApp, Email, atau media lainnya

## Format Link

```
https://your-domain.com/?to=slug-tamu
```

**Contoh:**
- `https://your-domain.com/?to=keluarga-santoso` → Akan menampilkan "Bapak/Ibu Keluarga Santoso"
- `https://your-domain.com/?to=ahmad-keluarga` → Akan menampilkan "Saudara Ahmad & Keluarga"

## Daftar Link Undangan

> **PENTING**: Ganti `https://your-domain.com` dengan domain website undangan Anda yang sebenarnya!

### Keluarga

| Nama Tamu | Link Undangan |
|-----------|---------------|
| Bapak/Ibu Keluarga Santoso | `https://your-domain.com/?to=keluarga-santoso` |
| Bapak/Ibu Keluarga Wijaya | `https://your-domain.com/?to=keluarga-wijaya` |
| Bapak/Ibu Keluarga Rahman | `https://your-domain.com/?to=keluarga-rahman` |
| Bapak/Ibu Keluarga Kusuma | `https://your-domain.com/?to=keluarga-kusuma` |

### Teman & Sahabat

| Nama Tamu | Link Undangan |
|-----------|---------------|
| Saudara Ahmad & Keluarga | `https://your-domain.com/?to=ahmad-keluarga` |
| Saudari Siti & Keluarga | `https://your-domain.com/?to=siti-keluarga` |
| Teman-teman Kantor | `https://your-domain.com/?to=teman-kantor` |
| Sahabat Kampus | `https://your-domain.com/?to=sahabat-kampus` |

---

## Cara Menambah Tamu Baru

1. Buka file `src/data/guests.js`
2. Tambahkan entry baru di array `guestList`:

```javascript
{ name: "Nama Lengkap Tamu", slug: "nama-slug" }
```

3. Slug harus:
   - Huruf kecil semua
   - Tanpa spasi (gunakan tanda `-`)
   - Unik (tidak boleh sama dengan tamu lain)
   - Contoh: "Bapak Budi Santoso" → slug: "bapak-budi-santoso"

4. Setelah menambah tamu, link akan otomatis tersedia di format:
   ```
   https://your-domain.com/?to=nama-slug
   ```

## Tips Pengiriman Link

### Via WhatsApp
```
Assalamualaikum Bapak/Ibu Keluarga Santoso,

Dengan penuh kebahagiaan, kami mengundang Bapak/Ibu untuk hadir di acara pernikahan kami.

Silakan buka undangan digital kami di:
https://your-domain.com/?to=keluarga-santoso

Terima kasih atas doa dan kehadiran Bapak/Ibu.

Wassalamualaikum,
Putri & Adi
```

### Via Email
**Subject**: Undangan Pernikahan Putri & Adi

**Body**:
```
Kepada Yth.
Bapak/Ibu Keluarga Santoso
Di Tempat

Assalamualaikum Wr. Wb.

Dengan memohon rahmat dan ridho Allah SWT, kami mengundang Bapak/Ibu untuk hadir di acara pernikahan kami.

Silakan buka undangan digital kami dengan klik link berikut:
https://your-domain.com/?to=keluarga-santoso

Merupakan suatu kehormatan bagi kami apabila Bapak/Ibu berkenan hadir untuk memberikan doa restu.

Terima kasih.

Wassalamualaikum Wr. Wb.

Putri & Adi
```

## Generate Link Secara Programatik

Jika Anda ingin generate semua link sekaligus, buka browser console di website undangan dan jalankan:

```javascript
import { getAllInvitationLinks } from './src/data/guests.js'

// Generate semua link dengan domain Anda
const links = getAllInvitationLinks('https://your-domain.com')
console.table(links)

// Atau copy sebagai JSON
console.log(JSON.stringify(links, null, 2))
```

## Testing

Untuk testing di local development:
- `http://localhost:5173/?to=keluarga-santoso`
- `http://localhost:5173/?to=ahmad-keluarga`

Buka link tersebut di browser untuk melihat nama tamu muncul di undangan.

---

**Catatan**: Pastikan untuk mengganti semua `https://your-domain.com` dengan domain website undangan Anda yang sebenarnya sebelum mengirim ke tamu!
