import axios from 'axios'

import CheckoutHeader from './CheckoutHeader.jsx'
import CheckoutRow from './CheckoutRow.jsx'
import CheckoutConfirm from './CheckoutConfirm.jsx'

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const CheckoutDisplay = () => {

    const [currentBooking, setCurrentBooking] = useState([])

    useEffect(() => {
        axios.get('/bookings')
        .then((res) => {
            setCurrentBooking(res.data[res.data.length-1])
        })
    }, [])

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/')
    }

    return (
        <div>
            <table>
                <thead>
                    <CheckoutHeader />
                </thead>

                <tbody>
                    <CheckoutRow currentBooking={currentBooking}/>
                </tbody>

                <tfoot>
                    <CheckoutConfirm handleClick={handleClick}/>
                </tfoot>
            </table>
        </div>
    )
}

export default CheckoutDisplay