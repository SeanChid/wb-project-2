import React from 'react'

const CheckoutRow = (props) => {

    const {numSeat, selectedFlight} = props

    return (
        <tr>
            <td>{selectedFlight.airline}</td>
            <td>{selectedFlight.flightNum}</td>
            <td>{numSeat}</td>
        </tr>
    )
}

export default CheckoutRow