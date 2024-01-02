import axios from 'axios'

import TableHeader from './TableHeader.jsx'
import SelectFlightButton from './ConfirmFlightButton.jsx'
import TableRow from './TableRow.jsx'

import { useState, useEffect } from 'react'

const FlightTable = () => {

    const [flightData, setFlightData] = useState([])

    useEffect(() => {
        axios.get('/flights')
        .then((res) => {
            console.log(res.data)
            setFlightData(res.data)
        })
        .catch((theseHands) => {
            console.log(theseHands)
        })
    }, [])

    const row = flightData.map((el) => <TableRow
        key={el.flightNum}
        flightData={el}
    />)

    return (
        <div>
            <table>
                <thead>
                    <TableHeader />
                </thead>

                <tbody>
                    {row}
                </tbody>

                <tfoot>
                    <SelectFlightButton />
                </tfoot>
            </table>
        </div>
    )
}

export default FlightTable