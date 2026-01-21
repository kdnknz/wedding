// API utility untuk greetings menggunakan Vercel Serverless Function

const API_URL = import.meta.env.PROD 
  ? '/api/greetings'  // Production (Vercel)
  : 'http://localhost:5173/api/greetings'  // Development

// Fetch all greetings
export const fetchGreetings = async () => {
  try {
    const response = await fetch(API_URL)
    if (!response.ok) {
      throw new Error('Failed to fetch greetings')
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching greetings:', error)
    return []
  }
}

// Add new greeting
export const addGreeting = async (name, message) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, message })
    })

    if (!response.ok) {
      throw new Error('Failed to add greeting')
    }

    return await response.json()
  } catch (error) {
    console.error('Error adding greeting:', error)
    throw error
  }
}

// Subscribe to greetings (polling every 5 seconds)
export const subscribeToGreetings = (callback) => {
  let intervalId

  const fetchAndUpdate = async () => {
    const greetings = await fetchGreetings()
    callback(greetings)
  }

  // Initial fetch
  fetchAndUpdate()

  // Poll every 5 seconds
  intervalId = setInterval(fetchAndUpdate, 5000)

  // Return unsubscribe function
  return () => {
    if (intervalId) {
      clearInterval(intervalId)
    }
  }
}
