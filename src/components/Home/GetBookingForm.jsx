import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { Modal, Button} from 'react-bootstrap'

const GetBookingForm = () => {
    const navigate = useNavigate()

    const [bookingId, setBookingId] = useState(0)
    const [showErrorModal, setShowErrorModal] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.get(`/booking/${bookingId}`)
        .then((res) => {
            const booking = res.data

            if (booking) {
                navigate('/edit-booking', {state: {booking}})
            } else {
                setErrorMessage('Invalid Booking ID')
                setShowErrorModal(true)
            }
        })
        .catch((theseHands) => {
            console.log(theseHands)
        })
    }

    const handleCloseErrorModal = () => {
        setShowErrorModal(false)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h3>Already have a reservation?</h3>
                <label>
                    Enter Your Booking ID:
                    <input
                        type='number'
                        value={bookingId}
                        onChange={(e) => setBookingId(e.target.value)}
                    />
                </label>
                <br/>

                <button type='submit'>Submit</button>
            </form>

            <Modal show={showErrorModal} onHide={handleCloseErrorModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Error</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{errorMessage}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleCloseErrorModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default GetBookingForm