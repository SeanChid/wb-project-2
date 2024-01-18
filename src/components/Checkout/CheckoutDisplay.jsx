import axios from 'axios'

import CheckoutHeader from './CheckoutHeader.jsx'
import CheckoutRow from './CheckoutRow.jsx'
import CheckoutConfirm from './CheckoutConfirm.jsx'

import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Table, Modal, Button } from 'react-bootstrap'

const CheckoutDisplay = () => {

    const location = useLocation()
    const {numSeat, selectedFlight, seatData, depAirport, arrAirport, flightDate} = location.state

    const [booking, setBooking] = useState([])
    const [email, setEmail] = useState('')
    const [showErrorModal, setShowErrorModal] = useState(false)

    const navigate = useNavigate()

    const handleCloseErrorModal = () => {
        setShowErrorModal(false)
    }

    const handleClick = () => {
        if (email !== '') {
            axios.post('/booking', 
            {
            numSeat: numSeat,
            scheduleInstanceKey: selectedFlight.scheduleInstanceKey,
            userEmail: email,
            airline: selectedFlight.carrier.icao,
            flightNum: selectedFlight.flightNumber,
            flightDate: flightDate,
            depAirport: depAirport,
            arrAirport: arrAirport
            })
            .then((res) => {
                setBooking(res.data)
                navigate('/booking-details', {state: {booking: res.data}})
            })
            .catch((theseHands) => {
                console.log(theseHands)
            })
        } else {
            setShowErrorModal(true)
        }
    }

    return (
        <div>
            <h2>Checkout Details</h2>
            <Table striped>
                <thead>
                    <CheckoutHeader />
                </thead>

                <tbody>
                    <CheckoutRow numSeat={numSeat} selectedFlight={selectedFlight}/>
                </tbody>
            </Table>
            <h3>
                Total: ${seatData[selectedFlight.scheduleInstanceKey].price * numSeat}
            </h3>
            <label className='form-label'>
                Enter your email:
                <input
                    type='email'
                    className='form-control'
                    value={email}
                    onChange={(e) => {setEmail(e.target.value)}}
                />
            </label>
            <br/>
            <CheckoutConfirm handleClick={handleClick}/>

            <Modal show={showErrorModal} onHide={handleCloseErrorModal} centered>
                <Modal.Header closeButton className='bg-custom'>
                    <Modal.Title>Error</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Please enter an email</h4>
                </Modal.Body>
                <Modal.Footer class>
                    <Button variant="danger" onClick={handleCloseErrorModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default CheckoutDisplay