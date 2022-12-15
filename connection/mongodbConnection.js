
//It's a MongoDB object modeling tool designed to work in an asynchronous environment
const mongoose=require('mongoose')

const constant=require('../constant/constant.json')

const buildDevLogger = require('../logger/logger')

//Connection is made to the DataBase
mongoose.connect(constant.Mongodb_Connection,{useNewUrlParser:true,useUnifiedTopology:true})
const db=mongoose.connection

   //Condition if DataBase connection is loss
  switch(db){
    case 1:
      db.on('connecting', function() {
          buildDevLogger.info(constant.Connecting);
        });
        break;
  
     case 2:
      db.on('error', function(error) {
          buildDevLogger.error(constant.Connection_Error + error);
          mongoose.disconnect();
        });
        break;
  
     case 3:
      db.on('connected', function() {
          buildDevLogger.info(constant.Db_Connect);
        });
         break;
  
     case 4:
      db.once('open', function() {
          buildDevLogger.info(constant.Connection_Opened);
        });
        break;
  
     case 5:
      db.on('reconnected', function () {
          buildDevLogger.warn(constant.Db_Connection_Reconnecting);
        });
        break;
  
      case 6:
          db.on('disconnected', function() {
              buildDevLogger.info(constant.Connection_Disconnect);
              mongoose.connect(constant.Mongodb_Connection, {server:{auto_reconnect:true}});
            });    
            break;
      }
      mongoose.connect(constant.Mongodb_Connection, {server:{auto_reconnect:true}});
