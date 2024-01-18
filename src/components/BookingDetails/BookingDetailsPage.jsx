import BookingDetailsDisplay from './BookingDetailsDisplay.jsx'
import ReturnHomeButton from '../ReturnHomeButton.jsx'
import { Container } from 'react-bootstrap'

const BookingDetailsPage = () => {
    return (
        <Container fluid className='container border border-5 bg-custom'>
            <BookingDetailsDisplay />
            <ReturnHomeButton />
        </Container>
    )
}

export default BookingDetailsPage