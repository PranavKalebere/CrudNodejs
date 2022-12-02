const express=require('express')
const router=express.Router()

const cs=require('../services/clientServices')

const upload=require('../middleware/upload')

const apiConstant=require('../constant/ApiConstant.json')

//test route
router.get(apiConstant.Test_Api,cs.test)

//list the data
router.get(apiConstant.Get_By_ArticleId,cs.getData)

//add data
router.post(apiConstant.Add_Data,upload.single('CoverPage'),cs.addData)

//delete data
router.delete(apiConstant.Delete_By_ArticleId,cs.deleteData)

//update data
router.put(apiConstant.Update_Data,cs.updateData)


module.exports=router