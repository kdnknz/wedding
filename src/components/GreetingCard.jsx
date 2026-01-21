function GreetingCard({ greeting }) {
  // Format timestamp
  const formatDate = (timestamp) => {
    if (!timestamp) return 'Baru saja'
    try {
      const date = new Date(timestamp)
      return date.toLocaleDateString('id-ID', { 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    } catch {
      return 'Baru saja'
    }
  }

  return (
    <div className="greeting-item">
      <div className="greeting-name">{greeting.name}</div>
      <div className="greeting-message">{greeting.message}</div>
      <div className="greeting-date">{formatDate(greeting.timestamp)}</div>
    </div>
  )
}

export default GreetingCard
