import { useState } from 'react'

function GreetingCard({ greeting }) {
  const [showComments, setShowComments] = useState(false)

  return (
    <div className="greeting-card">
      <div className="greeting-header">
        <strong>{greeting.name}</strong>
        <span className="greeting-time">
          {greeting.timestamp?.toDate?.()?.toLocaleDateString('id-ID') || 'Baru saja'}
        </span>
      </div>
      <p className="greeting-message">{greeting.message}</p>
      
      {greeting.comments && greeting.comments.length > 0 && (
        <button 
          className="toggle-comments"
          onClick={() => setShowComments(!showComments)}
        >
          {showComments ? 'Sembunyikan' : 'Lihat'} {greeting.comments.length} komentar
        </button>
      )}

      {showComments && greeting.comments && (
        <div className="comments-list">
          {greeting.comments.map((comment, idx) => (
            <div key={idx} className="comment">
              <strong>{comment.name}</strong>: {comment.comment}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default GreetingCard
