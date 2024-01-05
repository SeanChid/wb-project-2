import React from 'react'

const CheckoutRow = (props) => {

    const {numSeat, selectedFlight} = props

    return (
        <tr>
            <td>{selectedFlight.flightNum}</td>
            <td>{numSeat}</td>
            <td>${selectedFlight.price * numSeat}</td>
        </tr>
    )
}

export default CheckoutRow