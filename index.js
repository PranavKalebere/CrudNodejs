const express=require('express')
const mongoose=require('mongoose')
const bodyParser = require("body-parser");
const app=express()
require('dotenv').config()


app.use(bodyParser.json());    
app.use(bodyParser.urlencoded({
    extended: true
}));

mongoose.connect(process.env.Mongodb_Connection,{useNewUrlParser:true,useUnifiedTopology:true})
const db=mongoose.connection

db.on('error',(err)=>{
    console.log(err)
})

db.once('open',()=>{
    console.log("Database is connected ")
})

const controller=require('./controllers/clientContoller')
app.use('/api',controller)

app.listen(process.env.PORT,()=>{
    console.log("Server running on Port "+process.env.PORT)
})



