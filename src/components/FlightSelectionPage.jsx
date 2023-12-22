import React from 'react'
import axios from 'axios'
import ReturnHomeButton from './ReturnHomeButton.jsx'
import FlightTable from './FlightTable.jsx'

const FlightSelectionPage = () => {
    return (
        <div>
            <h1>This is the flight selection page</h1>
            <FlightTable />
            <ReturnHomeButton />
        </div>
        )
}

export default FlightSelectionPage