import { Sequelize } from "sequelize";

async function connectToDb(dbURI) {
    console.log(`Connecting to DB: ${dbURI}`)

    const sequelize = new Sequelize(dbURI, {
        logging: console.log, //This sets where the logs go, set to false to disable
        define: {
            timestamps: false, // This sets the automatic generation of created_at and updated_at columns
            underscored: true // This will tell it to use underscores rather than camelCase for column names
        }
    })

    try {
        await sequelize.authenticate() // Make sure sequelize can connect securely to database
        console.log('Connected successfully to DB!')
    } catch (error) {
        console.log('Unable to connect to DB', error)
    }

    return sequelize
}

export default connectToDb