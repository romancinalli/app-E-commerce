import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { initializeApp } from 'firebase/app'
import Collection from './components/collection.jsx'
import './index.css'

const firebaseConfig = {
  apiKey: "AIzaSyC4AZ0A6QVqLE4OJ0WNwsAMcnpVMXyOSeE",
  authDomain: "e-commerce-8261d.firebaseapp.com",
  projectId: "e-commerce-8261d",
  storageBucket: "e-commerce-8261d.appspot.com",
  messagingSenderId: "488856851699",
  appId: "1:488856851699:web:f5c71497fb1a8984e29386",
  measurementId: "G-8VQCCDZQEG"
};

initializeApp(firebaseConfig)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Collection/>
  </React.StrictMode>,
)
