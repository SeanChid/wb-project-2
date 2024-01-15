import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Modal, Button } from 'react-bootstrap'

const TravelForm = () => {

    const [depAirport, setDepAirport] = useState('')
    const [arrAirport, setArrAirport] = useState('')
    const [numSeat, setNumSeat] = useState(0)
    const [flightDate, setFlightDate] = useState('')
    const [showErrorModal, setShowErrorModal] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const navigate = useNavigate()
    
    const handleSubmit = (e) => {
        e.preventDefault()

        if (!depAirport || !arrAirport || numSeat <= 0 || !flightDate) {
            setErrorMessage('Please input valid information')
            setShowErrorModal(true)
            return
        }

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

        // axios.get(`/flights?flightDate=${flightDate}&depAirport=${depAirport}&arrAirport=${arrAirport}`)
        axios.request(options)
        .then((res) => {
            console.log(res.data.data)
            const flightData = res.data.data
            navigate('/flight-selection', {state: {depAirport, arrAirport, numSeat, flightDate, flightData}})
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
                <h3>Enter the following information:</h3>
                <label>
                    From:
                    <input
                        type="text"
                        value={depAirport}
                        onChange={(e) => setDepAirport(e.target.value)}
                    />
                </label>
                <br/>
                <label>
                    To:
                    <input
                        type="text"
                        value={arrAirport}
                        onChange={(e) => setArrAirport(e.target.value)}
                    />
                </label>
                <br/>
                <label>
                    How many travelers?:
                    <input
                        type="number"
                        value={numSeat}
                        onChange={(e) => setNumSeat(e.target.value)}
                    />
                </label>
                <br/>
                <label>
                    Date of departure:
                    <input
                        type="date"
                        value={flightDate}
                        onChange={(e) => setFlightDate(e.target.value)}
                    />
                </label>
                <br/>

                <button type="submit">Search Flights</button>
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

export default TravelForm