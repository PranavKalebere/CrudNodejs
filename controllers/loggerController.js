const express=require('express')
const router=express.Router()

const ls=require('../services/loggerService')

router.get('/checkLogger',ls.checkLoggerLevel)