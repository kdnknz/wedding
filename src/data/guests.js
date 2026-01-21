// Daftar tamu undangan
// Format: { name: "Nama Tamu", slug: "nama-tamu" }
// Link akan menjadi: https://your-domain.com/?to=nama-tamu

export const guestList = [
  { name: "Bapak/Ibu Keluarga Santoso", slug: "keluarga-santoso" },
  { name: "Bapak/Ibu Keluarga Wijaya", slug: "keluarga-wijaya" },
  { name: "Bapak/Ibu Keluarga Rahman", slug: "keluarga-rahman" },
  { name: "Saudara Ahmad & Keluarga", slug: "ahmad-keluarga" },
  { name: "Saudari Siti & Keluarga", slug: "siti-keluarga" },
  { name: "Bapak/Ibu Keluarga Kusuma", slug: "keluarga-kusuma" },
  { name: "Teman-teman Kantor", slug: "teman-kantor" },
  { name: "Sahabat Kampus", slug: "sahabat-kampus" },
  // Tambahkan tamu lainnya di sini
]

// Fungsi untuk generate link undangan
export function generateInvitationLink(slug, baseUrl = window.location.origin) {
  return `${baseUrl}/?to=${slug}`
}

// Fungsi untuk mendapatkan nama tamu dari slug
export function getGuestName(slug) {
  const guest = guestList.find(g => g.slug === slug)
  return guest ? guest.name : null
}

// Fungsi untuk mendapatkan semua link undangan
export function getAllInvitationLinks(baseUrl = "https://your-domain.com") {
  return guestList.map(guest => ({
    name: guest.name,
    slug: guest.slug,
    link: generateInvitationLink(guest.slug, baseUrl)
  }))
}
