
//It's a MongoDB object modeling tool designed to work in an asynchronous environment
const mongoose=require('mongoose')

const constant=require('../constant/constant.json')

//Connection is made to the DataBade
mongoose.connect(constant.Mongodb_Connection,{useNewUrlParser:true,useUnifiedTopology:true})
const db=mongoose.connection

//Condition if DataBase connection is loss
if(!db){
    db.on('error',(err)=>{
        console.log(err,"Trying to reconnect")
        db.once('open',()=>{
            console.log("Database is connected")
        })
        
    })
}else{
    db.once('open',()=>{
    console.log("Database is connected ")
})
}