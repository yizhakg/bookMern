//app requires
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const chalk = require("chalk");
const app = express();
const db = require("./DB");// mongo connection require
const PORT = process.env.PORT || 8080;
const path = require('path'); 
//app settings
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
db.on('error',()=>console.log("connection error"));

// import routers
const bookRouter = require('./routes/book-router')

// ############################server upload settings#######################
if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, '../client/build')));
    // Handle React routing, return all requests to React app
    app.get('*', (req, res)=>{
        res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
    });
}


//app up and port setting
app.listen(PORT, () => {
  console.log(chalk.bgGreen.bold(`MERN server is up with port:${PORT}✌ `));
});
app.use('/books',bookRouter)