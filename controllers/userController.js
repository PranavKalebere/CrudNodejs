const express=require('express')
const router=express.Router()

const us=require('../services/userService')

const userConstant=require('../constant/userConstant.json')


//list the data
router.get(userConstant.Get_By_UserId,us.getData)

//add data
router.post(userConstant.Add_Data,us.addData)

//delete data
router.delete(userConstant.Delete_By_UserId,us.deleteData)

//update data
router.put(userConstant.Update_Data,us.updateData)

module.exports=router