const mongoose=require('mongoose')
const Schema=mongoose.Schema


const clientSchema=new Schema({
    ArticleId:{
        typeof:Number
    },
    Title:{
        typeof:String
    },
    Description:{
        typeof:String
    },
    AuthorFirstName:{
        typeof:String
    },
    AuthorLastName:{
        typeof:String
    },
    AuthorEmailId:{
        typeof:String
    },
    ArticleCreatedDate:{
        typeof:String
    },
    ArticlePublishedDate:{
        typeof:String
    },
    AuthorPhoneNumber:{
        typeof:Number
    },
},{timestamps:true})

module.exports=new mongoose.model('ClientModel',clientSchema)
