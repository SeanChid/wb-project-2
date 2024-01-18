import axios from 'axios'
import DatePicker from 'react-datepicker'
import { format } from 'date-fns'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Modal, Button } from 'react-bootstrap'
import 'react-datepicker/dist/react-datepicker.css'

const TravelForm = () => {

    const [depAirport, setDepAirport] = useState('')
    const [arrAirport, setArrAirport] = useState('')
    const [numSeat, setNumSeat] = useState(0)
    const [flightDate, setFlightDate] = useState('')
    const [showErrorModal, setShowErrorModal] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const formatDate = (date) => {
        return format(date, 'yyyy-MM-dd')
    }

    const navigate = useNavigate()
    
    const handleSubmit = (e) => {
        e.preventDefault()

        if (!depAirport || !arrAirport || numSeat <= 0 || !flightDate) {
            setErrorMessage('Please input valid information')
            setShowErrorModal(true)
            return
        }

        const formattedDate = formatDate(flightDate)

        const options = {
            method: 'GET',
            url: 'https://flight-info-api.p.rapidapi.com/schedules',
            params: {
              version: 'v2',
              DepartureDateTime: formattedDate,
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
            const flightData = res.data.data
            navigate('/flight-selection', {state: {depAirport, arrAirport, numSeat, flightDate: formattedDate, flightData}})
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
                <h1>Welcome to Sky Booking!</h1>
                <h3>Please enter the following information:</h3>
                <label className='form-label'>
                    From
                    <input
                        type="text"
                        className='form-control'
                        value={depAirport}
                        onChange={(e) => setDepAirport(e.target.value)}
                    />
                </label>
                <br/>
                <label className='form-label'>
                    To
                    <input
                        type="text"
                        className='form-control'
                        value={arrAirport}
                        onChange={(e) => setArrAirport(e.target.value)}
                    />
                </label>
                <br/>
                <label className='form-label'>
                    How many travelers?
                    <input
                        type="number"
                        className='form-control'
                        value={numSeat}
                        onChange={(e) => setNumSeat(e.target.value)}
                    />
                </label>
                <br/>
                <label className='form-label d-flex flex-column align-items-center'>
                    Date of departure
                    <DatePicker
                        selected={flightDate}
                        onChange={(date) => setFlightDate(date)}
                        className='form-control'
                    />
                </label>

                <button type="submit" className='btn btn-primary'>Search Flights</button>
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

export default TravelForm