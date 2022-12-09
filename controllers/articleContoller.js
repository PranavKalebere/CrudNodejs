const express=require('express')
const router=express.Router()

const cs=require('../services/articleServices')

const upload=require('../middleware/upload')

const apiConstant=require('../constant/ApiConstant.json')

//test route
router.get(apiConstant.Test_Api,cs.test)

//list the data
router.get(apiConstant.Get_By_ArticleId,cs.getByArticleId)

//add data
router.post(apiConstant.Add_Data,upload.single('CoverPage'),cs.addField)

//delete data
router.delete(apiConstant.Delete_By_ArticleId,cs.deleteDataByArticleId)

//update data
router.post(apiConstant.Update_Data,upload.single('CoverPage'),cs.updateDataByArticleId)


module.exports=router