const express = require('express') ; 
const bodyParser = require('body-parser'); 
const mysql = require('mysql') ; 

const app = express() ; 
const port = process.env.PORT || 4000 ; 

const pool = require('./database'); 
const testRouter = require('./test') ; 
const authRouter = require('./auth') ; 


// setting up the end points 
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json());


// adding the routers 
app.use('/auth',authRouter) ; 
app.use('/', testRouter) ; 


// setting up the express server

app.listen(port, () => {
    console.log('Authentication is online') ; 
}) ; 

