
//It's a MongoDB object modeling tool designed to work in an asynchronous environment
const mongoose=require('mongoose')

const constant=require('../constant/constant.json')

//Connection is made to the DataBase
mongoose.connect(constant.Mongodb_Connection,{useNewUrlParser:true,useUnifiedTopology:true})
const db=mongoose.connection

 //Condition if DataBase connection is loss
// db.on('connecting', function() {
//     console.log(constant.Connecting);
//   });

//   db.on('error', function(error) {
//     console.error(constant.Connection_Error + error);
//     mongoose.disconnect();
//   });
//   db.on('connected', function() {
//     console.log(constant.Db_Connect);
//   });
//   db.once('open', function() {
//     console.log(constant.Connection_Opened);
//   });
//   db.on('reconnected', function () {
//     console.log(constant.Db_Connection_Failed);
//   });
//   db.on('disconnected', function() {
//     console.log(constant.Connection_Disconnect);
//     mongoose.connect(constant.Mongodb_Connection, {server:{auto_reconnect:true}});
//   });
//   mongoose.connect(constant.Mongodb_Connection, {server:{auto_reconnect:true}});


  switch(db){
    case 1:
      db.on('connecting', function() {
          console.log(constant.Connecting);
        });
        break;
  
     case 2:
      db.on('error', function(error) {
          console.error(constant.Connection_Error + error);
          mongoose.disconnect();
        });
        break;
  
     case 3:
      db.on('connected', function() {
          console.log(constant.Db_Connect);
        });
         break;
  
     case 4:
      db.once('open', function() {
          console.log(constant.Connection_Opened);
        });
        break;
  
     case 5:
      db.on('reconnected', function () {
          console.log(constant.Db_Connection_Failed);
        });
        break;
  
      case 6:
          db.on('disconnected', function() {
              console.log(constant.Connection_Disconnect);
              mongoose.connect(constant.Mongodb_Connection, {server:{auto_reconnect:true}});
            });    
            break;
      }
      mongoose.connect(constant.Mongodb_Connection, {server:{auto_reconnect:true}});
