const mysql = require("mysql");

 const dataBase = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "rentalcar"
    

});

dataBase.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
  });

module.exports = dataBase;
