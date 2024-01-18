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
            <Modal.Header className='bg-custom' closeButton>
                <Modal.Title>Confirm Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h3>Are you sure you want to delete this booking?</h3>
            </Modal.Body>
            <Modal.Footer className='bg-custom'>
                <Button variant='secondary' onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant='primary' onClick={handleDelete}>
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

        const options = {
            method: 'GET',
            url: 'https://flight-info-api.p.rapidapi.com/schedules',
            params: {
              version: 'v2',
              DepartureDateTime: flightDate,
              DepartureAirport: depAirport,
              ArrivalAirport: arrAirport,
              CodeType: 'IATA'
            },
            headers: {
              'X-RapidAPI-Key': '12e868868amsha19599d95cba5ebp12d252jsn3121cc4e2732',
              'X-RapidAPI-Host': 'flight-info-api.p.rapidapi.com',
            },
          }

        axios.request(options)
        .then((res) => {
            console.log(res.data.data)
            const flightData = res.data.data
            navigate('/flight-selection', {state: {booking, depAirport, arrAirport, numSeat, flightDate, flightData}})
        })
        .catch((theseHands) => {
            console.log(theseHands)
        })
    }

    
    return (
        <div>
            <h2>Booking Details:</h2>
            <br/>
            <Table striped>
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