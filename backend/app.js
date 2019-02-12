// const path = require('path');

const express = require('express');
const petRoutes = require('./routes/pets');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// const multer = require('multer');


const app = express();

// app.use(bodyParser.urlencoded({extended: false}));
//to parse incoming data to json -> req.body
app.use(bodyParser.json());

//add headers to disable CORS
app.use((req, res, next) => {
  //allow to all servers -> will be changed to our localhost:3000 for example
  res.setHeader('Access-Control-Allow-Origin', '*');
  //allow methods
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
  //client can send request with headers (content type)
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use("/pets", petRoutes);


mongoose
  .connect(
    'mongodb+srv://Dawid:ejbXZ0wGMSO0V0Pz@sheltercluster-n0dwi.mongodb.net/pets?retryWrites=true'
  )
  .then(result => {
    console.log("Connected");
    app.listen(8080);
  })
  .catch(err => console.log(err));






//miejsce na middleware

//parse incoming body request
// app.use(express.static(path.join(__dirname, 'public')));






// mongoose
//   .connect(
//     'mongodb+srv://Dawid:ejbXZ0wGMSO0V0Pz@sheltercluster-n0dwi.mongodb.net/shelter?retryWrites=true'
//   )
//   .then(result => {
//     console.log("Connected");
//     app.listen(8080);
//   })
//   .catch(err => console.log(err));



console.log("working");