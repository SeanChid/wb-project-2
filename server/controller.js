import { Booking, Flight } from "./db/model.js"
import { Op } from 'sequelize'

const handlerFunctions = {

    getFlights: async (req, res) => {
        const {flightDate, depAirport, arrAirport } = req.query

        const query = {}
        if (flightDate) {
            const startDate = new Date(`${flightDate}T00:00:00Z`)
            const endDate = new Date(`${flightDate}T23:59:59Z`)
            query.flightDate = {
                [Op.gte]: startDate,
                [Op.lt]: endDate
            }     
        }
        if (depAirport) {
            query.depAirport = depAirport
        }
        if (arrAirport) {
            query.arrAirport= arrAirport
        }

        const flightData = await Flight.findAll({
            where: query
        })

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
        const {airline, flightNum, flightDate, depAirport, arrAirport, numSeat} = req.body
        
        const flight = await Flight.findByPk(flightNum)

        const id = Math.floor(1000000 + Math.random() * 9000000)

        const newBooking = {
            bookingId: id,
            airline,
            flightNum,
            flightDate,
            depAirport,
            arrAirport,
            numSeat
        }

        newBooking.airline = flight.airline
        newBooking.flightDate = flight.flightDate
        newBooking.depAirport = flight.depAirport
        newBooking.arrAirport = flight.arrAirport

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
            currentBooking.flightDate = newFlight.flightDate
            currentBooking.airline = newFlight.airline
            currentBooking.depAirport = newFlight.depAirport
            currentBooking.arrAirport = newFlight.arrAirport
            currentBooking.totalPrice = newFlight.price * numSeat

            await currentFlight.save()
            await newFlight.save()
        }
        
        currentBooking.numSeat = numSeat
        
        await currentBooking.save()

        const bookingData = await Booking.findByPk(bookingId)
        res.send(bookingData)
    }

}

export default handlerFunctions