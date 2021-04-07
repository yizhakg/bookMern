const mongoose = require('mongoose')
require('dotenv').config()

const dbConnection = process.env.DBCONNECTION
mongoose
    .connect(dbConnection, { useNewUrlParser: true , useUnifiedTopology: true},)
    .catch(err => {
        console.error('Connection error', err.message)
    })

const db = mongoose.connection

module.exports = db
