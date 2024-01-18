import CheckoutDisplay from './CheckoutDisplay.jsx'
import ReturnToFlightSelection from './ReturnToFlightSelection.jsx'
import { Container } from 'react-bootstrap'

const CheckoutPage = () => {
    return (
        <Container fluid className='border border-5 bg-custom'>
            <CheckoutDisplay />
            <ReturnToFlightSelection />
        </Container>
    )
}

export default CheckoutPage