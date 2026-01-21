// API utility untuk greetings menggunakan Vercel API

const API_URL = '/api/greetings'

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
      const errorData = await response.json()
      throw new Error(errorData.message || 'Failed to add greeting')
    }

    return await response.json()
  } catch (error) {
    console.error('Error adding greeting:', error)
    throw error
  }
}

// Subscribe to greetings (polling every 10 seconds)
export const subscribeToGreetings = (callback) => {
  let intervalId

  const fetchAndUpdate = async () => {
    const greetings = await fetchGreetings()
    callback(greetings)
  }

  // Initial fetch
  fetchAndUpdate()

  // Poll every 10 seconds
  intervalId = setInterval(fetchAndUpdate, 10000)

  // Return unsubscribe function
  return () => {
    if (intervalId) {
      clearInterval(intervalId)
    }
  }
}
