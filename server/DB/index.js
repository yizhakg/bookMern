const mongoose = require('mongoose')
require('dotenv').config()

const dbConnection = process.env.DB
mongoose
    .connect(dbConnection, { useNewUrlParser: true , useUnifiedTopology: true},)
    .catch(err => {
        console.error('Connection error', err.message)
    })

const db = mongoose.connection

module.exports = db
