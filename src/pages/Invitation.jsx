import { useEffect } from 'react'
import { weddingData } from '../data/data'
import EventDetails from '../components/EventDetails'
import GreetingSection from '../components/GreetingSection'
import Countdown from '../components/Countdown'
import { getGuestName } from '../data/guests'
import { getGuestNameFromUrl } from '../utils/urlParams'

function Invitation() {
  const guestSlug = getGuestNameFromUrl()
  const guestName = guestSlug ? getGuestName(guestSlug) : null

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up')
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    const animatedElements = document.querySelectorAll('.animate-on-scroll')
    animatedElements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="invitation-page">
      {/* Opening Section */}
      <section className="opening-section animate-on-scroll">
        <p className="bismillah">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
        <p className="opening-text">
          Assalamu'alaikum Warahmatullahi Wabarakatuh
        </p>
        <p className="opening-message">
          Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami:
        </p>
      </section>

      {/* Couple Info Section */}
      <section className="couple-info animate-on-scroll">
        <div className="couple-card">
          {/* <div className="couple-photo"> */}
            <img src={weddingData.couple.bridePhoto} alt={weddingData.couple.bride} />
          {/* </div> */}
          <h3>{weddingData.couple.bride}</h3>
          <p className="couple-child">{weddingData.couple.brideChild}</p>
          <p className="couple-parents">{weddingData.couple.brideParents}</p>
        </div>
        
        <div className="couple-card">
          {/* <div className="couple-photo"> */}
            <img src={weddingData.couple.groomPhoto} alt={weddingData.couple.groom} />
          {/* </div> */}
          <h3>{weddingData.couple.groom}</h3>
          <p className="couple-child">{weddingData.couple.groomChild}</p>
          <p className="couple-parents">{weddingData.couple.groomParents}</p>
        </div>
      </section>

      <section className="quote-section animate-on-scroll">
        <p className="quote">{weddingData.quote}</p>
        <p className="quote-source">- {weddingData.quoteSource} -</p>
      </section>

      <div className="animate-on-scroll">
        <Countdown targetDate={weddingData.countdownDate} />
      </div>
      
      <div className="animate-on-scroll">
        <EventDetails />
      </div>
      
      <div className="animate-on-scroll">
        <GreetingSection />
      </div>

      <footer className="footer">
        <div className="footer-content">
          <p className="footer-message">
           Untuk Bapak/Ibu yang telah menikah, semoga senantiasa diberikan kebahagiaan dan keberkahan, serta selalu menjadikan pernikahan tersebut sebagai ladang pahala.
          Sementara bagi teman-teman kami yang belum menikah, semoga Allah segera memudahkan jalannya, karena pernikahan bukanlah sebuah aib, melainkan bagian dari perintah agama.</p>
                    
          <div className="footer-hadist">
            <p className="hadist-text">
              “Apabila datang kepadamu seseorang yang kamu ridhai agama dan akhlaknya,
              maka nikahkanlah dia. Jika tidak kamu lakukan, niscaya akan terjadi fitnah
              di muka bumi dan kerusakan yang besar.”
            </p>
            <p className="hadist-source">
               <a href="https://www.hadits.id/hadits/tirmidzi/1085" target="_blank" rel="noopener noreferrer">— HR. Tirmidzi No. 1085 —</a>
            </p>
          </div>
          
          <p className="footer-thanks">
            Terima kasih atas doa dan kehadiran Anda
          </p>
          
          <p className="footer-signature">
            Wassalamu'alaikum Warahmatullahi Wabarakatuh
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Invitation
