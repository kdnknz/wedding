// Daftar tamu undangan
// Format: { name: "Nama Tamu", slug: "nama-tamu", session: 1 atau 2 }
// Link akan menjadi: https://aditya-adinda.vercel.app/?to=nama-tamu
// Session 1: 09:00 - 11:00 WIB
// Session 2: 12:00 - 15:00 WIB

export const guestList = [
  // Session 1
  { name: "Bpk Hadi Mulyadi R. & Keluarga", slug: "keluarga-hadi-mulyadi", session: 1 },
  { name: "Bpk Satir Wuragil & Keluarga", slug: "keluarga-satir-wuragil", session: 1 },
  { name: "Bpk Kusnandar & Keluarga", slug: "keluarga-kusnandar", session: 1 },
  { name: "Bpk Awang Setiawan & Keluarga", slug: "keluarga-awang-setiawan", session: 1 },
  { name: "Bpk Endang Suhendar & Keluarga", slug: "keluarga-endang-suhendar", session: 1 },
  { name: "Bpk Rahmatullah & Keluarga", slug: "keluarga-rahmatullah", session: 1 },
  { name: "Bpk Ardi Maulana R. & Keluarga", slug: "keluarga-ardi-maulana", session: 1 },
  { name: "Bpk Yusuf Mulyana R. & Keluarga", slug: "keluarga-yusuf-mulyana", session: 1 },
  { name: "Bpk Ngestu Weibisono & Istri", slug: "ngestu-weibisono", session: 1 },
  { name: "Bpk Brian Abimanyu & Istri", slug: "brian-abimanyu", session: 1 },
  { name: "Bpk Wawan Setiawan", slug: "wawan-setiawan", session: 1 },
  { name: "Keluarga Besar H. Eli Agus", slug: "keluarga-h-eli-agus", session: 1 },
  { name: "H. Asep Rokhanda", slug: "h-asep-rokhanda", session: 1 },
  { name: "Christy Natalia Astuti & Suami", slug: "christy-natalia", session: 1 },
  { name: "Dedi Suryadi", slug: "dedi-suryadi", session: 1 },
  { name: "Kosasih", slug: "kosasih", session: 1 },
  { name: "Yati Suryati", slug: "yati-suryati", session: 1 },
  { name: "H. Arief Jauhari", slug: "h-arief-jauhari", session: 1 },
  { name: "Enceng Tiswara Jatnika", slug: "enceng-tiswara", session: 1 },
  { name: "Hedi Saprudin", slug: "hedi-saprudin", session: 1 },
  { name: "Husnadi", slug: "husnadi", session: 1 },
  { name: "Agustian Gunawan", slug: "agustian-gunawan", session: 1 },
  { name: "Hj. Ade Nuryati & Suami", slug: "hj-ade-nuryati", session: 1 },
  { name: "Hj. Ani Arta", slug: "hj-ani-arta", session: 1 },
  { name: "H. Budiarto", slug: "h-budiarto", session: 1 },
  { name: "Tjipto Suroso", slug: "tjipto-suroso", session: 1 },
  { name: "Dadan Darmawan", slug: "dadan-darmawan", session: 1 },
  { name: "Dadan Johari", slug: "dadan-johari", session: 1 },
  { name: "Eko Herwanto", slug: "eko-herwanto", session: 1 },
  { name: "Enang", slug: "enang", session: 1 },
  { name: "Sukirman", slug: "sukirman", session: 1 },
  { name: "Kurnianingsih", slug: "kurnianingsih", session: 1 },
  { name: "Mamad Yusuf", slug: "mamad-yusuf", session: 1 },
  { name: "Maman karmita", slug: "maman-karmita", session: 1 },
  { name: "R. Dudi Romdiansah", slug: "r-dudi-romdiansah", session: 1 },
  { name: "M. Soleh", slug: "m-soleh", session: 1 },
  { name: "Suanda", slug: "suanda", session: 1 },
  { name: "M. Syafiq", slug: "m-syafiq", session: 1 },
  { name: "H. Lukman Hakim", slug: "h-lukman-hakim", session: 1 },
  { name: "Bpk Resmani Hidayat", slug: "resmani-hidayat", session: 1 },
  { name: "Bpk Nandang Chandra Hasan", slug: "nandang-chandra", session: 1 },
  { name: "Bpk Dayat Hidayat", slug: "dayat-hidayat", session: 1 },
  { name: "Bpk Dadan Suhendar", slug: "dadan-suhendar", session: 1 },
  { name: "Ibu Ugi Rogayah", slug: "ugi-rogayah", session: 1 },
  { name: "Ibu Ina Umairah", slug: "ina-umairah", session: 1 },
  { name: "Ibu Reni Triana", slug: "reni-triana", session: 1 },
  { name: "Ibu Sri Heryati", slug: "sri-heryati", session: 1 },
  { name: "Bpk H. Hamim Sutawijaya", slug: "h-hamim-sutawijaya", session: 1 },
  { name: "Bpk Yudhi Deni Mulyadhi", slug: "yudhi-deni", session: 1 },
  { name: "Bpk Ucu Jamaludin", slug: "ucu-jamaludin", session: 1 },
  { name: "Ibu Anne Ratna Kantjana", slug: "anne-ratna", session: 1 },
  { name: "Ibu Sagita Wulandari", slug: "sagita-wulandari", session: 1 },
  { name: "Kamad & Dewan Guru MTs At-Taqwa", slug: "mts-attaqwa", session: 1 },
  { name: "Kamad & Dewan Guru MA At-Taqwa", slug: "ma-attaqwa", session: 1 },
  { name: "Dewan Guru SMPN 6 Cimanggu", slug: "smpn6-cimanggu", session: 1 },
  { name: "Dewan Guru SMPN 3 Cigeulis", slug: "smpn3-cigeulis", session: 1 },
  { name: "Bapak H. Didin Pahrudin, S.Sos., MM.", slug: "h-didin-pahrudin", session: 1 },
  { name: "Bapak Ading Suhendi, S.Pd.", slug: "ading-suhendi", session: 1 },
  { name: "Bapak Sukma & Istri", slug: "sukma", session: 1 },
  { name: "Bapak Iyon & Istri", slug: "iyon", session: 1 },
  { name: "Bapak Sugeng & Istri", slug: "sugeng", session: 1 },
  { name: "Bapak Riki & Istri", slug: "riki", session: 1 },
  { name: "Bapak Feri & Istri", slug: "feri", session: 1 },
  { name: "Bapak Ahmad Suherlan & Istri", slug: "ahmad-suherlan", session: 1 },
  { name: "Bapak Iwan & Istri", slug: "iwan", session: 1 },
  { name: "Bapak Lambang & Istri", slug: "lambang", session: 1 },
  { name: "Bapak Jatus & Istri", slug: "jatus", session: 1 },
  { name: "Bapak Zulkarnain & Istri", slug: "zulkarnain", session: 1 },
  { name: "Bapak Agus Irfan & Istri", slug: "agus-irfan", session: 1 },
  { name: "Bu Meli & Suami", slug: "bu-meli", session: 1 },
  { name: "Bapak Oji & Istri", slug: "oji", session: 1 },
  { name: "Bapak Agus & Istri", slug: "agus", session: 1 },
  
  // Session 2
  { name: "Om Ivan Gunawan & Keluarga", slug: "keluarga-ivan-gunawan", session: 2 },
  { name: "Om Taufik Hidayat & Keluarga", slug: "keluarga-taufik-hidayat", session: 2 },
  { name: "Bibi Resvy Yulianti", slug: "resvy-yulianti", session: 2 },
  { name: "Om Hari & Keluarga", slug: "keluarga-om-hari", session: 2 },
  { name: "Umi Siti Maryam", slug: "siti-maryam", session: 2 },
  { name: "Abeh H. Mamat Rahmat & Istri", slug: "h-mamat-rahmat", session: 2 },
  { name: "Nenek Eem & Keluarga", slug: "keluarga-nenek-eem", session: 2 },
  { name: "Nenek Imas & Keluarga", slug: "keluarga-nenek-imas", session: 2 },
  { name: "Nenek Juju & Keluarga", slug: "keluarga-nenek-juju", session: 2 },
  { name: "Bapak Udi", slug: "udi", session: 2 },
  { name: "Erin & Suami", slug: "erin", session: 2 },
  { name: "Adinda Shavira & Partner", slug: "adinda-shavira", session: 2 },
  { name: "Tika Nurfitria & Suami", slug: "tika-nurfitria", session: 2 },
  { name: "Fitriani", slug: "fitriani", session: 2 },
  { name: "Dilla Nurkholisoh", slug: "dilla-nurkholisoh", session: 2 },
  { name: "Leli Kurniati", slug: "leli-kurniati", session: 2 },
  { name: "Sukmiati", slug: "sukmiati", session: 2 },
  { name: "Dewi", slug: "dewi", session: 2 },
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
export function getAllInvitationLinks(baseUrl = "https://aditya-adinda.vercel.app") {
  return guestList.map(guest => ({
    name: guest.name,
    slug: guest.slug,
    link: generateInvitationLink(guest.slug, baseUrl)
  }))
}
