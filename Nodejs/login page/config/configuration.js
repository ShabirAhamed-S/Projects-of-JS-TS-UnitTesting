require("dotenv").config();
exports.port = process.env.PORT;
exports.mysqlHost = process.env.DB_HOST;
exports.mysqlUser = process.env.DB_USER;
exports.mysqlDatabase = process.env.DB_DATABASE;
exports.mysqlPassword = process.env.DB_PASSWORD;
exports.databaseConnectionPath = require('./databaseConnection.js')