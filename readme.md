# mern project - car parts seller



### Quick Start

download following software:
1. nodejs
2. mongodb
3. git

backend: 
1. npm install
2. npm i nodemon --save-dev
3. nodemon dev

frontend:
1. npm install
2. npm start
3. npm run dev

#### api:
get api for all part-entries: localhost:4800/api/v1/entries (to get all data, show in a table in admin dashboard)
post api for all part-entries: localhost:4800/api/v1/entries (to save a data, when user submit a form)
for posting entries, send data in body like:
{
  "brandName": "toyota",
  "modelName": "x4",
  "year": "2018",
  "requiredParts": "backglass",
  "quantity": "2",
  "email": "xyz@gmail.com",
  "deliveryAddress": "dhaka uttara ",
  "phone": "011211221"
}