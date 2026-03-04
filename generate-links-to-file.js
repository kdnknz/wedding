// Script untuk generate daftar link undangan dan simpan ke file
// Jalankan dengan: node generate-links-to-file.js

import { guestList } from './src/data/guests.js'
import fs from 'fs'

const BASE_URL = "https://adityamutiara.vercel.app"

// Pisahkan berdasarkan sesi
const session1 = guestList.filter(g => g.session === 1)
const session2 = guestList.filter(g => g.session === 2)

// ========== GENERATE TXT FILE ==========
let txtContent = ""
txtContent += "=".repeat(80) + "\n"
txtContent += "DAFTAR LINK UNDANGAN PERNIKAHAN\n"
txtContent += "Adinda & Aditya\n"
txtContent += "=".repeat(80) + "\n\n"

txtContent += `Total Tamu: ${guestList.length}\n`
txtContent += `Sesi 1: ${session1.length} tamu\n`
txtContent += `Sesi 2: ${session2.length} tamu\n\n`

txtContent += "SESI 1 (09.00 - 11.00 WIB):\n"
txtContent += "-".repeat(80) + "\n"
session1.forEach((guest, index) => {
  const link = `${BASE_URL}/?to=${guest.slug}`
  txtContent += `${index + 1}. ${guest.name}\n`
  txtContent += `   ${link}\n\n`
})

txtContent += "\n"
txtContent += "SESI 2 (12.00 - 15.00 WIB):\n"
txtContent += "-".repeat(80) + "\n"
session2.forEach((guest, index) => {
  const link = `${BASE_URL}/?to=${guest.slug}`
  txtContent += `${index + 1}. ${guest.name}\n`
  txtContent += `   ${link}\n\n`
})

txtContent += "\n" + "=".repeat(80) + "\n"
txtContent += "FORMAT UNTUK WHATSAPP:\n"
txtContent += "-".repeat(80) + "\n\n"

txtContent += `Assalamualaikum [NAMA TAMU],

Dengan penuh kebahagiaan, kami mengundang Bapak/Ibu untuk hadir di acara pernikahan kami.

📅 Sabtu, 24 April 2026
⏰ Sesi [1/2]: [JAM]
📍 Saung Kita Cikupa Pandeglang

Silakan buka undangan digital kami di:
[LINK]

Terima kasih atas doa dan kehadiran Bapak/Ibu.

Wassalamualaikum,
Adinda & Aditya\n\n`

// Simpan TXT
fs.writeFileSync('daftar-link-undangan.txt', txtContent, 'utf8')
console.log('✅ File TXT berhasil dibuat: daftar-link-undangan.txt')

// ========== GENERATE CSV FILE ==========
let csvContent = "No,Nama,Slug,Sesi,Jam,Link\n"

guestList.forEach((guest, index) => {
  const link = `${BASE_URL}/?to=${guest.slug}`
  const jam = guest.session === 1 ? "09.00 - 11.00 WIB" : "12.00 - 15.00 WIB"
  csvContent += `${index + 1},"${guest.name}","${guest.slug}",${guest.session},"${jam}","${link}"\n`
})

// Simpan CSV
fs.writeFileSync('daftar-link-undangan.csv', csvContent, 'utf8')
console.log('✅ File CSV berhasil dibuat: daftar-link-undangan.csv')

// ========== GENERATE WHATSAPP TEMPLATE PER TAMU ==========
let waContent = ""
waContent += "TEMPLATE WHATSAPP PER TAMU\n"
waContent += "=".repeat(80) + "\n\n"

guestList.forEach((guest, index) => {
  const link = `${BASE_URL}/?to=${guest.slug}`
  const jam = guest.session === 1 ? "09.00 - 11.00 WIB" : "12.00 - 15.00 WIB"
  
  waContent += `${index + 1}. ${guest.name}\n`
  waContent += "-".repeat(80) + "\n"
  waContent += `Assalamualaikum ${guest.name},

Dengan penuh kebahagiaan, kami mengundang Bapak/Ibu untuk hadir di acara pernikahan kami.

📅 Sabtu, 24 April 2026
⏰ Sesi ${guest.session}: ${jam}
📍 Saung Kita Cikupa Pandeglang

Silakan buka undangan digital kami di:
${link}

Terima kasih atas doa dan kehadiran Bapak/Ibu.

Wassalamualaikum,
Adinda & Aditya\n\n`
  waContent += "=".repeat(80) + "\n\n"
})

// Simpan WhatsApp templates
fs.writeFileSync('template-whatsapp-per-tamu.txt', waContent, 'utf8')
console.log('✅ File WhatsApp template berhasil dibuat: template-whatsapp-per-tamu.txt')

console.log('\n🎉 Semua file berhasil dibuat!')
console.log('\nFile yang dibuat:')
console.log('1. daftar-link-undangan.txt - Daftar lengkap semua link')
console.log('2. daftar-link-undangan.csv - Format CSV untuk Excel/Google Sheets')
console.log('3. template-whatsapp-per-tamu.txt - Template WA untuk setiap tamu')
