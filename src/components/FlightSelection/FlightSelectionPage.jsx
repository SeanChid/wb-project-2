import ReturnHomeButton from '../ReturnHomeButton.jsx'
import FlightTable from './FlightTable.jsx'
import { Container } from 'react-bootstrap'

const FlightSelectionPage = () => {
    return (
        <Container fluid className='border border-5 bg-custom'>
            <FlightTable />
            <ReturnHomeButton />
        </Container>
        )
}

export default FlightSelectionPage