import TravelForm from './TravelForm.jsx';
import GetBookingForm from './GetBookingForm.jsx';
import { Container } from 'react-bootstrap'

const Homepage = () => {
    return (
        <Container fluid className='border border-5 bg-custom'>
            <TravelForm />
            <br/>
            <GetBookingForm />
        </Container>
    )
}

export default Homepage