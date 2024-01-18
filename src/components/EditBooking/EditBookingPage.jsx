import ReturnHomeButton from '../ReturnHomeButton.jsx'
import EditBookingDisplay from './EditBookingDisplay.jsx'
import { Container } from 'react-bootstrap'

const EditBookingPage = () => {
    return (
        <Container fluid className='border border-5 bg-custom'>
            <EditBookingDisplay />
            <ReturnHomeButton />
        </Container>
    )
}

export default EditBookingPage