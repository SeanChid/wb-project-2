import axios from 'axios'

import CheckoutHeader from './CheckoutHeader.jsx'
import CheckoutRow from './CheckoutRow.jsx'
import CheckoutConfirm from './CheckoutConfirm.jsx'

import { useState, useEffect } from 'react'
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
        })
        .catch((theseHands) => {
            console.log(theseHands)
        })
        navigate('/')
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

                <tfoot>
                    <CheckoutConfirm handleClick={handleClick}/>
                </tfoot>
            </table>
        </div>
    )
}

export default CheckoutDisplay