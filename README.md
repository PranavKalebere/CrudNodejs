
# CRUD Operation

A complete example of a "CRUD" service (UserService) built with NodeJs.  



## Overview

This project is using the following NodeJs modules:

body-parser,
express,
mongoose,
multer,
nodemon

## Project Layout
#Project4

.vscode

connection

constant

controller

middleware

models

node_modules

service

test

upload


## User Service
HTTP Method	URL	Description
POST http://localhost:1999/api/add	
PUT	 http://localhost:1999/api/update	
GET	 http://localhost:1999/api/list/:ArticleId	
DELETE	http://localhost:1999/users/{userId}	


## Curl of Operation

# Retriving the data from ArticleId
curl --location --request GET 'localhost:1999/api/list/1088'

# Adding the data
curl --location --request POST 'localhost:1999/api/add' \
--form 'ArticleId="808080"' \
--form 'Title="Legend is Born"' \
--form 'Description="Through the tough time"' \
--form 'CoverPage=@"/C:/Users/Pranav.Kalebere/OneDrive - NEC Software Solutions/Pictures/Screenshots/Screenshot (26).png"' \
--form 'AuthorFirstName="Legend"' \
--form 'AuthorLastName="bb"' \
--form 'AuthorEmailId="Legendbb@hotness.com"' \
--form 'ArticleCreatedDate=""' \
--form 'ArticlePublishedDate="01/01/2020"' \
--form 'AuthorPhoneNumber="34455544"'

# Deleting the data via ArticleId
curl --location --request DELETE 'localhost:1999/api/delete/12355555

# Update the data via ArticleId
curl --location --request PUT 'localhost:1999/api/update' \
--form 'ArticleId="1234321"' \
--form 'Title="prem ek gaddar kahani"' \
--form 'Description="tum jano"' \
--form 'CoverPage=@"/C:/Users/Pranav.Kalebere/OneDrive - NEC Software Solutions/Pictures/Screenshots/Screenshot (1).png"' \
--form 'AuthorFirstName="kyapata"' \
--form 'AuthorLastName="kisko pata"' \
--form 'AuthorEmailId="malum nahi"' \
--form 'ArticleCreatedDate=""' \
--form 'ArticlePublishedDate="11/11/2000"' \
--form 'AuthorPhoneNumber="0090009900"'

# Swagger url
http://localhost:1999/swaggerApi/api

# Change of log level 
curl --location --request GET 'localhost:1999/loggerApi/checkLogger/error'
}'
