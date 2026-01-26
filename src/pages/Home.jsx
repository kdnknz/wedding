import { weddingData } from '../data/data'
import { getGuestName } from '../data/guests'
import { getGuestNameFromUrl } from '../utils/urlParams'

function Home({ onOpen }) {
  const guestSlug = getGuestNameFromUrl()
  const guestName = guestSlug ? getGuestName(guestSlug) : null

  return (
    <div className="home-page">
      <div className="home-content">
        <h1 className="home-title">Undangan Pernikahan</h1>
        <div className="couple-names">
          <h2>{weddingData.couple.bride}</h2>
          <span className="ampersand">&</span>
          <h2>{weddingData.couple.groom}</h2>
        </div>
        <p className="event-date">{weddingData.event.akad.date}</p>
        {weddingData.event.timeSession && (
          <p className="event-time-session">({weddingData.event.timeSession})</p>
        )}
        
        {guestName && (
          <div className="guest-greeting">
            <p>Kepada Yth.</p>
            <h3>{guestName}</h3>
            <p>Di Tempat</p>
          </div>
        )}
        
        <button className="open-button" onClick={onOpen}>
          Buka Undangan
        </button>
      </div>
    </div>
  )
}

export default Home
