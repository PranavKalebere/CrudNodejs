
//It's a MongoDB object modeling tool designed to work in an asynchronous environment
const mongoose=require('mongoose')

const constant=require('../constant/constant.json')

const logger = require('../logger/logger')

//Connection is made to the DataBase
mongoose.connect(constant.Mongodb_Connection,{useNewUrlParser:true,useUnifiedTopology:true})
const db=mongoose.connection

   //Condition if DataBase connection is loss
  switch(db){
    case 1:
      db.on('connecting', function() {
          logger.info(constant.Connecting);
        });
        break;
  
     case 2:
      db.on('error', function(error) {
          logger.error(constant.Connection_Error + error);
          mongoose.disconnect();
        });
        break;
  
     case 3:
      db.on('connected', function() {
          logger.info(constant.Db_Connect);
        });
         break;
  
     case 4:
      db.once('open', function() {
          logger.info(constant.Connection_Opened);
        });
        break;
  
     case 5:
      db.on('reconnected', function () {
          logger.warn(constant.Db_Connection_Reconnecting);
        });
        break;
  
      case 6:
          db.on('disconnected', function() {
              logger.info(constant.Connection_Disconnect);
              mongoose.connect(constant.Mongodb_Connection, {server:{auto_reconnect:true}});
            });    
            break;
      }
      mongoose.connect(constant.Mongodb_Connection, {server:{auto_reconnect:true}});
