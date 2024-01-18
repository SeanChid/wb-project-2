const TableRow = (props) => {

    const {flightData, seatData, selectedFlight, setSelectedFlight} = props
    // console.log(seatData)

    const handleFlightSelection = (flight) => {
        
        setSelectedFlight((prevSelected) => (prevSelected === flight ? null : flight))
    }

    return (
        <tr key={flightData.scheduleInstanceKey}>
            <td>{flightData.carrier.iata}</td>
            <td>{flightData.flightNumber}</td>
            <td>{flightData.departure.time.local}</td>
            <td>{seatData.availSeats}</td>
            <td>${seatData.price}</td>
            <td>
                <button className='btn btn-primary' onClick={() => handleFlightSelection(flightData)}>
                    Select
                </button>
            </td>
        </tr>
    )
}

export default TableRow