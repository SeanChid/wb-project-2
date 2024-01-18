import { useNavigate } from 'react-router-dom'

const ReturnHomeButton = () => {
    const navigate = useNavigate()

    const buttonStyle = {
        position: 'fixed',
        top: '10px',
        left: '10px'
    }

    const handleButtonClick = () => {
        navigate('/')
    }
    
    return <button className='btn btn-primary' style={buttonStyle} onClick={handleButtonClick}>Return Home</button>
}

export default ReturnHomeButton