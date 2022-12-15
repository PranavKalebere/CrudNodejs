const logger = require("../logger/logger");


module.export.checkLoggerLevel=(level,(req,res)=>{
    try{    
        checkLoggerLevel(req.param.level)

    }catch(err){
        res.status(400);
        logger.error(err)
    }
})

