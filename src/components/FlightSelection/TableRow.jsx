const TableRow = (props) => {

    const {flightData, selectedFlight, setSelectedFlight} = props

    const handleFlightSelection = (flight) => {
        
        setSelectedFlight((prevSelected) => (prevSelected === flight ? null : flight))
    }

    return (
        <tr key={flightData.flightNumber}>
            <td>{flightData.carrier.iata}</td>
            <td>{flightData.flightNumber}</td>
            <td>{flightData.departure.time.local}</td>
            <td>{flightData.availSeats}</td>
            <td>${flightData.price}</td>
            <td>
                <button onClick={() => handleFlightSelection(flightData)}>
                    Select
                </button>
            </td>
        </tr>
    )
}

export default TableRow