import axios from 'axios'
import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import EditBookingHeader from './EditBookingHeader.jsx'
import EditBookingRow from './EditBookingRow.jsx'
import ModeButtons from './ModeButtons.jsx'
import { Modal, Button, Table } from 'react-bootstrap'

const DeleteConfirmationModal = ({show, handleClose, handleDelete}) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Confirm Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h3>Are you sure you want to delete this booking?</h3>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant='danger' onClick={handleDelete}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

const EditBookingDisplay = () => {

    const location = useLocation()
    const {booking} = location.state

    const [isEditing, setIsEditing] = useState(false)
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)
    const [depAirport, setDepAirport] = useState(booking.depAirport)
    const [arrAirport, setArrAirport] = useState(booking.arrAirport)
    const [numSeat, setNumSeat] = useState(booking.numSeat)
    const [flightDate, setFlightDate] = useState(booking.flightDate)

    const changeEditMode = () => setIsEditing(true)
    const changeNormalMode = () => setIsEditing(false)

    const handleDelete= () => {
        axios.delete(`/booking/${booking.bookingId}`)
        .then((res) => {
            console.log('booking deleted')
            navigate('/')
        })
        .catch((theseHands) => {
            console.log(theseHands)
        })
        .finally(() => {
            setShowDeleteConfirmation(false)
        })
    }

    const showDeleteModal = () => setShowDeleteConfirmation(true)
    const hideDeleteModal = () => setShowDeleteConfirmation(false)

    const navigate = useNavigate()

    const submitEdit = (e) => {
        e.preventDefault()
        axios.get(`/flights?flightDate=${flightDate}&depAirport=${depAirport}&arrAirport=${arrAirport}`)
        .then((res) => {
            const flightData = res.data
            navigate('/flight-selection', {state: {booking, flightData, numSeat}})
        })
        .catch((theseHands) => {
            console.log(theseHands)
        })
    }

    
    return (
        <div>
            <h2>Booking Details:</h2>
            <br/>
            <Table striped bordered hover>
                <thead>
                    <EditBookingHeader 
                        isEditing={isEditing}
                    />
                </thead>

                <tbody>
                    <EditBookingRow
                        booking={booking}
                        isEditing={isEditing}
                        setFlightDate={setFlightDate}
                        setDepAirport={setDepAirport}
                        setArrAirport={setArrAirport}
                        setNumSeat={setNumSeat}
                        flightDate={flightDate}
                        depAirport={depAirport}
                        arrAirport={arrAirport}
                        numSeat={numSeat}
                        submitEdit={submitEdit}
                    />
                </tbody>
            </Table>
            <ModeButtons
                isEditing={isEditing}
                changeEditMode={changeEditMode}
                handleDelete={showDeleteModal}
                changeNormalMode={changeNormalMode}
            />
            <DeleteConfirmationModal
                show={showDeleteConfirmation}
                handleClose={hideDeleteModal}
                handleDelete={handleDelete}
            />
        </div>
    )
}

export default EditBookingDisplay