require('dotenv').config()

const mongoose = require('mongoose')
const dbConnection = process.env.DB
mongoose
    .connect(dbConnection, { useNewUrlParser: true , useUnifiedTopology: true},)
    .catch(err => {
        console.error('Connection error', err.message)
    })



module.exports = mongoose.connection
