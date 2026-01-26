import { weddingData } from '../data/data'
import { getGuestSession } from '../data/guests'
import { getGuestNameFromUrl } from '../utils/urlParams'

function EventDetails() {
  const { akad, resepsi } = weddingData.event
  
  // Dapatkan sesi tamu dari URL
  const guestSlug = getGuestNameFromUrl()
  const guestSession = guestSlug ? getGuestSession(guestSlug) : null
  
  // Tentukan waktu berdasarkan sesi
  const getSessionTime = () => {
    if (guestSession === 1) {
      return "09:00 - 11:00 WIB"
    } else if (guestSession === 2) {
      return "12:00 - 14:30 WIB"
    }
    return "09:00 - 14:30 WIB" // Default jika tidak ada sesi
  }
  
  const sessionTime = getSessionTime()
  const showSessionInfo = guestSession !== null

  return (
    <section className="event-details">
      <h2>Detail Acara</h2>
      
      {showSessionInfo && (
        <div className="session-info">
          <p className="session-text">
            Kami mengharapkan kehadiran Bapak/Ibu/Saudara/i 
            pada pukul :
          </p>
          <p className="session-time"><strong>{sessionTime}</strong></p>
        </div>
      )}
      
      <div className="event-card">
        <h3>Akad Nikah</h3>
        <p className="event-date">{akad.date}</p>
        <p className="event-time">{akad.time}</p>
        <p className="event-venue">{akad.venue}</p>
        {akad.venueType && <p className="event-venue-type">({akad.venueType})</p>}
        <p className="event-address">{akad.address}</p>
        {akad.mapsLink && (
          <a 
            href={akad.mapsLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="maps-button"
          >
            📍 Lihat Lokasi di Google Maps
          </a>
        )}
      </div>

      <div className="event-card">
        <h3>Resepsi</h3>
        <p className="event-date">{resepsi.date}</p>
        <p className="event-time">{showSessionInfo ? sessionTime : resepsi.time}</p>
        <p className="event-venue">{resepsi.venue}</p>
        {resepsi.venueType && <p className="event-venue-type">({resepsi.venueType})</p>}
        <p className="event-address">{resepsi.address}</p>
        {resepsi.mapsLink && (
          <a 
            href={resepsi.mapsLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="maps-button"
          >
            📍 Lihat Lokasi di Google Maps
          </a>
        )}
      </div>
    </section>
  )
}

export default EventDetails
