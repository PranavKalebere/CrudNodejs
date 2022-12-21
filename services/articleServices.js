const ArticleModel = require('../models/articleModel');

const {dateValidation, validationBodyOfApiRequest}=require('../utilities/utility')

const constant=require('../constant/constant.json')

let {winston_logger, setLevel} =require('../logger/logger')
let logger = winston_logger();


//For testing the API
exports.test=(req,res)=>{
    res.json({message:'Greeting api'})
}

//For adding the data
exports.addField = (req,res)=> {

    try{
        let bodyValidationStatus = validationBodyOfApiRequest(req)
        if(bodyValidationStatus.length==0 && dateValidation(req.body.ArticlePublishedDate)){
            const newArticleModel= new ArticleModel({
                ArticleId : parseInt(req.body.ArticleId), 
                Title : req.body.Title, 
                Description : req.body.Description, 
                AuthorFirstName : req.body.AuthorFirstName,
                AuthorLastName : req.body.AuthorLastName,
                AuthorEmailId : req.body.AuthorEmailId,
                ArticleCreatedDate : new Date().toLocaleString(), //To get auto genrated date
                ArticlePublishedDate : req.body.ArticlePublishedDate,
                AuthorPhoneNumber : parseInt(req.body.AuthorPhoneNumber)

            })
            logger.info(newArticleModel)
            if(!req.file){
                logger.error(constant.File_Not_Found)
            }else{
                newArticleModel.CoverPage = req.file.path
            }

            newArticleModel.save(err => {
                if (err) {
                    logger.error(err);
                    res.sendStatus(400);
                }else{
                    res.status(200)
                    res.json({message: constant.Record_Add})
                    logger.info(constant.Record_Add)
                }
            })
            
            }else{
                res.json({message:bodyValidationStatus})
                logger.error(bodyValidationStatus)
            }
    }catch(e){
            res.status(400);
            res.json({message: constant.Invalid_Data})
            logger.info(constant.Invalid_Data)
            
    }
};

//For getting the data by ArticleId
exports.getByArticleId= (req, res) =>{
    try{
    logger.info(req.params.ArticleId)
    ArticleModel.find(
        { 
            ArticleId:parseInt( req.params.ArticleId)
        
        }, 
        (err, results) => {
            logger.info(results)
            if (!err) {
                res.json(results); 
                logger.info(results)
            }else{
                res.json(400)    
                res.json(err);
                logger.error(err)
            }
        }
    )  
    }catch{
        res.status(400);
        res.json({message: constant.ArticleId_Invalid})
        logger.error(constant.ArticleId_Invalid)
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
                logger.info(constant.Delete_Record_ArticleId)
            }
        }
    )  
    }catch{
                res.json(400)
                res.json({message: constant.ArticleId_Invalid});
                logger.error(err,constant.ArticleId_Invalid)
    }
};

//update the data
exports.updateDataByArticleId = async (req, res)=> {
    try{
        let file = req.file;
        if(!file){
            logger.warn(constant.File_Not_Found)
        }else{
            const result = await ArticleModel.updateOne(
                { 
                    ArticleId:parseInt(req.body.ArticleId)
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
                    AuthorPhoneNumber :parseInt(req.body.AuthorPhoneNumber),
                    CoverPage: file.path
                }
            ).clone().catch(err=> {
                logger.error(err);
                res.json({message:err})
            });


            if (result.modifiedCount) {
                res.status(200);
                res.json({message: constant.Record_Updated}); 
                logger.info(constant.Record_Updated)
            }
            

        }
    }catch{
                res.status(400);
                res.json({message:constant.ArticleId_Invalid})
                logger.error(constant.ArticleId_Invalid)
    }     
};