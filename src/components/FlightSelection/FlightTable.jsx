import axios from 'axios'

import TableHeader from './TableHeader.jsx'
import ConfirmFlightButton from './ConfirmFlightButton.jsx'
import TableRow from './TableRow.jsx'

import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const FlightTable = () => {

    const location = useLocation()
    const {numSeat, flightDate} = location.state

    const [flightData, setFlightData] = useState([])
    const [selectedFlight, setSelectedFlight] = useState(null)

    useEffect(() => {
        axios.get(`/flights?flightDate=${flightDate}`)
        .then((res) => {
            setFlightData(res.data)
        })
        .catch((theseHands) => {
            console.log(theseHands)
        })
    }, [])

    const navigate = useNavigate()

    const row = flightData.map((el) => <TableRow
        key={el.flightNum}
        flightData={el}
        selectedFlight={selectedFlight}
        setSelectedFlight={setSelectedFlight}
    />)

    const handleClick = () => {
        navigate('/confirm-booking', {state: {numSeat, selectedFlight}})
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

                <tfoot>
                    <ConfirmFlightButton handleClick={handleClick}/>
                </tfoot>
            </table>
        </div>
    )
}

export default FlightTable