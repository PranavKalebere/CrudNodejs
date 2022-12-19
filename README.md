
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
--header 'Content-Type: application/json' \
--data-raw '{
	"ArticleId":333,
	"Title":"abc",
	"Description":"Testing document for nodejs",
	"AuthorFirstName":"pqrst",
	"AuthorLastName":"xyzxyz",
	"AuthorEmailId":"xyzxyz@mail.com",
	"ArticleCreatedDate":"25/nov/2022",
	"ArticlePublishedDate":"25/nov/2022",
	"AuthorPhoneNumber":1234554321
<<<<<<< HEAD
}'
=======
}'
>>>>>>> 26a72155a621b4635e42bd7c7d15c891ca63e45f
