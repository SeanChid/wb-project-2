import { DataTypes, Model } from 'sequelize'
import connectToDb from './db.js'
import url from 'url'
import util from 'util'

const db = await connectToDb('postgres:///bookings')

class Booking extends Model {
    [util.inspect.custom]() {
        return this.toJSON()
    }
}

Booking.init(
    {
        bookingId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            unique: true
        },
        flightDate: {
            type: DataTypes.DATE,
            get() {
                const rawValue = this.getDataValue('flightDate')
                return rawValue ? rawValue.toISOString().split('T')[0] : null
            }
        },
        airline: {
            type: DataTypes.STRING
        },
        flightNum: {
            type: DataTypes.INTEGER
        },
        depAirport: {
            type: DataTypes.STRING
        },
        arrAirport: {
            type: DataTypes.STRING
        },
        numSeat: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        totalPrice: {
            type: DataTypes.INTEGER
        }
    }, {
        sequelize: db
    }
)

class Flight extends Model {
    [util.inspect.custom]() {
        return this.toJSON()
    }
}

Flight.init(
    {
        flightNum: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        flightDate: {
            type: DataTypes.DATE,
            allowNull: false,
            get() {
                const rawValue = this.getDataValue('flightDate')
                return rawValue ? rawValue.toISOString().split('T')[0] : null
            }
        },
        airline: {
            type: DataTypes.STRING
        },
        depAirport: {
            type: DataTypes.STRING,
            allowNull: false
        },
        arrAirport: {
            type: DataTypes.STRING,
            allowNull: false
        },
        availSeats: {
            type: DataTypes.INTEGER
        },
        price: {
            type: DataTypes.INTEGER
        }
    }, {
        sequelize: db
    }
)

Flight.hasMany(Booking, {foreignKey: 'flightNum'})

Booking.belongsTo(Flight, {foreignKey: 'flightNum'})

if (process.argv[1] === url.fileURLToPath(import.meta.url)) {
    console.log('Syncing database...');
    await db.sync();
    console.log('Finished syncing database!');
  }

export { Booking, Flight }