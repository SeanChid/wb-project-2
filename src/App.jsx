import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage.jsx'
import FlightSelectionPage from './components/FlightSelectionPage.jsx'
import EditBookingPage from './components/EditBookingPage.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/flight-selection" element={<FlightSelectionPage />} />
        <Route path="/edit-booking" element={<EditBookingPage />} />
      </Routes>
    </Router>
  )
}

export default App
