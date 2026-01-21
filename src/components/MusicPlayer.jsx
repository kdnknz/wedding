import { useState, useEffect, useRef } from 'react'
import { weddingData } from '../data/data'

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    audioRef.current = new Audio(weddingData.musicPath)
    audioRef.current.loop = true
    
    // Auto-play attempt
    const playAudio = async () => {
      try {
        await audioRef.current.play()
        setIsPlaying(true)
      } catch (err) {
        console.log('Auto-play prevented:', err)
      }
    }
    
    playAudio()

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
      }
    }
  }, [])

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <button className="music-player" onClick={togglePlay}>
      {isPlaying ? '🔊' : '🔇'}
    </button>
  )
}

export default MusicPlayer
