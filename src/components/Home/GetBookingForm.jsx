import axios from "axios"
import { useNavigate } from "react-router-dom"

import { useState } from "react"

const GetBookingForm = () => {
    const navigate = useNavigate()

    const [bookingId, setBookingId] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.get(`/booking/${bookingId}`)
        .then((res) => {
            const booking = res.data
            navigate('/edit-booking', {state: {booking}})
        })
        .catch((theseHands) => {
            console.log(theseHands)
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Already have a reservation?</h3>
            <label>
                Enter Your Booking ID:
                <input
                    type='number'
                    value={bookingId}
                    onChange={(e) => setBookingId(e.target.value)}
                />
            </label>
            <br/>

            <button type='submit'>Submit</button>
        </form>
    )
}

export default GetBookingForm