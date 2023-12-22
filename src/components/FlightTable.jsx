import axios from 'axios'

import TableHeader from './TableHeader.jsx'
import SelectFlightButton from './ConfirmFlightButton.jsx'
import TableRow from './TableRow.jsx'

import { useState, useEffect } from 'react'

const FlightTable = () => {
    return (
        <div>
            <table>
                <thead>
                    <TableHeader />
                </thead>

                <tbody>
                    <TableRow />
                </tbody>

                <tfoot>
                    <SelectFlightButton />
                </tfoot>
            </table>
        </div>
    )
}

export default FlightTable