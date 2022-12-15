const {createLogger,format,transports,level}= require('winston');

const {printf,timestamp,combine,errors, json}=format;

const constant=require('../constant/constant.json')

require('dotenv')

const logFormat = printf(({ level, message, timestamp, stack }) => {
    return `${timestamp} ${level}: ${stack || message}`;
  });

const logger = createLogger({
    level: 'debug',
  format: combine(
    timestamp(),
    logFormat,
    errors({stack : true}),
    json()
    ),
  //defaultMeta: { service: 'user-service' },
  transports: [
        new transports.Console(),
        new transports.File({ filename: constant.Combine_Logs }),
        new transports.File({ filename: constant.Error_Log, level: 'error' }),
        new transports.File({ filename: constant.Warn_Log, level: 'warn' }),
        new transports.File({ filename: constant.Info_Log, level: 'info' }),
  ],
});
module.exports=logger;