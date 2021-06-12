import * as  mysql from "mysql"

let config = require('./configuration');

let connectionPool = mysql.createPool({
    host: config.mysqlHost,
    user: config.mysqlUser,
    password: config.mysqlPassword,
    database: config.mysqlDatabase
});

export =  connectionPool 