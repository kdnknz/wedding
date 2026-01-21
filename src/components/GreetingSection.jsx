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
  const [notification, setNotification] = useState({ show: false, type: '', message: '' })

  useEffect(() => {
    // Auto-fill guest name from URL
    const guestSlug = getGuestNameFromUrl()
    if (guestSlug) {
      const guestName = getGuestName(guestSlug)
      if (guestName) {
        setName(guestName)
      }
    }

    const unsubscribe = subscribeToGreetings((newGreetings, isInitial) => {
      if (isInitial) {
        // First load: replace all greetings
        setGreetings(newGreetings)
      } else {
        // Incremental update: prepend new greetings
        setGreetings(prev => [...newGreetings, ...prev])
      }
    })
    return () => unsubscribe()
  }, [])

  const isGuestFromUrl = () => {
    const guestSlug = getGuestNameFromUrl()
    return guestSlug && getGuestName(guestSlug)
  }

  const showNotification = (type, message) => {
    setNotification({ show: true, type, message })
    setTimeout(() => {
      setNotification({ show: false, type: '', message: '' })
    }, 5000) // Hide after 5 seconds
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!name.trim() || !message.trim()) return

    setIsSubmitting(true)
    try {
      const newGreeting = await addGreeting(name, message)
      
      // Optimistic update - langsung tampilkan ucapan baru
      setGreetings(prev => [newGreeting, ...prev])
      
      setMessage('')
      showNotification('success', 'Ucapan berhasil dikirim! Terima kasih.')
    } catch (error) {
      console.error('Error adding greeting:', error)
      showNotification('error', 'Gagal mengirim ucapan. Silakan coba lagi.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="greeting-section">
      <h2>Ucapan & Doa</h2>
      
      <div className="greeting-form">
        <form onSubmit={handleSubmit}>
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
          
          {notification.show && (
            <div className={`notification ${notification.type}`}>
              {notification.type === 'success' ? '✅' : '❌'} {notification.message}
            </div>
          )}
          
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Mengirim...' : 'Kirim Ucapan'}
          </button>
        </form>

        <div className="greetings-list">
          {greetings.map((greeting) => (
            <GreetingCard key={greeting.id} greeting={greeting} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default GreetingSection
