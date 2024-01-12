import { useLocation } from 'react-router-dom'

const BookingDetailsDisplay = () => {

    const location = useLocation()
    const {booking} = location.state

    return (
        <div>
            <h1>Thanks for Booking!</h1>
            <h2>Your Booking Id: {booking.bookingId}</h2>
        </div>
    )
}

export default BookingDetailsDisplay