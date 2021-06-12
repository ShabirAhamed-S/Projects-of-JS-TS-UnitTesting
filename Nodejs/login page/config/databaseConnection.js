const mysql = require('mysql');
var config = require('./configuration.js');
var connectionPool = mysql.createPool({
    host: config.mysqlHost,
    user: config.mysqlUser,
    password: config.mysqlPassword,
    database: config.mysqlDatabase
});
module.exports = { connectionPool }