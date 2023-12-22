import React from 'react'

const ConfirmFlightButton = (props) => {

    const {putFlight} = props

    return (
        <tr>
            <td></td>
            <td>
                <button onClick={putFlight}>Confirm</button>
            </td>
        </tr>
    )
}

export default ConfirmFlightButton