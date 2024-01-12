import axios from 'axios'

import CheckoutHeader from './CheckoutHeader.jsx'
import CheckoutRow from './CheckoutRow.jsx'
import CheckoutConfirm from './CheckoutConfirm.jsx'

import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const CheckoutDisplay = () => {

    const location = useLocation()
    const {numSeat, selectedFlight} = location.state

    const [booking, setBooking] = useState([])

    const navigate = useNavigate()

    const handleClick = () => {
        axios.post('/booking', {numSeat: numSeat, flightNum: selectedFlight.flightNum})
        .then((res) => {
            setBooking(res.data)
            navigate('/booking-details', {state: {booking: res.data}})
        })
        .catch((theseHands) => {
            console.log(theseHands)
        })
    }

    return (
        <div>
            <table>
                <thead>
                    <CheckoutHeader />
                </thead>

                <tbody>
                    <CheckoutRow numSeat={numSeat} selectedFlight={selectedFlight}/>
                </tbody>
            </table>
            <h3>
                Total: ${selectedFlight.price * numSeat}
            </h3>
            <CheckoutConfirm handleClick={handleClick}/>
        </div>
    )
}

export default CheckoutDisplay