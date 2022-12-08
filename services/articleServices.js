const ArticleModel = require('../models/articleModel');

const {dateValidation, validationBodyOfApiRequest}=require('../utilities/utility')

const constant=require('../constant/constant.json')

//For testing the API
exports.test=(req,res)=>{
    res.json({message:'Greeting api'})
}

//For adding the data
exports.addField = (req,res)=> {
    try{
        let bodyValidationStatus = validationBodyOfApiRequest(req.body)
        if(bodyValidationStatus && dateValidation(req.body.ArticlePublishedDate)){
            const newArticleModel= new ArticleModel({
                ArticleId : parseInt(req.body.ArticleId), 
                Title : req.body.Title, 
                Description : req.body.Description, 
                AuthorFirstName : req.body.AuthorFirstName,
                AuthorLastName : req.body.AuthorLastName,
                AuthorEmailId : req.body.AuthorEmailId,
                ArticleCreatedDate : new Date().toLocaleString(), //To get auto genrated date
                ArticlePublishedDate : req.body.ArticlePublishedDate,
                AuthorPhoneNumber : req.body.AuthorPhoneNumber

            })
            console.log(newArticleModel)
            if(!req.file){
                console.log(constant.File_Not_Found)
            }else{
                newArticleModel.CoverPage = req.file.path
            }

            newArticleModel.save(err => {
                if (err) {
                    console.error(err);
                    res.sendStatus(400);
                }else{
                    res.status(200)
                    res.json({message: constant.Record_Add})
                }
            })
            
            }
    }catch(e){
            res.status(400);
            res.json({message: constant.Invalid_Data})
            res.json({message:bodyValidationStatus})
    }
};

//For getting the data by ArticleId
exports.getByArticleId= (req, res) =>{
    try{
    console.log(req.params.ArticleId)
    ArticleModel.find(
        { 
            ArticleId:parseInt( req.params.ArticleId)
        
        }, 
        (err, results) => {
            console.log(results)
            if (!err) {
                res.json(results); 
            }else{
                res.json(400)    
                res.json(err);
            }
        }
    )  
    }catch{
        res.status(400);
        res.json({message: constant.ArticleId_Invalid})
    }
};

//For Deleting the Data for ArticleId
exports.deleteDataByArticleId = (req, res) =>{
    try{    
    ArticleModel.deleteOne(
        { 
            ArticleId:req.params.ArticleId
        
        }, 
        (err, results) => {
            if (!err) {
                res.json(200)
                res.json({message: constant.Delete_Record_ArticleId});
            }
        }
    )  
    }catch{
                res.json(400)
                res.json({message: constant.ArticleId_Invalid});
                console.log(err,constant.ArticleId_Invalid)
    }
};

//update the data
exports.updateDataByArticleId = (req, res)=> {
    try{
    ArticleModel.updateMany(
        { 
            ArticleId:req.body.ArticleId
        },
        {
            ArticleId :parseInt(req.body.ArticleId), 
            Title : req.body.Title, 
            Description : req.body.Descriptio, 
            AuthorFirstName : req.body.AuthorFirstName,
            AuthorLastName : req.body.AuthorLastName,
            AuthorEmailId : req.body.AuthorEmailId,
            ArticleCreatedDate : req.body.ArticleCreatedDate,
            ArticlePublishedDate : req.body.ArticlePublishedDate,
            AuthorPhoneNumber :parseInt(req.body.AuthorPhoneNumber)
        },
        (result) => {
            if (result.modifiedCount) {
                res.status(200);
                res.json({message: constant.Record_Updated}); 
            }
        }
    )    
    }catch{
                res.status(400);
                res.json({message:constant.ArticleId_Invalid})
    }     
};