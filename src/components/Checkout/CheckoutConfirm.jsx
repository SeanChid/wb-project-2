import React from 'react'

const CheckoutConfirm = (props) => {

    const {handleClick} = props

    return (
        <tr>
            <td></td>
            <td>
                <button onClick={handleClick}>Confirm</button>
            </td>
        </tr>
    )
}

export default CheckoutConfirm