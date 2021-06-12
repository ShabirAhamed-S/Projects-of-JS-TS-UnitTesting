import 'dotenv/config'
export={
port : process.env.PORT,
mysqlHost : process.env.DB_HOST,
mysqlUser : process.env.DB_USER,
mysqlDatabase : process.env.DB_DATABASE,
mysqlPassword : process.env.DB_PASSWORD,
databaseConnectionPath : require('./databaseConnection')
}