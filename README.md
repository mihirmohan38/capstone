# capstone
Backend server for capstone - Medbox


var response_template = { 'success' : 1 , 'error': 'this is your error message', data' : {'jwt': token}  ; 
var auth_request_template = {'username': username , 'password' : passwrod } ; 

var query_request_template = {'username': token, 'data': data} ;
Note : in the ##header## of the query request pls include the following {'jwt' : token}




Kill a port. 
lsof -i tcp:4000
kill -15 pid