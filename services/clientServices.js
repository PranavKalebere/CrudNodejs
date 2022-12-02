const ClientModel = require('../models/clientModel');

const dateValidation=require('../utilities/utility')

//For testing the API
exports.test=(req,res)=>{
    res.json({message:'Greeting api'})
}

//For adding the data
exports.addData = (req,res)=> {
    if(dateValidation(req.body.ArticleCreatedDate) && dateValidation(req.body.ArticlePublishedDate)){
    const newClientModel= new ClientModel({
        ArticleId : req.body.ArticleId, 
        Title : req.body.Title, 
        Description : req.body.Description, 
        AuthorFirstName : req.body.AuthorFirstName,
        AuthorLastName : req.body.AuthorLastName,
        AuthorEmailId : req.body.AuthorEmailId,
        ArticleCreatedDate : req.body.ArticleCreatedDate,
        ArticlePublishedDate : req.body.ArticlePublishedDate,
        AuthorPhoneNumber : req.body.AuthorPhoneNumber

    })
    console.log(newClientModel)
    if(!req.file){
        console.log("File not found")
    }else{
        newClientModel.CoverPage = req.file.path
    }

    newClientModel.save(err => {
        if (err) {
            console.error(err);
            res.sendStatus(400);
        }else{
            res.status(200)
            res.json({message: "New employee added."})
        }
    })
    
    }else{
        res.status(400);
        res.json({message:"Enter valid Date"})
    }
};

//For getting the data by ArticleId
exports.getData= (req, res) =>{
    console.log(req.params.ArticleId)
    ClientModel.find(
        { 
            ArticleId:parseInt( req.params.ArticleId)
        
        }, 
        (err, results) => {
            console.log(results)
            if (!err) {
                res.json(200)
                res.json(results); 
            }else{
                res.json(400)    
                res.json(err);
            }
        }
    )  
};

//For Deleting the Data for ArticleId
exports.deleteData = (req, res) =>{
    
    ClientModel.deleteOne(
        { 
            ArticleId:req.params.ArticleId
        
        }, 
        (err, results) => {
            if (!err) {
                res.json(200)
                res.json({message: "Record Deleted."});
            }else{
                res.json(400)
                res.json({message: "Record didn't get deleted"});
                console.log(err,"Record didn't get deleted")
            }
        }
    )  
     
};

//update the data
exports.updateData = (req, res)=> {
    
    ClientModel.updateMany(
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
        (err, result) => {
            if (result.modifiedCount) {
                res.status(200);
                res.json({message: "Record updated."}); 
            }else{
                res.status(400);
                res.json({message:"Record didn't get Updated"})
            }
        }
    )    
     
};

