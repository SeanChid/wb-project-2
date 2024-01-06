import { Booking, Flight } from "./db/model.js";

const handlerFunctions = {

    getFlights: async (req, res) => {
        const flightData = await Flight.findAll()
        res.send(flightData)
    },

    getBookings: async (req, res) => {
        const bookingData = await Booking.findAll()
        res.send(bookingData)
    },

    getOneBooking: async (req, res) => {
        const {bookingId} = req.params
        const booking = await Booking.findByPk(bookingId)
        res.send(booking)
    },

    addBooking: async (req, res) => {
        const {flightNum, numSeat} = req.body
        
        const flight = await Flight.findByPk(flightNum)

        const id = Math.floor(1000000 + Math.random() * 9000000)

        const newBooking = {
            bookingId: id,
            flightNum,
            numSeat
        }

        flight.availSeats -= numSeat
        newBooking.totalPrice = flight.price * numSeat

        const bookingData = await Booking.create(newBooking)
        await flight.save()

        res.send(bookingData)
    },

    deleteBooking: async (req, res) => {
        const {bookingId} = req.params

        const currentBooking = await Booking.findByPk(bookingId)
        const flight = await Flight.findByPk(currentBooking.flightNum)

        if (currentBooking.flightNum === null) {
            await currentBooking.destroy()
        } else {
            flight.availSeats += currentBooking.numSeat
    
            await currentBooking.destroy()
            await flight.save()
        }

        const bookingData = await Booking.findAll()
        res.send(bookingData)
    },

    editBooking: async (req, res) => {
        const {bookingId} = req.params
        const {flightNum, numSeat} = req.body

        const currentBooking = await Booking.findByPk(bookingId)
        const currentFlight = await Flight.findByPk(currentBooking.flightNum)
        const newFlight = await Flight.findByPk(flightNum)

        if (currentBooking.flightNum === newFlight.flightNum) {
            currentBooking.setFlight(currentFlight)
            currentFlight.availSeats += currentBooking.numSeat
            currentFlight.availSeats -= numSeat
            currentBooking.totalPrice = currentFlight.price * numSeat
            
            await currentFlight.save()
        } else {
            currentBooking.setFlight(currentFlight)
            currentFlight.availSeats += currentBooking.numSeat
            currentBooking.setFlight(newFlight)
            newFlight.availSeats -= numSeat
            currentBooking.totalPrice = newFlight.price * numSeat

            await currentFlight.save()
            await newFlight.save()
        }
        
        currentBooking.numSeat = numSeat
        
        await currentBooking.save()

        const bookingData = await Booking.findAll()
        res.send(bookingData)
    }

}

export default handlerFunctions