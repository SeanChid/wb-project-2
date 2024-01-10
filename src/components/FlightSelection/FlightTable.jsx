import TableHeader from './TableHeader.jsx'
import ConfirmFlightButton from './ConfirmFlightButton.jsx'
import TableRow from './TableRow.jsx'

import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const FlightTable = () => {

    const location = useLocation()
    const {depAirport, arrAirport, numSeat, flightDate, flightData} = location.state
    
    const [selectedFlight, setSelectedFlight] = useState(null)

    const navigate = useNavigate()

    const row = flightData.map((el) => <TableRow
        key={el.flightNum}
        flightData={el}
        selectedFlight={selectedFlight}
        setSelectedFlight={setSelectedFlight}
    />)

    const handleClick = () => {
        if (selectedFlight !== null) {
            navigate('/confirm-booking', {state: {numSeat, selectedFlight, depAirport, arrAirport, flightDate, flightData}})
        } else {
            alert('Please select a flight')
        }
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