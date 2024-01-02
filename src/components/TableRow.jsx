import { useState, useEffect } from 'react'

const TableRow = (props) => {

    const {flightData} = props

    const [selectedFlight, setSelectedFlight] = useState(null)

    useEffect(() => {
        console.log(selectedFlight)
    }, [selectedFlight])

    const handleFlightSelection = (flightNum) => {
        setSelectedFlight(flightNum)
    }

    return (
        <tr key={flightData.flightNum}
        className={selectedFlight === flightData.flightNum ? 'selected' : ''}>
            <td>{flightData.airline}</td>
            <td>{flightData.flightNum}</td>
            <td>{flightData.flightDate}</td>
            <td>{flightData.availSeats}</td>
            <td>{flightData.price}</td>
            <td>
                <button onClick={() => handleFlightSelection(flightData.flightNum)}>
                    Select
                </button>
            </td>
        </tr>
    )
}

export default TableRow