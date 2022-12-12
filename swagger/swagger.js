
const swaggerJSDoc=require('swagger-jsdoc')
const swaggerUi=require('swagger-ui-express')

const option={
    defination:{
        openapi:'3.0.0',
        version: '1.0.0',
        info: {
            title: 'NodeJs CRUD operation using swagger'
        },
        service:[
            {
                    url :'http//localhost:1999/'
            }
        ]
    },
    apis:['./controller/articleController.js'],
};

const swaggerSpec=swaggerJSDoc(option)
app.use('/swaggerApi',swaggerUi.serve,swaggerUi.setup(swaggerSpec))