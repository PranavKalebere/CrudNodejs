const express=require('express')
const router=express.Router()

const ls=require('../services/loggerService')

router.get('/checkLogger/:level',ls.checkLoggerLevel)

module.exports=router