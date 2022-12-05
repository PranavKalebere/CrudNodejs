const moment=require('moment')

module.exports=function dateValidation(date){

    let formats=['MM-DD-YYYY','MM-DD-YYYY']
    
    return moment(date,formats).isValid()

}

module.exports=function validationBodyOfApiRequest(body){
    console.log(body)
    if(body.ArticleId==undefined && body.Title==undefined 
        && body.Description==undefined && body.CoverPage==undefined
        && body.AuthorFirstName==undefined && body.AuthorLastName==undefined
        && body.AuthorEmailId==undefined && body.ArticleCreatedDate==undefined
        && body.ArticlePublishedDate==undefined && body.AuthorPhoneNumber==undefined)
        {
            return true;
    }
}
