const EditBookingHeader = (props) => {

    const {isEditing} = props

    return isEditing? (
        <tr>
            <th>Edit</th>
        </tr>
    ) : (
        <tr>
            <th>Booking ID</th>
            <th>Date</th>
            <th>Airline</th>
            <th>Flight</th>
            <th>From</th>
            <th>To</th>
            <th>Travelers</th>
            <th>Total Price</th>
        </tr>
    )
}

export default EditBookingHeader