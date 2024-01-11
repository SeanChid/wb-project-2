import axios from 'axios'
import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import EditBookingHeader from './EditBookingHeader.jsx'
import EditBookingRow from './EditBookingRow.jsx'
import ModeButtons from './ModeButtons.jsx'

const EditBookingDisplay = () => {

    const location = useLocation()
    const {booking} = location.state

    const [isEditing, setIsEditing] = useState(false)
    const [depAirport, setDepAirport] = useState(booking.depAirport)
    const [arrAirport, setArrAirport] = useState(booking.arrAirport)
    const [numSeat, setNumSeat] = useState(booking.numSeat)
    const [flightDate, setFlightDate] = useState(booking.flightDate)

    const changeEditMode = () => setIsEditing(true)
    const changeNormalMode = () => setIsEditing(false)


    const navigate = useNavigate()

    const submitEdit = (e) => {
        e.preventDefault()
        axios.get(`/flights?flightDate=${flightDate}&depAirport=${depAirport}&arrAirport=${arrAirport}`)
        .then((res) => {
            const flightData = res.data
            navigate('/flight-selection', {state: {booking, flightData, numSeat}})
        })
        .catch((theseHands) => {
            console.log(theseHands)
        })
    }

    
    return (
        <div>
            <table>
                <thead>
                    <EditBookingHeader 
                        isEditing={isEditing}
                    />
                </thead>

                <tbody>
                    <EditBookingRow
                        booking={booking}
                        isEditing={isEditing}
                        setFlightDate={setFlightDate}
                        setDepAirport={setDepAirport}
                        setArrAirport={setArrAirport}
                        setNumSeat={setNumSeat}
                        flightDate={flightDate}
                        depAirport={depAirport}
                        arrAirport={arrAirport}
                        numSeat={numSeat}
                        submitEdit={submitEdit}
                    />
                </tbody>
            </table>
            <ModeButtons
                isEditing={isEditing}
                changeEditMode={changeEditMode}
                changeNormalMode={changeNormalMode}
            />
        </div>
    )
}

export default EditBookingDisplay