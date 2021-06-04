const express = require('express') ; 
const bodyParser = require('body-parser'); 
const mysql = require('mysql') ; 

const app = express() ; 
const port = process.env.PORT || 4000 ; 

const pool = require('./database'); 
console.log('got the pool')

const authRouter = express.Router() ; 
const testRouter = express.Router() ; 



testRouter.use((req, res, next)=>{
    // random code 
    console.log('here') ; 
    next() ; 
}) ; 

testRouter.get('/',(req, res)=>{
    console.log('reached') ; 
    pool.query(`SELECT * FROM medbox.users`, function(error, result){
    if(error) throw error ; 
    console.log(result) ; 
}) ; 
}) ; 


// initializing the auth rounters
authRouter.use((req, res, next) => {
    // the code to filter i.e middleware 
    next() ; 
}) ; 

authRouter.put('/register', (req, res) => {
    // the code to provide a response 
    var username = req.body.username ; 
    var password = req.body.password ; 

}) ;

authRouter.get('/login', (req, res)=>{
    var username = req.body.username ; 
    var password = req.body.password ; 
    pool.query('SELECT password FROM users WHERE username=?',username,(error, result)=>{
        if (error) throw error;
        if (password===result){
            // procvide access
            response.send(result,password)
        }
         ;
    }) ; 
}) ; 




// setting up the end points 
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json());
app.use('/auth',authRouter) ; 
app.use('/', testRouter) ; 

app.listen(port, () => {
    console.log('Authentication is online') ; 
}) ; 

