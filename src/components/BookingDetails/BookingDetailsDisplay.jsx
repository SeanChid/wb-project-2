import { useLocation } from 'react-router-dom'

const BookingDetailsDisplay = () => {

    const location = useLocation()
    const {booking} = location.state

    return (
        <div>
            <h1>Thanks for Booking!</h1>
            <h2>Your Booking ID is: {booking.bookingId}</h2>
            <h2>Check your email for further details</h2>
        </div>
    )
}

export default BookingDetailsDisplay