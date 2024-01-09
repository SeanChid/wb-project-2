import React from 'react'

const ConfirmFlightButton = (props) => {

    const {handleClick} = props

    return <button onClick={handleClick}>Confirm</button>
}

export default ConfirmFlightButton