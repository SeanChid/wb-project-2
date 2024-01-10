const EditBookingRow = (props) => {

    const {booking, flightDate, depAirport, arrAirport, numSeat, isEditing, setFlightDate, setDepAirport, setArrAirport, setNumSeat} = props

    return isEditing? (
        <tr>
            <td></td>
            <td>
                <input
                type='date'
                value={flightDate}
                onChange={(e) => setFlightDate(e.target.value)}
                />
            </td>
            <td></td>
            <td></td>
            <td>
                <input
                type='text'
                value={depAirport}
                onChange={(e) => setDepAirport(e.target.value)}
                />
            </td>
            <td>
                <input
                type='text'
                value={arrAirport}
                onChange={(e) => setArrAirport(e.target.value)}
                />
            </td>
            <td>
                <input
                type='number'
                value={numSeat}
                onChange={(e) => setNumSeat(e.target.value)}
                />
            </td>
            <td></td>
        </tr>
    ) : (
        <tr>
            <td>{booking.bookingId}</td>
            <td>{booking.flightDate}</td>
            <td>{booking.airline}</td>
            <td>{booking.flightNum}</td>
            <td>{booking.depAirport}</td>
            <td>{booking.arrAirport}</td>
            <td>{booking.numSeat}</td>
            <td>{booking.totalPrice}</td>
        </tr>
    )
}

export default EditBookingRow