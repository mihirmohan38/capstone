const express = require('express') ; 

const pool = require('./database'); 
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
    }) ; 

module.exports = testRouter; 

    