import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Homepage from './components/Home/Homepage.jsx'
import FlightSelectionPage from './components/FlightSelection/FlightSelectionPage.jsx'
import EditBookingPage from './components/EditBooking/EditBookingPage.jsx'
import CheckoutPage from './components/Checkout/CheckoutPage.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/flight-selection" element={<FlightSelectionPage />} />
        <Route path="/edit-booking" element={<EditBookingPage />} />
        <Route path="/confirm-booking" element={<CheckoutPage />} />
      </Routes>
    </Router>
  )
}

export default App
