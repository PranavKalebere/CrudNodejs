const chai=require('chai')
const chaiHttp=require('chai-http')
const  response  = require('express')
const server=require('../services/articleServices')

//Assertion 
chai.should()

chai.use(chaiHttp)

describe('Test API',()=>{

    describe('GET /list/:ArticleId',()=>{
        it('It should be get by ArticleId',(done)=>{
            chai.request(server)
            .get('list/1088')
                done();
        });

    });
});
