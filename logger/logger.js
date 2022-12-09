const {createLogger,format,transports,level}= require('winston');

const {printf,timestamp,combine,colorize,errors, json}=format;


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
        new transports.File({ filename: 'combined.log' }),
        new transports.File({ filename: 'error.log', level: 'error' }),
        new transports.File({ filename: 'warn.log', level: 'warn' }),
        new transports.File({ filename: 'info.log', level: 'info' }),
  ],
});

module.exports=logger;