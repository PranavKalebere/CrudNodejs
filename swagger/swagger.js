
const swaggerJSDoc=require('swagger-jsdoc')



const option={
    definition:{
        openapi:'3.0.0',
        version: '1.0.0',
        info: {
            title: 'NodeJs CRUD operation using swagger'
        },
        service:[
            {
                    url :'http://localhost:1999/'
            }
        ],
    },
    apis:['./controller/*.js'],
};

const swaggerSpec=swaggerJSDoc(option)



/**
 * @swagger
 *      component:
 *          schema:
 *              articleModel:
 *                  type:object
 *                      properties:
 *                          ArticleId:
 *                                  type:integer
 *                              Title:
 *                                  type:string
 *                              Description:
 *                                       type:string
 *                               CoverPage:
 *                                       type:string
 *                               AuthorFirstName:
 *                                       type:string
 *                                AuthorLastName:
 *                                       type:string
 *                                AuthorEmailId:
 *                                       type:string
 *                                 ArticleCreatedDate:
 *                                       type:string
 *                                ArticlePublishedDate:
 *                                       type:string
 *                               AuthorPhoneNumber:
 *                                       type:integer
 */

/**
 * @swagger
 * /api/list/{ArticleId}
 *   get:
 *     summary: gets posts by ArticleId
 *     tags: [Posts]
 *     parameters:
 *       - in : path
 *         name: id
 *         description: id of post
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: posts by its ArticleId
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ArticleId'
 *       400:
 *         description: post can not be found
 */





 module.exports=swaggerSpec