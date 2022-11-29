const express=require('express')
const router=express.Router()

const cs=require('../services/clientServices')

const upload=require('../middleware/upload')

//test route
router.get('/test',cs.test)

//list client
router.get('/list/:ArticleId',cs.getData)

//add data
router.post('/add',upload.single('CoverPage'),cs.addData)

//delete data
router.delete('/delete/:ArticleId',cs.deleteData)

//update data
router.put('/update',cs.updateData)


module.exports=router