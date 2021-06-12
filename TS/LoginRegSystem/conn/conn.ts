import * as mysql from 'mysql'
import config=require('./db.config')
import 'dotenv/config'
let con = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database
});

con.connect((err) => {
    if (err) throw err;
    console.log('Database Connected..');
});

export = con;