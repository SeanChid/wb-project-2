import axios from 'axios'

import React from 'react'

import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const BookingDetailsDisplay = () => {

    const location = useLocation()
    const {booking} = location.state
    console.log(location.state)

    // const [booking, setBooking] = useState([])

    // useEffect(() => {
    //     axios.get('/bookings')
    //     .then((res) => {
    //         setBooking(res.data[res.data.length-1])
    //     })
    // }, [])

    return (
        <div>Your Booking Id:{booking.bookingId}</div>
    )
}

export default BookingDetailsDisplay