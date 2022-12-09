const moment=require('moment')
const constant=require('../constant/constant.json')

module.exports.dateValidation=(date)=>{

    let formats=['MM-DD-YYYY','MM-DD-YYYY']
    
    return moment(date,formats).isValid()

}

module.exports.validationBodyOfApiRequest = (request)=>{
    const body = request.body;
    const file = request.file
    let missingVariable=[]
    console.log(file)
    if(body.ArticleId==undefined){
        missingVariable.push(constant.Undefiend_ArticleId)
    }
    if(body.Title==undefined){
        missingVariable.push(constant.Undefiend_Title)
    }
    if(body.Description==undefined){
        missingVariable.push(constant.Undefiend_Description)
    }
    if(file==undefined){
        missingVariable.push(constant.Undefiend_CoverPage)
    }
    if(body.AuthorFirstName==undefined){
        missingVariable.push(constant.Undefiend_AuthorFirstName)
    }
    if(body.AuthorLastName==undefined){
        missingVariable.push(constant.Undefiend_AuthorLastName)
    }
    if(body.AuthorEmailId==undefined){
        missingVariable.push(constant.Undefiend_AuthorEmailId)
    }
    if(body.ArticlePublishedDate==undefined){
        missingVariable.push(constant.Undefiend_ArticlePublishedDate)
    }
    if(body.AuthorPhoneNumber==null){
        missingVariable.push(constant.Undefiend_AuthorPhoneNumber)
    }
    return missingVariable;
}


