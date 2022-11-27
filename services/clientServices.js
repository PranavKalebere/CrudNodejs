const ClientModel = require('../models/clientModel');


exports.test=(req,res)=>{
    res.json({message:'Greeting api'})
}

//add data
exports.addData = (req, res)=> {
    const newClientModel= new ClientModel({
        ArticleId :parseInt(req.body.ArticleId), 
        Title : req.body.Title, 
        Description : req.body.Descriptio, 
        AuthorFirstName : req.body.AuthorFirstName,
        AuthorLastName : req.body.AuthorLastName,
        AuthorEmailId : req.body.AuthorEmailId,
        ArticleCreatedDate : req.body.ArticleCreatedDate,
        ArticlePublishedDate : req.body.ArticlePublishedDate,
        AuthorPhoneNumber :parseInt(req.body.AuthorPhoneNumber)

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
