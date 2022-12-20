const chai=require('chai')
const chaiHttp=require('chai-http')


//Assertion 
// chai.should()
let should = chai.should();


chai.use(chaiHttp)

describe('Test API',()=>{

    // get  by  ArticleId
    describe('GET /api/list/:ArticleId',()=>{
        it('It should be get by ArticleId',(done)=>{
            chai.request('localhost:1999')
            .get('/api/list/1088')
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
            .end((err,response)=>{
                response.should.have.status(200)
                response.body.should.be.a('object');
                response.body.event.should.have.property('ArticleId');
                response.body.event.should.have.property('Title');
                response.body.event.should.have.property('Description');
                response.body.event.should.have.property('CoverPage');
                response.body.event.should.have.property('AuthorFirstName');
                response.body.event.should.have.property('AuthorLastName');
                response.body.event.should.have.property('AuthorEmailId');
                response.body.event.should.have.property('ArticleCreatedDate');
                response.body.event.should.have.property('ArticlePublishedDate');
                response.body.event.should.have.property('AuthorPhoneNumber');
                done();
            });

        });
    });

//     //Put update data

//     describe('PUT /api/update',()=>{
//         it('It should add the data',(done)=>{

//             const event={
//                 ArticleId:2001,
//                 Title:"Demo Updated Title",
//                 Description:"Demo Updated Description",
//                 CoverPage:"Demo Updated CoverPage",
//                 AuthorFirstName:"Demo Updated AuthorFirstName",
//                 AuthorLastName:"Demo Updated AuthorLastName",
//                 AuthorEmailId:"Demo Updated AuthorEmailId",
//                 ArticleCreatedDate:"Demo Updated ArticleCreatedDate",
//                 ArticlePublishedDate:"Demo Updated ArticlePublishedDate",
//                 AuthorPhoneNumber:9898989898

//             }

//             chai.request('localhost:1999/')
//             .put('/api/update')
//             .send(event)
//             .end((err,response)=>{
//                 response.should.have.status(200)
//                 response.body.should.be.a('object');
//                 response.body.should.have.property('ArticleId').eql(2001);
//                 response.body.should.have.property('Title').eql('Demo Updated Title');
//                 response.body.should.have.property('Description').eql('Demo Updated Description');
//                 response.body.should.have.property('CoverPage').eql('Demo Updated CoverPage');
//                 response.body.should.have.property('AuthorFirstName').eql('Demo Updated AuthorFirstName');
//                 response.body.should.have.property('AuthorLastName').eql('Demo Updated AuthorLastName');
//                 response.body.should.have.property('AuthorEmailId').eql('Demo Updated AuthorEmailId');
//                 response.body.should.have.property('ArticleCreatedDate').eql('Demo Updated ArticleCreatedDate');
//                 response.body.should.have.property('ArticlePublishedDate').eql('Demo Updated ArticlePublishedDate');
//                 response.body.should.have.property('AuthorPhoneNumber').eql(9898989898);
//                 done();
//             });

//         });
//     });
    
    //Delete data by ArticleId

    describe('GET /api/delete/:ArticleId',()=>{
        it('It should delete data by ArticleId',(done)=>{
            chai.request('localhost:1999')
            .delete('/api/delete/1088')
            // .end((err,response)=>{
            //     response.should.have.status(200)
                done();
            });

        });
    // });
});

