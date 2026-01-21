import { put, head, del } from '@vercel/blob'

const BLOB_NAME = 'greetings.json'

// Helper to read greetings from blob
async function readGreetings() {
  try {
    const blob = await head(BLOB_NAME)
    if (!blob) return []
    
    const response = await fetch(blob.url)
    return await response.json()
  } catch (error) {
    console.log('No existing greetings, starting fresh')
    return []
  }
}

// Helper to write greetings to blob
async function writeGreetings(greetings) {
  try {
    // Try to delete existing blob first
    await del(BLOB_NAME).catch(() => {})
  } catch (error) {
    // Ignore delete errors
  }
  
  // Create new blob
  const blob = await put(BLOB_NAME, JSON.stringify(greetings), {
    access: 'public',
    contentType: 'application/json'
  })
  return blob
}

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  try {
    // GET: Fetch all greetings
    if (req.method === 'GET') {
      const greetings = await readGreetings()
      return res.status(200).json(greetings)
    }

    // POST: Add new greeting
    if (req.method === 'POST') {
      const { name, message } = req.body

      if (!name || !message) {
        return res.status(400).json({ error: 'Name and message are required' })
      }

      // Get existing greetings
      const greetings = await readGreetings()

      // Create new greeting
      const newGreeting = {
        id: Date.now().toString(),
        name: name.trim(),
        message: message.trim(),
        timestamp: new Date().toISOString(),
        comments: []
      }

      // Add to beginning (newest first)
      greetings.unshift(newGreeting)

      // Save back to blob
      await writeGreetings(greetings)

      return res.status(201).json(newGreeting)
    }

    return res.status(405).json({ error: 'Method not allowed' })
  } catch (error) {
    console.error('API Error:', error)
    return res.status(500).json({ 
      error: 'Internal server error',
      message: error.message 
    })
  }
}
