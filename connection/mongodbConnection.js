const mongoose=require('mongoose')

const constant=require('../constant.json')

require('dotenv').config()


mongoose.connect(constant.Mongodb_Connection,{useNewUrlParser:true,useUnifiedTopology:true})
const db=mongoose.connection

db.on('error',(err)=>{
    console.log(err)
})

db.once('open',()=>{
    console.log("Database is connected ")
})
