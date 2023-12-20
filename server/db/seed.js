import { Booking, Flight } from "./model.js";

const UA123 = await Flight.create({
    flightNum: 123,
    flightDate: '2024-06-25',
    airline: 'United',
    depAirport: 'DEN',
    arrAirport: 'SLC',
    availSeats: 200,
    price: 250
})

const SW1525 = await Flight.create({
    flightNum: 1525,
    flightDate: '2024-03-14',
    airline: 'Southwest',
    depAirport: 'DEN',
    arrAirport: 'PDX',
    availSeats: 20,
    price: 70
})

const sampBooking = await Booking.create({
    bookingId: 3469,
    flightNum: 123,
    numSeat: 3
})