import React from 'react'

const ConfirmFlightButton = (props) => {

    const {handleClick} = props

    return (
        <tr>
            <td></td>
            <td></td>
            <td>
                <button onClick={handleClick}>Confirm</button>
            </td>
        </tr>
    )
}

export default ConfirmFlightButton