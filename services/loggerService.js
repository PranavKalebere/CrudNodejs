let {winston_logger, setLevel} = require("../logger/logger");
let logger = winston_logger();

exports.checkLoggerLevel=(req,res)=>{
    try{    
        console.log((req.params.level == 'debug'));
        if (req.params.level == 'info') {
            setLevel('info')
        } 
        if (req.params.level == 'debug') {
            setLevel('debug')
        }
        res.json({message:"log level changed"})
    }catch(err){
        res.status(400);
        logger.error(err)
    }
}