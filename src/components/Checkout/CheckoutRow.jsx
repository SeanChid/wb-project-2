import React from 'react'

const CheckoutRow = (props) => {

    const {numSeat, selectedFlight} = props

    return (
        <tr>
            <td>{selectedFlight.carrier.icao}</td>
            <td>{selectedFlight.flightNumber}</td>
            <td>{selectedFlight.departure.time.local}</td>
            <td>{numSeat}</td>
        </tr>
    )
}

export default CheckoutRow