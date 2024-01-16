import { Booking, Flight } from "./model.js";

// const UA123 = await Flight.create({
//     flightNum: 123,
//     flightDate: '2024-06-25',
//     airline: 'United',
//     depAirport: 'DEN',
//     arrAirport: 'SLC',
//     availSeats: 200,
//     price: 250
// })

// const SW1525 = await Flight.create({
//     flightNum: 1525,
//     flightDate: '2024-03-14',
//     airline: 'Southwest',
//     depAirport: 'DEN',
//     arrAirport: 'PDX',
//     availSeats: 20,
//     price: 70
// })

// const DL815 = await Flight.create({
//     flightNum: 815,
//     flightDate: '2024-10-07',
//     airline: 'Delta',
//     depAirport: 'SLC',
//     arrAirport: 'SNA',
//     availSeats: 100,
//     price: 270
// })

// const AA7521 = await Flight.create({
//     flightNum: 7521,
//     flightDate: '2024-10-07',
//     airline: 'American',
//     depAirport: 'SLC',
//     arrAirport: 'DFW',
//     availSeats: 150,
//     price: 310
// })

const flight1 = await Flight.create({
    scheduleInstanceKey: 'ijsoijoisajdoj',
    availSeats: 30,
    price: 250
})

const flight2 = await Flight.create({
    scheduleInstanceKey: 'oshdiosajdojs',
    availSeats: 50,
    price: 300
})

const flight3 = await Flight.create({
    scheduleInstanceKey: 'syjkhskjashs',
    availSeats: 100,
    price: 100
})