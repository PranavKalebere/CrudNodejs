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


//mock database
describe('Mock Database Connection',()=>{
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
            .end((err,res)=>{
                res.should.have.status(200)
                done();
            });
        });
    });

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
                res.should.have.status(200)
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                done();
            });

        });
    });

    //Put update data

    describe('PUT /api/update',()=>{
        this.timeout(10000)
        it('It should add the data',(done)=>{

            const event={
                ArticleId:80000,
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
            
            chai.request('localhost:1999')
            .put('/api/update')
            .send(event)
            .end((err,res)=>{
                console.log(err);
                console.log(res.body)
                res.should.have.status(200)
                res.body.should.be.a('object');
                res.body.should.have.property('message');       
                // res.body.should.have.property('ArticleId').eql(80000) 
                // res.body.should.have.property('Title').eql('Demo Updated Title')
                // res.body.should.have.property('Description').eql("Demo Updated Description")
                // res.body.should.have.property('CoverPage').eql("Demo Updated CoverPage")
                // res.body.should.have.property('AuthorFirstName').eql("Demo Updated AuthorFirstName")
                // res.body.should.have.property('AuthorLastName').eql("Demo Updated AuthorLastName")
                // res.body.should.have.property('AuthorEmailId').eql("Demo Updated ArticleCreatedDate")
                // res.body.should.have.property('ArticlePublishedDate').eql("Demo Updated ArticlePublishedDate")
                // res.body.should.have.property('AuthorPhoneNumber').eql(9898989898)
                done();
            })
        });
    });
    
    //Delete data by ArticleId

    describe('GET /api/delete/:ArticleId',()=>{
        it('It should delete data by ArticleId',(done)=>{
            chai.request('localhost:1999')
            .delete('/api/delete/1088')
            .end((err,res)=>{
                res.should.have.status(200)
                done();
            });
        });
    });
});