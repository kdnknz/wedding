import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc, query, orderBy, onSnapshot, doc, updateDoc, getDoc } from 'firebase/firestore'
import { firebaseConfig } from '../data/data'

// Check if Firebase is configured
const isFirebaseConfigured = () => {
  return firebaseConfig.apiKey && 
         firebaseConfig.apiKey !== 'YOUR_API_KEY' &&
         !firebaseConfig.apiKey.includes('YOUR_')
}

let app = null
let db = null
let greetingsCollection = null

if (isFirebaseConfigured()) {
  try {
    app = initializeApp(firebaseConfig)
    db = getFirestore(app)
    greetingsCollection = collection(db, 'greetings')
  } catch (error) {
    console.error('Firebase initialization error:', error)
  }
}

export { greetingsCollection }

export const addGreeting = async (name, message) => {
  if (!isFirebaseConfigured()) {
    throw new Error('Firebase belum dikonfigurasi. Silakan isi firebaseConfig di src/data/data.js')
  }
  
  return await addDoc(greetingsCollection, {
    name,
    message,
    timestamp: new Date(),
    comments: []
  })
}

export const subscribeToGreetings = (callback) => {
  if (!isFirebaseConfigured()) {
    console.warn('Firebase belum dikonfigurasi')
    callback([])
    return () => {}
  }
  
  const q = query(greetingsCollection, orderBy('timestamp', 'desc'))
  return onSnapshot(q, (snapshot) => {
    const greetings = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
    callback(greetings)
  }, (error) => {
    console.error('Error subscribing to greetings:', error)
    callback([])
  })
}

export const addComment = async (greetingId, name, comment) => {
  if (!isFirebaseConfigured()) {
    throw new Error('Firebase belum dikonfigurasi')
  }
  
  const greetingRef = doc(db, 'greetings', greetingId)
  const greetingDoc = await getDoc(greetingRef)
  const currentComments = greetingDoc.data().comments || []
  
  await updateDoc(greetingRef, {
    comments: [...currentComments, { name, comment, timestamp: new Date() }]
  })
}

export { db }
