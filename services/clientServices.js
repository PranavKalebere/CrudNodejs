const ClientModel = require('../models/clientModel');


exports.test=(req,res)=>{
    res.json({message:'Greeting api'})
}

//add data
exports.addData = (req, res)=> {
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

    newClientModel.save(err => {
        if (err) {
            console.error(err);
            res.sendStatus(400);
        }
        res.json({message: "Nem employee added."})
    })
    
};

//getData
exports.getData= (req, res) =>{
    console.log(req.params.ArticleId)
    ClientModel.find(
        { 
            ArticleId:parseInt( req.params.ArticleId)
        
        }, 
        (err, results) => {
            console.log(results)
            if (!err) {
                res.json(results); 
            }
        
        }
    )  
};

//delete the data
exports.deleteData = (req, res) =>{
    
    ClientModel.deleteOne(
        { 
            ArticleId:req.params.ArticleId
        
        }, 
        (err, results) => {
            if (!err) {
                res.json({message: "Record Deleted."});
            }
        
        }
    )  
     
};

//update the data
exports.updateData = (req, res)=> {
    
    ClientModel.updateOne(
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
            }
        }
    )    
     
};
