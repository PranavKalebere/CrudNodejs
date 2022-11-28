const express=require('express')
const router=express.Router()
const cs=require('../services/clientServices')

//test route
router.get('/test',cs.test)

//list client
router.get('/list/:ArticleId',cs.getData)

//add data
router.post('/add',cs.addData)

//delete data
router.post('/delete/:ArticleId',cs.deleteData)

//update data
router.post('/update',cs.updateData)

module.exports=router