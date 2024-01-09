import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const ReturnToFlightSelection = () => {

    const location = useLocation()
    const {depAirport, arrAirport, numSeat, flightDate} = location.state

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/flight-selection', {state: {depAirport, arrAirport, numSeat, flightDate}})
    }

    return <button onClick={handleClick}>Return to Flights</button>
}

export default ReturnToFlightSelection