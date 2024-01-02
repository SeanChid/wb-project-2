import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const TravelForm = () => {

    const [numSeat, setNumSeat] = useState(null)
    const navigate = useNavigate()
    
    const handleSubmit = (e) => {
        e.preventDefault()
        
        axios.post(`/booking`, {numSeat: numSeat})
        .then((res) => {
            console.log(res.data)
            setNumSeat(res.data.newNumSeat)
            navigate('/flight-selection')
        })
        .catch((theseHands) => {
            console.log(theseHands)
        })
        
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
                    value={numSeat}
                    onChange={(e) => setNumSeat(e.target.value)}
                />
            </label>
            <br/>

            <button type="submit">Submit</button>
        </form>
    )
}

export default TravelForm