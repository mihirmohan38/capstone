const express = require('express') ; 

const pool = require('./database'); 
const authRouter = express.Router() ; 


// initializing the auth rounters
authRouter.use((req, res, next) => {
    // the code to filter i.e middleware 
    next() ; 
}) ; 



// endpoints 

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


module.exports = authRouter; 