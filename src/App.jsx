import { useState } from 'react'
import Home from './pages/Home'
import Invitation from './pages/Invitation'
import MusicPlayer from './components/MusicPlayer'
import LoadingScreen from './components/LoadingScreen'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleOpen = () => {
    setIsLoading(true)
  }

  const handleLoadingComplete = () => {
    setIsLoading(false)
    setIsOpen(true)
  }

  return (
    <div className="app">
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      {!isLoading && !isOpen && <Home onOpen={handleOpen} />}
      {!isLoading && isOpen && (
        <>
          <MusicPlayer />
          <Invitation />
        </>
      )}
    </div>
  )
}

export default App
