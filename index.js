const express = require('express')
const bodyParser = require("body-parser");
const app = express()
const constant = require('./constant/constant.json')
const controller = require('./controllers/articleContoller')

const userController = require('./controllers/userController')

const logger= require('./logger/logger');


require('./connection/mongodbConnection')



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//Make uploads folder public
app.use('/uploads', express.static(`${__dirname}/uploads`));

app.use('/api', controller)
app.use('/api', userController)

app.listen(constant.PORT, () => {
    
    logger.info("Server running on Port " + constant.PORT)

})



