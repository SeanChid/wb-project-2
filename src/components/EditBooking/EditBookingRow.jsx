const EditBookingRow = (props) => {

    const {booking} = props

    return (
        <tr>
            <td>{booking.bookingId}</td>
            <td>{booking.flightNum}</td>
            <td>{booking.numSeat}</td>
            <td>{booking.totalPrice}</td>
        </tr>
    )
}

export default EditBookingRow