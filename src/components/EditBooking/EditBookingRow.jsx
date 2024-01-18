const EditBookingRow = (props) => {

    const {booking, flightDate, depAirport, arrAirport, numSeat, isEditing, submitEdit, setFlightDate, setDepAirport, setArrAirport, setNumSeat} = props

    return isEditing? (
        <tr>
            <td>
                <form onSubmit={submitEdit}>
                    <label className='form-label'>
                        Date:
                        <input
                        type='date'
                        className='form-control'
                        value={flightDate}
                        onChange={(e) => setFlightDate(e.target.value)}
                        />
                    </label>
                    <br/>
                    <label className='form-label'>
                        From:
                        <input
                        type='text'
                        className='form-control'
                        value={depAirport}
                        onChange={(e) => setDepAirport(e.target.value)}
                        />
                    </label>
                    <br/>
                    <label className='form-label'>
                        To:
                        <input
                        type='text'
                        className='form-control'
                        value={arrAirport}
                        onChange={(e) => setArrAirport(e.target.value)}
                        />
                    </label>
                    <br/>
                    <label className='form-label'>
                        Travelers:
                        <input
                        type='number'
                        className='form-control'
                        value={numSeat}
                        onChange={(e) => setNumSeat(e.target.value)}
                        />
                    </label>
                    <br/>
                    <button className='btn btn-primary' type='submit'>Submit</button>
                </form>
            </td>
        </tr>
    ) : (
        <tr>
            <td>{booking.bookingId}</td>
            <td>{booking.userEmail}</td>
            <td>{booking.flightDate}</td>
            <td>{booking.airline}</td>
            <td>{booking.flightNum}</td>
            <td>{booking.depAirport}</td>
            <td>{booking.arrAirport}</td>
            <td>{booking.numSeat}</td>
            <td>${booking.totalPrice}</td>
        </tr>
    )
}

export default EditBookingRow