const mongoose = require('mongoose')
require('dotenv').config()

const dbConnection = "mongodb+srv://yizhakg:Aa123456@cluster0.kcsau.mongodb.net/Books?retryWrites=true&w=majority"
mongoose
    .connect(dbConnection, { useNewUrlParser: true , useUnifiedTopology: true},)
    .catch(err => {
        console.error('Connection error', err.message)
    })

const db = mongoose.connection

module.exports = db
