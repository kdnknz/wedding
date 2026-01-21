import { useState, useEffect } from 'react'
import { addGreeting, subscribeToGreetings } from '../utils/greetingsApi'
import { getGuestName } from '../data/guests'
import { getGuestNameFromUrl } from '../utils/urlParams'
import GreetingCard from './GreetingCard'

function GreetingSection() {
  const [greetings, setGreetings] = useState([])
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    // Auto-fill guest name from URL
    const guestSlug = getGuestNameFromUrl()
    if (guestSlug) {
      const guestName = getGuestName(guestSlug)
      if (guestName) {
        setName(guestName)
      }
    }

    const unsubscribe = subscribeToGreetings((data) => {
      setGreetings(data)
    })
    return () => unsubscribe()
  }, [])

  const isGuestFromUrl = () => {
    const guestSlug = getGuestNameFromUrl()
    return guestSlug && getGuestName(guestSlug)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!name.trim() || !message.trim()) return

    setIsSubmitting(true)
    try {
      await addGreeting(name, message)
      setMessage('')
      alert('✅ Ucapan berhasil dikirim! Terima kasih.')
    } catch (error) {
      console.error('Error adding greeting:', error)
      alert('❌ Gagal mengirim ucapan. Silakan coba lagi.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="greeting-section">
      <h2>Ucapan & Doa</h2>
      
      <form className="greeting-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label className="form-label">Dari</label>
          <input
            type="text"
            placeholder="Nama Anda"
            value={name}
            onChange={(e) => setName(e.target.value)}
            readOnly={isGuestFromUrl()}
            required
          />
        </div>
        <div className="form-field">
          <label className="form-label">Menyampaikan</label>
          <textarea
            placeholder="Tulis ucapan dan doa Anda..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="4"
            required
          />
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Mengirim...' : 'Kirim Ucapan'}
        </button>
      </form>

      <div className="greetings-list">
        {greetings.map((greeting) => (
          <GreetingCard key={greeting.id} greeting={greeting} />
        ))}
      </div>
    </section>
  )
}

export default GreetingSection
