import TableHeader from './TableHeader.jsx'
import ConfirmFlightButton from './ConfirmFlightButton.jsx'
import TableRow from './TableRow.jsx'

import axios from 'axios'
import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Table } from 'react-bootstrap'

const FlightTable = () => {

    const location = useLocation()
    const {depAirport, arrAirport, numSeat, flightDate, flightData} = location.state
    let {booking} = location.state
    
    const [selectedFlight, setSelectedFlight] = useState(null)

    const navigate = useNavigate()

    const row = flightData.map((el) => <TableRow
        key={el.scheduleInstanceKey}
        flightData={el}
        selectedFlight={selectedFlight}
        setSelectedFlight={setSelectedFlight}
    />)

    const handleClick = () => {
        if (selectedFlight !== null) {
            if (booking === undefined) {
                navigate('/confirm-booking', {state: {numSeat, selectedFlight, depAirport, arrAirport, flightDate, flightData}})
            } else {
                axios.put(`/booking/${booking.bookingId}`, {flightNum: selectedFlight.flightNum, numSeat: numSeat})
                .then((res) => {
                    // console.log(res.data)
                    booking = res.data
                    navigate(`/edit-booking`, {state: {booking}})
                })
                .catch((theseHands) => {
                    console.log(theseHands)
                })
            }
        } else {
            alert('Please select a flight')
        }
    }

    return (
        <div>
            <h3>Showing flights between {depAirport} and {arrAirport} on {flightDate}</h3>
            <Table striped>
                <thead>
                    <TableHeader />
                </thead>

                <tbody>
                    {row}
                </tbody>
            </Table>
            <ConfirmFlightButton handleClick={handleClick}/>
        </div>
    )
}

export default FlightTable