// Script untuk generate daftar link undangan
// Jalankan dengan: node generate-links.js

// Import daftar tamu dari guests.js
import { guestList } from './src/data/guests.js'

// Ganti dengan domain website Anda
const BASE_URL = "https://adityamutiara.vercel.app"

console.log("=".repeat(80))
console.log("DAFTAR LINK UNDANGAN PERNIKAHAN")
console.log("=".repeat(80))
console.log("")

console.log(`Total Tamu: ${guestList.length}`)
console.log("")

// Pisahkan berdasarkan sesi
const session1 = guestList.filter(g => g.session === 1)
const session2 = guestList.filter(g => g.session === 2)

console.log("SESI 1 (09.00 - 11.00 WIB):")
console.log("-".repeat(80))
session1.forEach((guest, index) => {
  const link = `${BASE_URL}/?to=${guest.slug}`
  console.log(`${index + 1}. ${guest.name}`)
  console.log(`   ${link}`)
  console.log("")
})

console.log("")
console.log("SESI 2 (12.00 - 15.00 WIB):")
console.log("-".repeat(80))
session2.forEach((guest, index) => {
  const link = `${BASE_URL}/?to=${guest.slug}`
  console.log(`${index + 1}. ${guest.name}`)
  console.log(`   ${link}`)
  console.log("")
})

console.log("=".repeat(80))
console.log("")

// Generate format untuk WhatsApp
console.log("FORMAT UNTUK WHATSAPP:")
console.log("-".repeat(80))
console.log("")

const exampleGuest = guestList[0]
const exampleLink = `${BASE_URL}/?to=${exampleGuest.slug}`
const exampleSession = exampleGuest.session === 1 ? "09.00 - 11.00 WIB" : "12.00 - 15.00 WIB"

console.log(`Assalamualaikum ${exampleGuest.name},

Dengan penuh kebahagiaan, kami mengundang Bapak/Ibu untuk hadir di acara pernikahan kami.

📅 Sabtu, 24 April 2026
⏰ Sesi ${exampleGuest.session}: ${exampleSession}
📍 Saung Kita Cikupa Pandeglang

Silakan buka undangan digital kami di:
${exampleLink}

Terima kasih atas doa dan kehadiran Bapak/Ibu.

Wassalamualaikum,
Adinda & Aditya`)

console.log("")
console.log("=".repeat(80))

// Generate CSV format
console.log("")
console.log("FORMAT CSV (untuk import ke Excel/Google Sheets):")
console.log("-".repeat(80))
console.log("Nama,Slug,Sesi,Jam,Link")
guestList.forEach(guest => {
  const link = `${BASE_URL}/?to=${guest.slug}`
  const jam = guest.session === 1 ? "09.00 - 11.00 WIB" : "12.00 - 15.00 WIB"
  console.log(`"${guest.name}","${guest.slug}",${guest.session},"${jam}","${link}"`)
})

console.log("")
console.log("=".repeat(80))
console.log("SELESAI!")
console.log("=".repeat(80))
