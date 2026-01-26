// Daftar tamu undangan
// Format: { name: "Nama Tamu", slug: "nama-tamu", session: 1 atau 2 }
// Link akan menjadi: https://your-domain.com/?to=nama-tamu
// Session 1: 09:00 - 11:00 WIB
// Session 2: 12:00 - 15:00 WIB

export const guestList = [
  { name: "Bapak/Ibu Keluarga Santoso", slug: "keluarga-santoso", session: 1 },
  { name: "Bapak/Ibu Keluarga Wijaya", slug: "keluarga-wijaya", session: 1 },
  { name: "Bapak/Ibu Keluarga Rahman", slug: "keluarga-rahman", session: 1 },
  { name: "Saudara Ahmad & Keluarga", slug: "ahmad-keluarga", session: 1 },
  { name: "Saudari Siti & Keluarga", slug: "siti-keluarga", session: 2 },
  { name: "Bapak/Ibu Keluarga Kusuma", slug: "keluarga-kusuma", session: 2 },
  { name: "Teman-teman Kantor", slug: "teman-kantor", session: 2 },
  { name: "Sahabat Kampus", slug: "sahabat-kampus", session: 2 },
  { name: "Dewi", slug: "dewi", session: 1 },
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

// Fungsi untuk mendapatkan data lengkap tamu dari slug
export function getGuestData(slug) {
  return guestList.find(g => g.slug === slug) || null
}

// Fungsi untuk mendapatkan sesi tamu dari slug
export function getGuestSession(slug) {
  const guest = guestList.find(g => g.slug === slug)
  return guest ? guest.session : null
}

// Fungsi untuk mendapatkan semua link undangan
export function getAllInvitationLinks(baseUrl = "https://your-domain.com") {
  return guestList.map(guest => ({
    name: guest.name,
    slug: guest.slug,
    link: generateInvitationLink(guest.slug, baseUrl)
  }))
}
