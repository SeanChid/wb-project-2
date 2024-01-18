import React from 'react'

const ConfirmFlightButton = (props) => {

    const {handleClick} = props

    return <button className='btn btn-primary' onClick={handleClick}>Confirm</button>
}

export default ConfirmFlightButton