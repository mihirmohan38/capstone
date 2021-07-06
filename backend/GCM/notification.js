const express = require('express') ; 
const notificationRouter = express.Router() ;           
const {generate, authenticate} = require('./jwt') ; 
const sendNotification = require("./send") ; 


// initializing the auth rounters
notificationRouter.use((req, res, next) => {
    // the code to filter i.e middleware 
    var token = req.headers["jwt"];
    //console.log('token', token)
    var decoded = authenticate(token) ; 
    if (req.body.username===decoded.username) { 
        next() ; 
    } else { 
        res.json({'success': 0, 'error' : 'Unauthorized access, please log in again', 'data': null}) ;
    } 
     
}) ; 

notificationRouter.post('/send', (req, res) => {
    //the code to provide a response 
    console.log('here') ; 
    var medboxID = req.body.medboxID ; 
    var success = sendNotification(medboxID) ; 
    res.json({'success': -1, 'error' : 'Unauthorized access, please log in again', 'data': null}) ;

}) ;


module.exports = notificationRouter ;  