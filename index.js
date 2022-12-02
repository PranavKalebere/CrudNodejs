const express = require('express')
const bodyParser = require("body-parser");
const app = express()
const constant = require('./constant/constant.json')
const controller = require('./controllers/clientContoller')

const userController = require('./controllers/userController')

require('./connection/mongodbConnection')

require('dotenv').config()


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//Make uploads folder public
app.use('/uploads', express.static(`${__dirname}/uploads`));


app.use('/api', controller,userController)

// app.use('/apiUser', userController)

app.listen(constant.PORT, () => {
    console.log("Server running on Port " + constant.PORT)
})



