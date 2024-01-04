import React from 'react'

const CheckoutRow = (props) => {

    const {currentBooking} = props

    return (
        <tr>
            <td>{currentBooking.flightNum}</td>
            <td>{currentBooking.numSeat}</td>
            <td>${currentBooking.totalPrice}</td>
        </tr>
    )
}

export default CheckoutRow