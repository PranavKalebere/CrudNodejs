const moment=require('moment')

module.exports=function dateValidation(date){

    let formats=['MM-DD-YYYY','MM-DD-YYYY']
    
    return moment(date,formats).isValid()

}