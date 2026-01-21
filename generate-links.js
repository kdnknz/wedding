// Script untuk generate daftar link undangan
// Jalankan dengan: node generate-links.js

// Import daftar tamu
const guestList = [
  { name: "Bapak/Ibu Keluarga Santoso", slug: "keluarga-santoso" },
  { name: "Bapak/Ibu Keluarga Wijaya", slug: "keluarga-wijaya" },
  { name: "Bapak/Ibu Keluarga Rahman", slug: "keluarga-rahman" },
  { name: "Saudara Ahmad & Keluarga", slug: "ahmad-keluarga" },
  { name: "Saudari Siti & Keluarga", slug: "siti-keluarga" },
  { name: "Bapak/Ibu Keluarga Kusuma", slug: "keluarga-kusuma" },
  { name: "Teman-teman Kantor", slug: "teman-kantor" },
  { name: "Sahabat Kampus", slug: "sahabat-kampus" },
]

// Ganti dengan domain website Anda
const BASE_URL = "https://your-domain.com"

console.log("=".repeat(80))
console.log("DAFTAR LINK UNDANGAN PERNIKAHAN")
console.log("=".repeat(80))
console.log("")

console.log(`Total Tamu: ${guestList.length}`)
console.log("")
console.log("DAFTAR LINK:")
console.log("-".repeat(80))

guestList.forEach((guest, index) => {
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

console.log(`Assalamualaikum ${exampleGuest.name},

Dengan penuh kebahagiaan, kami mengundang Bapak/Ibu untuk hadir di acara pernikahan kami.

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
console.log("Nama,Slug,Link")
guestList.forEach(guest => {
  const link = `${BASE_URL}/?to=${guest.slug}`
  console.log(`"${guest.name}","${guest.slug}","${link}"`)
})

console.log("")
console.log("=".repeat(80))
console.log("SELESAI!")
console.log("=".repeat(80))
