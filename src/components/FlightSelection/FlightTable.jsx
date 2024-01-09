import axios from 'axios'

import TableHeader from './TableHeader.jsx'
import ConfirmFlightButton from './ConfirmFlightButton.jsx'
import TableRow from './TableRow.jsx'

import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const FlightTable = () => {

    const location = useLocation()
    const {depAirport, arrAirport, numSeat, flightDate} = location.state

    const [flightData, setFlightData] = useState([])
    const [selectedFlight, setSelectedFlight] = useState(null)

    const options = {
        method: 'GET',
        url: 'https://flight-info-api.p.rapidapi.com/schedules',
        params: {
          CodeType: 'IATA',
          ArrivalAirport: arrAirport,
          DepartureAirport: depAirport,
          DepartureDateTime: flightDate,
          version: 'v2'
        },
        headers: {
          'X-RapidAPI-Key': 'c966d2f2f2msh3b9a6d2f669cd79p125115jsn5e7c22c47151',
          'X-RapidAPI-Host': 'flight-info-api.p.rapidapi.com'
        }
    }

    useEffect(() => {
        // axios.get(`/flights?flightDate=${flightDate}&depAirport=${depAirport}&arrAirport=${arrAirport}`)
        axios.request(options)
        .then((res) => {
            console.log(res.data.data)
            setFlightData(res.data.data)
        })
        .catch((theseHands) => {
            console.log(theseHands)
        })
    }, [])

    const navigate = useNavigate()

    const row = flightData.map((el) => <TableRow
        key={el.flightNumber}
        flightData={el}
        selectedFlight={selectedFlight}
        setSelectedFlight={setSelectedFlight}
    />)

    const handleClick = () => {
        navigate('/confirm-booking', {state: {numSeat, selectedFlight, depAirport, arrAirport, flightDate}})
    }

    return (
        <div>
            <table>
                <thead>
                    <TableHeader />
                </thead>

                <tbody>
                    {row}
                </tbody>
            </table>
            <ConfirmFlightButton handleClick={handleClick}/>
        </div>
    )
}

export default FlightTable