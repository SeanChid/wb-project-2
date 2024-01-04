import axios from 'axios'

import TableHeader from './TableHeader.jsx'
import ConfirmFlightButton from './ConfirmFlightButton.jsx'
import TableRow from './TableRow.jsx'

import { useState, useEffect } from 'react'

const FlightTable = () => {

    const [flightData, setFlightData] = useState([])
    const [currentBooking, setCurrentBooking] = useState(null)
    const [selectedFlight, setSelectedFlight] = useState(null)

    useEffect(() => {
        axios.get('/flights')
        .then((res) => {
            // console.log(res.data)
            setFlightData(res.data)
        })
        .catch((theseHands) => {
            console.log(theseHands)
        })

        axios.get('/bookings')
        .then((res) => {
            // console.log(res.data[0])
            setCurrentBooking(res.data[res.data.length-1])
        }).catch((theseHands) => {
            console.log(theseHands)
        })
    }, [])

    const putFlight = () => {

        axios.put(`/booking/${currentBooking.bookingId}`, {flightNum: selectedFlight.flightNum})
        .then((res) => {
            setCurrentBooking(res.data)
        })
        .catch((theseHands) => {
            console.log(theseHands)
        })
    }

    const row = flightData.map((el) => <TableRow
        key={el.flightNum}
        flightData={el}
        selectedFlight={selectedFlight}
        setSelectedFlight={setSelectedFlight}
    />)

    return (
        <div>
            <table>
                <thead>
                    <TableHeader />
                </thead>

                <tbody>
                    {row}
                </tbody>

                <tfoot>
                    <ConfirmFlightButton putFlight={putFlight}/>
                </tfoot>
            </table>
        </div>
    )
}

export default FlightTable