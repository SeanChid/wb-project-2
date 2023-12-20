import { Booking, Flight } from "./db/model.js";

const handlerFunctions = {

    getFlights: async (req, res) => {
        const flightData = await Flight.findAll()
        res.send(flightData)
    },

    getBookings: async (req, res) => {
        const bookingsData = await Booking.findAll()
        res.send(bookingsData)
    },

    getOneBooking: async (req, res) => {
        const {bookingId} = req.params
        const booking = await Booking.findByPk(bookingId)
        res.send(booking)
    },

    addBooking: async (req, res) => {
        const {numSeat} = req.body

        const id = Math.floor(1000000 + Math.random() * 9000000)

        const newBooking = {
            bookingId: id,
            numSeat
        }

        await Booking.create(newBooking)
        const bookingsData = await Booking.findAll()
        res.send(bookingsData)
    },

    putFlight: async (req, res) => {
        const {bookingId} = req.params
        const {flightNum} = req.body

        const currentBooking = await Booking.findByPk(bookingId)
        const flight = await Flight.findByPk(flightNum)

        currentBooking.setFlight(flight)

        flight.availSeats = flight.availSeats - currentBooking.numSeat
        currentBooking.totalPrice = flight.price * currentBooking.numSeat

        await currentBooking.save()
        await flight.save()

        const bookingsData = await Booking.findAll()
        res.send(bookingsData)
    },

    deleteBooking: async (req, res) => {
        const {bookingId} = req.params

        const currentBooking = await Booking.findByPk(bookingId)
        const flight = await Flight.findByPk(currentBooking.flightNum)

        flight.availSeats = flight.availSeats + currentBooking.numSeat

        await currentBooking.destroy()
        await flight.save()

        const bookingsData = await Booking.findAll()
        res.send(bookingsData)
    },

    editBooking: async (req, res) => {
        const {bookingId} = req.params

    }

}

export default handlerFunctions