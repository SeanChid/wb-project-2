import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { Modal, Button } from 'react-bootstrap'

const GetBookingForm = () => {
    const navigate = useNavigate()

    const [bookingId, setBookingId] = useState(0)
    const [email, setEmail] = useState('')
    const [showErrorModal, setShowErrorModal] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.get(`/booking/?bookingId=${bookingId}&userEmail=${email}`)
        .then((res) => {
            const booking = res.data

            if (booking && email) {
                navigate('/edit-booking', {state: {booking}})
            } else {
                setErrorMessage('Invalid Booking ID or Email')
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
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <h3>Already have a reservation?</h3>
                <label className='form-label'>
                    Enter Your Booking ID:
                    <input
                        type='number'
                        value={bookingId}
                        className='form-control'
                        onChange={(e) => setBookingId(e.target.value)}
                    />
                </label>
                <br/>
                <label className='form-label'>
                    Enter your email:
                    <input 
                        type='email'
                        value={email}
                        className='form-control'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <br/>
                <button type='submit' className='btn btn-primary'>Submit</button>
            </form>

            <Modal show={showErrorModal} onHide={handleCloseErrorModal} centered>
                <Modal.Header closeButton className='bg-custom'>
                    <Modal.Title>Error</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>{errorMessage}</h4>
                </Modal.Body>
                <Modal.Footer className='bg-custom'>
                    <Button variant="primary" onClick={handleCloseErrorModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default GetBookingForm