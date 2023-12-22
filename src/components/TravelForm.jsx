import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const TravelForm = () => {
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        navigate('/flight-selection')
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Enter the following information:</h3>
            <label>
                From:
                <input
                    type="text"
                    name="depAirport"
                />
            </label>
            <br/>
            <label>
                To:
                <input
                    type="text"
                    name="arrAirport"
                />
            </label>
            <br/>
            <label>
                Date of departure:
                <input
                    type="date"
                    name="flightDate"
                />
            </label>
            <br/>
            <label>
                How many travelers?:
                <input
                    type="number"
                    name="numSeat"
                />
            </label>
            <br/>

            <button type="submit">Submit</button>
        </form>
    )
}

export default TravelForm