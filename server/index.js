import express from "express";
import morgan from "morgan";
import ViteExpress from "vite-express"

const app = express()

app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))
app.use(morgan('dev'))

import handlerFunctions from "./controller.js";
const {getFlights, addFlight, getBookings, getOneBooking, addBooking, deleteBooking, editBooking} = handlerFunctions

app.get('/flights', getFlights)
app.post('/flight', addFlight)
app.get('/bookings', getBookings)
app.get('/booking', getOneBooking)
app.post('/booking', addBooking)
app.delete('/booking/:bookingId', deleteBooking)
app.put('/booking/:bookingId', editBooking)

ViteExpress.listen(app, 3000, () => console.log("3000 is up and running"))