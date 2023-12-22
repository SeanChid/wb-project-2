import React from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

import { useState, useEffect } from "react"

const GetBookingForm = () => {
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        navigate('/edit-booking')
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Already have a reservation?</h3>
            <label>
                Enter Your Booking ID:
                <input
                    type='number'
                    name='bookingId'
                />
            </label>
            <br/>

            <button type='submit'>Submit</button>
        </form>
    )
}

export default GetBookingForm