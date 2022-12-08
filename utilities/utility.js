const moment=require('moment')

module.exports.dateValidation=(date)=>{

    let formats=['MM-DD-YYYY','MM-DD-YYYY']
    
    return moment(date,formats).isValid()

}


// module.exports.validationBodyOfApiRequest = (body)=>{
//     console.log(body)
//     if(body.ArticleId==undefined && body.Title==undefined 
//         && body.Description==undefined && body.CoverPage==undefined
//         && body.AuthorFirstName==undefined && body.AuthorLastName==undefined
//         && body.AuthorEmailId==undefined && body.ArticlePublishedDate==undefined && body.AuthorPhoneNumber==undefined)
//         {
//             return false;
//     } 
//     return true;
// }


module.exports.validationBodyOfApiRequest = (body)=>{
    let missingVariable=[]
    console.log(body)
    if(body.ArticleId==undefined){
        missingVariable.push("ArticleId is Undefiend")
    }
    if(body.Title==undefined){
        missingVariable.push("Title is Undefiend")
    }
    if(body.Description==undefined){
        missingVariable.push("Description is Undefiend")
    }
    if(body.CoverPage==undefined){
        missingVariable.push("CoverPage is Undefiend")
    }
    if(body.AuthorFirstName==undefined){
        missingVariable.push("AuthorFirstName is Undefiend")
    }
    if(body.AuthorLastName==undefined){
        missingVariable.push("AuthorLastName is Undefiend")
    }
    if(body.AuthorEmailId==undefined){
        missingVariable.push("AuthorEmailId is Undefiend")
    }
    if(body.ArticlePublishedDate==undefined){
        missingVariable.push("ArticlePublishedDate is Undefiend")
    }
    if(body.AuthorPhoneNumber==null){
        missingVariable.push("AuthorPhoneNumber is Undefiend")
    }
    return missingVariable;
}
