const logger = require("../logger/logger");


module.exports.checkLoggerLevel=(level,(req,res)=>{
    try{    
        checkLoggerLevel(req.param.level)
        res.json({message:"changed"})

    }catch(err){
        res.status(400);
        logger.error(err)
    }
})

