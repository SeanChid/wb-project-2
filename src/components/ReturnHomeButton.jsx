import React from 'react'
import { useNavigate } from 'react-router-dom'

const ReturnHomeButton = () => {
    const navigate = useNavigate()

    const handleButtonClick = () => {
        navigate('/')
    }
    
    return <button onClick={handleButtonClick}>Return Home</button>
}

export default ReturnHomeButton