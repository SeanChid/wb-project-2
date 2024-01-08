import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const TravelForm = () => {

    const [depAirport, setDepAirport] = useState('')
    const [arrAirport, setArrAirport] = useState('')
    const [numSeat, setNumSeat] = useState(0)
    const [flightDate, setFlightDate] = useState('')

    const navigate = useNavigate()
    
    const handleSubmit = (e) => {
        e.preventDefault()

        navigate('/flight-selection', {state: {depAirport, arrAirport, numSeat, flightDate}})
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Enter the following information:</h3>
            <label>
                From:
                <input
                    type="text"
                    value={depAirport}
                    onChange={(e) => setDepAirport(e.target.value)}
                />
            </label>
            <br/>
            <label>
                To:
                <input
                    type="text"
                    value={arrAirport}
                    onChange={(e) => setArrAirport(e.target.value)}
                />
            </label>
            <br/>
            <label>
                How many travelers?:
                <input
                    type="number"
                    value={numSeat}
                    onChange={(e) => setNumSeat(e.target.value)}
                />
            </label>
            <br/>
            <label>
                Date of departure:
                <input
                    type="date"
                    value={flightDate}
                    onChange={(e) => setFlightDate(e.target.value)}
                />
            </label>
            <br/>

            <button type="submit">Submit</button>
        </form>
    )
}

export default TravelForm