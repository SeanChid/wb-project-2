const TableRow = (props) => {

    const {flightData, selectedFlight, setSelectedFlight} = props

    const handleFlightSelection = (flight) => {
        
        setSelectedFlight((prevSelected) => (prevSelected === flight ? null : flight))
    }

    return (
        <tr key={flightData.flightNum}>
            <td>{flightData.airline}</td>
            <td>{flightData.flightNum}</td>
            <td>{flightData.flightDate}</td>
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