const mongoose=require('mongoose')
const Schema=mongoose.Schema
const constant=require('../constant/constant.json')


const articleSchema=new Schema({
    ArticleId:{
        type:Number
    },
    Title:{
        type:String
    },
    Description:{
        type:String
    },
    CoverPage:{
        type:String
    },
    AuthorFirstName:{
        type:String
    },
    AuthorLastName:{
        type:String
    },
    AuthorEmailId:{
        type:String
    },
    ArticleCreatedDate:{
        type:Date
    },
    ArticlePublishedDate:{
        type:Date
    },
    AuthorPhoneNumber:{
        type:Number
    },
},{timestamps:true})

module.exports=new mongoose.model(constant.Collection,articleSchema)
