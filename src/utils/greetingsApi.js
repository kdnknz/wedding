// API utility untuk greetings menggunakan Vercel API dengan incremental sync

const API_URL = '/api/greetings'

// Fetch greetings with optional timestamp filter
export const fetchGreetings = async (since = null) => {
  try {
    const url = since ? `${API_URL}?since=${since}` : API_URL
    const response = await fetch(url)
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

// Subscribe to greetings with incremental updates
export const subscribeToGreetings = (callback) => {
  let intervalId
  let lastFetchTime = null

  const fetchAndUpdate = async () => {
    // First fetch: get all greetings
    // Subsequent fetches: only get new greetings since last fetch
    const newGreetings = await fetchGreetings(lastFetchTime)
    
    if (newGreetings.length > 0) {
      callback(newGreetings, lastFetchTime === null) // Pass isInitial flag
      
      // Update last fetch time to the newest greeting's timestamp
      const newestTimestamp = newGreetings[0]?.timestamp
      if (newestTimestamp) {
        lastFetchTime = newestTimestamp
      }
    }
  }

  // Initial fetch
  fetchAndUpdate()

  // Poll every 10 seconds for new greetings only
  intervalId = setInterval(fetchAndUpdate, 10000)

  // Return unsubscribe function
  return () => {
    if (intervalId) {
      clearInterval(intervalId)
    }
  }
}
