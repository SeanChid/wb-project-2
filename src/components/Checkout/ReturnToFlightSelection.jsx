import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const ReturnToFlightSelection = () => {

    const location = useLocation()
    const {depAirport, arrAirport, numSeat, flightDate, flightData} = location.state

    const navigate = useNavigate()

    const buttonStyle = {
        position: 'fixed',
        top: '10px',
        left: '10px'
    }

    const handleClick = () => {
        navigate('/flight-selection', {state: {depAirport, arrAirport, numSeat, flightDate, flightData}})
    }

    return <button style={buttonStyle} className='btn btn-primary' onClick={handleClick}>Return to Flights</button>
}

export default ReturnToFlightSelection