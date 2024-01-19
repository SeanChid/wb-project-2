import TableHeader from './TableHeader.jsx'
import ConfirmFlightButton from './ConfirmFlightButton.jsx'
import TableRow from './TableRow.jsx'
import { Container } from 'react-bootstrap'

import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Table, Modal, Button } from 'react-bootstrap'

const FlightTable = () => {

    const location = useLocation()
    const {depAirport, arrAirport, numSeat, flightDate, flightData} = location.state
    let {booking} = location.state

    const [seatData, setSeatData] = useState([])
    const [selectedFlight, setSelectedFlight] = useState(null)
    const [showErrorModal, setShowErrorModal] = useState(false)

    useEffect(() => {

        if (flightData.length > 0) {
            const createSeatDataInstances = () => {
                const promises = flightData.map(flight => {
                    return axios.post('/flight', {scheduleInstanceKey: flight.scheduleInstanceKey})
                    .then((res) => {
                        setSeatData(prevSeatData => ({
                            ...prevSeatData,
                            [flight.scheduleInstanceKey]: res.data
                        }))
                    })
                    .catch((theseHands) => {
                        console.log(theseHands)
                    })
                })

                Promise.all(promises)
                .then(() => {
                    console.log('All seat Instances created')
                })
                .catch((theseHands) => {
                    console.log(theseHands)
                })
            }

            createSeatDataInstances()
        }
    }, [flightData])

    const navigate = useNavigate()

    const row = flightData.map((el) => <TableRow
        key={el.scheduleInstanceKey}
        flightData={el}
        seatData={seatData[el.scheduleInstanceKey] || {}}
        selectedFlight={selectedFlight}
        setSelectedFlight={setSelectedFlight}
    />)

    const handleCloseErrorModal = () => {
        setShowErrorModal(false)
    }

    const handleClick = () => {
        if (selectedFlight !== null) {
            if (booking === undefined) {
                navigate('/confirm-booking', {state: {numSeat, selectedFlight, seatData, depAirport, arrAirport, flightDate, flightData}})
            } else {
                axios.put(`/booking/${booking.bookingId}`,
                {
                    scheduleInstanceKey: selectedFlight.scheduleInstanceKey,
                    numSeat: numSeat,
                    flightDate: flightDate,
                    airline: selectedFlight.carrier.iata,
                    flightNum: selectedFlight.flightNumber,
                    depAirport: depAirport,
                    arrAirport: arrAirport
                })
                .then((res) => {
                    // console.log(res.data)
                    booking = res.data
                    navigate(`/edit-booking`, {state: {booking}})
                })
                .catch((theseHands) => {
                    console.log(theseHands)
                })
            }
        } else {
            setShowErrorModal(true)
        }
    }

    return (
        <Container fluid>
            <h2>Select a flight:</h2>
            <h3>Showing flights from {depAirport} to {arrAirport} on {flightDate}</h3>
            <Table striped>
                <thead>
                    <TableHeader />
                </thead>

                <tbody>
                    {row}
                </tbody>
            </Table>
            <ConfirmFlightButton handleClick={handleClick}/>

            <Modal show={showErrorModal} onHide={handleCloseErrorModal} centered>
                <Modal.Header closeButton className='bg-custom'>
                    <Modal.Title>Error</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Please select a flight</h4>
                </Modal.Body>
                <Modal.Footer className='bg-custom'>
                    <Button variant="primary" onClick={handleCloseErrorModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}

export default FlightTable