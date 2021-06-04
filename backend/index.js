const express = require('express') ; 
const bodyParser = require('body-parser'); 
const mysql = require('mysql') ; 

const app = express() ; 
const port = process.env.PORT || 4000 ; 

const pool = require('./database'); 


const authRouter = express.Router() ; 
const testRouter = express.Router() ; 



testRouter.use((req, res, next)=>{
    next() ; 
}) ; 

testRouter.get('/',(req, res)=>{
    console.log('reached') ; 
    pool.query(`SELECT * FROM medbox.users`, function(error, result){
    if(error) throw error ; 
    res.json(result)
}) ; 

    //res.send('welcome to the test page')
}) ; 


// initializing the auth rounters
authRouter.use((req, res, next) => {
    // the code to filter i.e middleware 
    next() ; 
}) ; 

authRouter.post('/register', (req, res) => {
    //the code to provide a response 
    var username = req.body.username ; 
    var password = req.body.password ; 
    console.log(username,password) ; 
    var query = 'INSERT INTO users(username, password) VALUES(?, ?)'
    const values = [username, password]
    pool.query(query,values,(error, result)=>{
        if (error) throw error;
        console.log(result) ; 
    }) ; 
    res.send({'auth': 'success'}) ;

}) ;

authRouter.get('/login', (req, res)=>{
    var username = req.body.username ; 
    var password = req.body.password ; 
    console.log('reached-here')
    pool.query('SELECT password FROM users WHERE username=?',username,(error, result)=>{
        if (error) throw error;
        console.log(password, result[0]['password'])
        if (password===result[0]['password']){
            res.json({'auth': 'success'}) ; 
        }
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

