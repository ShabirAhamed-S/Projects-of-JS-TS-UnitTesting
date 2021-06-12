var mysql = require('mysql');
let config=require('./db.config')
require('dotenv/config')
var con = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database
});

con.connect((err) => {
    if (err) throw err;
    console.log('Database Connected..');
});

module.exports = con;