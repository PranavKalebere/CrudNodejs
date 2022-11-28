const mongoose=require('mongoose')
const Schema=mongoose.Schema


const clientSchema=new Schema({
    ArticleId:{
        type:Number
    },
    Title:{
        type:String
    },
    Description:{
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
        type:String
    },
    ArticlePublishedDate:{
        type:String
    },
    AuthorPhoneNumber:{
        type:Number
    },
},{timestamps:true})

module.exports=new mongoose.model('ClientModel',clientSchema)
