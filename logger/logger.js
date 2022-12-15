const winston= require('winston');
const {format, createLogger} = require('winston');
const {timestamp, combine, printf, errors, json} = format;

const constant=require('../constant/constant.json')

require('dotenv')


const transports = {
  console: new winston.transports.Console({ level: 'info' }),
};

function setLevel(level){
  transports.console.level = level;
  winston_logger();
}

function winston_logger(){
    const logFormat = printf(({ level, message, timestamp, stack }) => {
    return `${timestamp} [${level}] ${stack || message}`;
  });
  console.log(transports.console.level)
  return createLogger({
    format: combine(
        timestamp(),
        errors({ stack:true }),
        logFormat,
        json()
    ),
    // defaultMeta: { service: 'user-service' },
    transports: [
        transports.console,
        new winston.transports.File({ filename: constant.Combine_Logs }),
        new winston.transports.File({ filename: constant.Error_Log, level: 'error' }),
        new winston.transports.File({ filename: constant.Warn_Log, level: 'warn' }),
        new winston.transports.File({ filename: constant.Info_Log, level: 'info' }),
        
    ]
  });
}

module.exports = {winston_logger, setLevel};












































