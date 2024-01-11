const EditBookingRow = (props) => {

    const {booking, flightDate, depAirport, arrAirport, numSeat, isEditing, submitEdit, setFlightDate, setDepAirport, setArrAirport, setNumSeat} = props

    return isEditing? (
        <tr>
            <td>
                <form onSubmit={submitEdit}>
                    <label>
                        Date:
                        <input
                        type='date'
                        value={flightDate}
                        onChange={(e) => setFlightDate(e.target.value)}
                        />
                    </label>
                    <br/>
                    <label>
                        From:
                        <input
                        type='text'
                        value={depAirport}
                        onChange={(e) => setDepAirport(e.target.value)}
                        />
                    </label>
                    <br/>
                    <label>
                        To:
                        <input
                        type='text'
                        value={arrAirport}
                        onChange={(e) => setArrAirport(e.target.value)}
                        />
                    </label>
                    <br/>
                    <label>
                        Travelers:
                        <input
                        type='number'
                        value={numSeat}
                        onChange={(e) => setNumSeat(e.target.value)}
                        />
                    </label>
                    <br/>
                    <button type='submit'>Submit</button>
                </form>
            </td>
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