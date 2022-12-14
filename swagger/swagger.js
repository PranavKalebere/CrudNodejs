
const swaggerJSDoc=require('swagger-jsdoc')
const constant= require('../constant/constant.json')


const option={
    definition:{
        openapi:'3.0.0',
        version: '1.0.0',
        info: {
            title: 'NodeJs CRUD operation using swagger'
        },
        service:[
            {
                    url :constant.SwaggerUrl
            }
        ],
    },
    apis:['./swagger/swagger.js'],
};


const swaggerSpec=swaggerJSDoc(option)






/**
 * @swagger
 *  components:
 *      schemas:
 *          ArticleModel:
 *              type: object
 *              required:
 *                  - ArticleId
 *                  - Title
 *                  - Description
 *                  - CoverPage
 *                  - AuthorFirstName
 *                  - AuthorLastName
 *                  - AuthorEmailId
 *                  - ArticleCreatedDate
 *                  - ArticlePublishedDate
 *                  - AuthorPhoneNumber
 *              properties:
 *                  ArticleId:
 *                          type:integer
 *                  Title:
 *                          type:string
 *                  Description:
 *                          type:string
 *                  CoverPage:
 *                          type:string
 *                  AuthorFirstName:
 *                          type:string
 *                  AuthorLastName:
 *                          type:string
 *                  AuthorEmailId:
 *                          type:string
 *                  ArticleCreatedDate:
 *                          type:string
 *                  ArticlePublishedDate:
 *                          type:string
 *                  AuthorPhoneNumber:
 *                          type:integer
 *              example:
 *                  ArticleId:123
 *                  Title:Don
 *                  Description:Don
 *                  CoverPage:Donn
 *                  AuthorFirstName:Don
 *                  AuthorLastName:Don
 *                  AuthorEmailId:Don
 *                  ArticleCreatedDate:12/12/2000
 *                  ArticlePublishedDate:15/05/2000
 *                  AuthorPhoneNumber:789456321
 */

/**
 * @swagger
 *  tags:
 *    name: Article services
 *    description: services
 */

/**
 * @swagger
 * /api/list/{ArticleId}:
 *   get:
 *     summary: gets posts by ArticleId
 *     tags: [Article services]
 *     parameters:
 *       - in : path
 *         name: ArticleId
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
 *               items:
 *                  $ref: '#/components/schemas/ArticleModel'
 *       400:
 *         description: post can not be found
 */


 
/**
 * @swagger
 * /api/add:
 *   post:
 *     summary: Create a new post
 *     tags: [Article services]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ArticleModel'
 *     responses:
 *       200:
 *         description: The post was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ArticleModel'
 *       500:
 *         description: Some server error
 */

 
/**
 * @swagger
 * /api/update:
 *   put:
 *     summary: updates posts by ArticleId
 *     tags: [Article services]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: post ArticleId
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ArticleModel'
 *     responses:
 *       200:
 *         decsription: The post was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ArticleModel'
 *       404:
 *         description: post was not found.
 *       500:
 *         description: Some errors happend.
 *
 */
 
/**
 * @swagger
 *  /api/delete/{ArticleId}:
 *    delete:
 *      summary: removes post from mongodb
 *      tags: [Article services]
 *      parameters:
 *        - in: path
 *          name: id
 *          description: post id
 *          required: true
 *          schema:
 *            type: integer
 *      responses:
 *        200:
 *          description: The post was deleted
 *        404:
 *          description: The post was not found
 *
 */



 module.exports=swaggerSpec