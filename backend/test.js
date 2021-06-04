const mysql = require('mysql') ; 

const config =  mysql.createConnection({
    host: 'capstone.cpwkghnwud3x.ap-southeast-1.rds.amazonaws.com',
    user: 'admin',
    password: 'password',
    //port: '3306',
    database: 'medbox'
  }) ; 
 
  config.connect() ; 

  config.query('SELECT * from medbox.users', function(err, rows, fields) {
    if(err) console.log(err);
    console.log('The solution is: ', rows);
    config.end();
});

