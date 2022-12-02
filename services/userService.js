const UserModel=require('../models/userModel')


//For adding the data
exports.addData = (req,res)=> {
    const newUserModel= new UserModel({
        UserId : req.body.UserId, 
        FirstName : req.body.FirstName, 
        LastName : req.body.LastName, 
        Address : req.body.Address,

    })

    newUserModel.save(err => {
        if (err) {
            console.error(err);
            res.sendStatus(400);
        }else{
            res.status(200)
            res.json({message: "New employee added."})
        }
    })
    
};

//For getting the data by UserId
exports.getData= (req, res) =>{
    console.log(req.params.UserId)
    UserModel.find(
        { 
            UserId:parseInt(req.params.UserId)
        
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

//For Deleting the Data for UserId
exports.deleteData = (req, res) =>{
    
    UserModel.deleteOne(
        { 
            UserId:req.params.UserId
        
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
    
    UserModel.updateMany(
        { 
            UserId:req.body.UserId
        },
        {
            UserId :parseInt(req.body.UserId), 
            FirstName : req.body.FirstName, 
            LastName : req.body.Descriptio, 
            Address : req.body.Address,
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
