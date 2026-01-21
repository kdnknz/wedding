// Vercel Serverless Function untuk handle greetings
import { readFileSync, writeFileSync, existsSync } from 'fs'
import { join } from 'path'

const DATA_FILE = join(process.cwd(), 'data', 'greetings.json')

// Ensure data directory and file exist
function ensureDataFile() {
  try {
    if (!existsSync(DATA_FILE)) {
      const dir = join(process.cwd(), 'data')
      if (!existsSync(dir)) {
        require('fs').mkdirSync(dir, { recursive: true })
      }
      writeFileSync(DATA_FILE, JSON.stringify([]))
    }
  } catch (error) {
    console.error('Error ensuring data file:', error)
  }
}

// Read greetings from file
function readGreetings() {
  try {
    ensureDataFile()
    const data = readFileSync(DATA_FILE, 'utf8')
    return JSON.parse(data)
  } catch (error) {
    console.error('Error reading greetings:', error)
    return []
  }
}

// Write greetings to file
function writeGreetings(greetings) {
  try {
    ensureDataFile()
    writeFileSync(DATA_FILE, JSON.stringify(greetings, null, 2))
    return true
  } catch (error) {
    console.error('Error writing greetings:', error)
    return false
  }
}

export default function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  // GET: Fetch all greetings
  if (req.method === 'GET') {
    const greetings = readGreetings()
    return res.status(200).json(greetings)
  }

  // POST: Add new greeting
  if (req.method === 'POST') {
    const { name, message } = req.body

    if (!name || !message) {
      return res.status(400).json({ error: 'Name and message are required' })
    }

    const greetings = readGreetings()
    const newGreeting = {
      id: Date.now().toString(),
      name: name.trim(),
      message: message.trim(),
      timestamp: new Date().toISOString(),
      comments: []
    }

    greetings.unshift(newGreeting) // Add to beginning (newest first)
    
    if (writeGreetings(greetings)) {
      return res.status(201).json(newGreeting)
    } else {
      return res.status(500).json({ error: 'Failed to save greeting' })
    }
  }

  return res.status(405).json({ error: 'Method not allowed' })
}
