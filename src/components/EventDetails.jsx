import { weddingData } from '../data/data'

function EventDetails() {
  const { akad, resepsi } = weddingData.event

  return (
    <section className="event-details">
      <h2>Detail Acara</h2>
      
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
        <p className="event-time">{resepsi.time}</p>
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
