const mysql = require('mysql');

//local mysql db connection
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'tasks'
});

// connection.connect(function(err) {
//     if (err) throw err;
//     console.log("connect sql");
    
// });

module.exports = connection;