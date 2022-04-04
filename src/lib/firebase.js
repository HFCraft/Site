// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'

// Inicializar o Firebase
const firebase = initializeApp({
  apiKey: process.env.GOOGLE_API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.GOOGLE_APP_ID,
  measurementId: process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID,
})
