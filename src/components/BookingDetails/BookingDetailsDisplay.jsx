import axios from 'axios'

import React from 'react'

import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const BookingDetailsDisplay = () => {

    const location = useLocation()
    const {booking} = location.state

    return (
        <div>Your Booking Id:{booking.bookingId}</div>
    )
}

export default BookingDetailsDisplay