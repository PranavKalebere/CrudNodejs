const chai=require('chai')
const chaiHttp=require('chai-http')

const constant=require('../constant/constant.json')

const articleModel=require('../models/articleModel')

const Mongoose = require('mongoose').Mongoose;
const mongoose = new Mongoose();
 
const MockMongoose = require('mock-mongoose').MockMongoose;
const mockMongoose = new MockMongoose(mongoose);


//Assertion 
let should = chai.should();

chai.use(chaiHttp)

describe('Mock Database Connection',()=>{
         //Before each test we empty the database
         describe('Database', () => {
            beforeEach((done) => {                 
                mockMongoose.prepareStorage().then(()=>{
                mongoose.connect(constant.Mongodb_Connection)
                done()
                })
            });
        });
})

describe('Test API',()=>{

    // get  by  ArticleId
    describe('GET /api/list/:ArticleId',()=>{
        it('It should be get by ArticleId',(done)=>{
            chai.request('localhost:1999')
            .get('/api/list/123')
                done();
            });

        });
    // });

    //Post add data

    describe('POST /api/list/:ArticleId',()=>{
        it('It should add the data',(done)=>{
            const event={
                ArticleId:1,
                Title:"Demo Title",
                Description:"Demo Description",
                CoverPage:"Demo CoverPage",
                AuthorFirstName:"Demo AuthorFirstName",
                AuthorLastName:"Demo AuthorLastName",
                AuthorEmailId:"Demo AuthorEmailId",
                ArticleCreatedDate:"Demo ArticleCreatedDate",
                ArticlePublishedDate:"Demo ArticlePublishedDate",
                AuthorPhoneNumber:987654321
            }
            chai.request('localhost:1999')
            .post('/api/add')
            .send(event)
            .end((err,res)=>{
                console.log(res.body);
                console.log(err);
                res.should.have.status(200)
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                done();
            });

        });
    });

    //Put update data

    describe('PUT /api/update',()=>{
        it('It should add the data',(done)=>{

            const event={
                ArticleId:2001,
                Title:"Demo Updated Title",
                Description:"Demo Updated Description",
                CoverPage:"Demo Updated CoverPage",
                AuthorFirstName:"Demo Updated AuthorFirstName",
                AuthorLastName:"Demo Updated AuthorLastName",
                AuthorEmailId:"Demo Updated AuthorEmailId",
                ArticleCreatedDate:"Demo Updated ArticleCreatedDate",
                ArticlePublishedDate:"Demo Updated ArticlePublishedDate",
                AuthorPhoneNumber:9898989898

            }

            chai.request('localhost:1999/')
            .put('/api/update')
            .send(event)
            .end((err,response)=>{
                response.should.have.status(200)
                response.body.should.be.a('object');
                response.body.should.have.property('message');        
                done();
            });

        });
    });
    
    //Delete data by ArticleId

    describe('GET /api/delete/:ArticleId',()=>{
        it('It should delete data by ArticleId',(done)=>{
            chai.request('localhost:1999')
            .delete('/api/delete/1088')

                done();
            });

        });
});