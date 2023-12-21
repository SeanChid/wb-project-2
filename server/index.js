import express from "express";
import morgan from "morgan";
import ViteExpress from "vite-express"

const app = express()

app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))
app.use(morgan('dev'))

import handlerFunctions from "./controller.js";
const {getFlights, getBookings, getOneBooking, addBooking, putFlight, deleteBooking, editBooking} = handlerFunctions

app.get('/flights', getFlights)
app.get('/bookings', getBookings)
app.get('/booking/:bookingId', getOneBooking)
app.post('/booking', addBooking)
app.put('/booking/:bookingId', putFlight)
app.delete('/booking/:bookingId', deleteBooking)
app.put('/booking/edit/:bookingId', editBooking)

ViteExpress.listen(app, 3000, () => console.log("3000 is up and running"))