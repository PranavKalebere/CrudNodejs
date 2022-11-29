const express = require('express')
const bodyParser = require("body-parser");
const app = express()
const constant = require('./constant.json')

const db = require('./connection/mongodbConnection')

require('dotenv').config()


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//Make uploads folder public
app.use('/uploads', express.static(`${__dirname}/uploads`));


const controller = require('./controllers/clientContoller')
app.use('/api', controller)

app.listen(constant.PORT, () => {
    console.log("Server running on Port " + constant.PORT)
})



