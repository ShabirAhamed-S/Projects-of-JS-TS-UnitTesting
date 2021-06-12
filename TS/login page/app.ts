import "mysql"
import * as express from 'express';
import * as bodyParser from 'body-parser'
import 'dotenv/config'

const encoder = bodyParser.urlencoded({extended: false});

import connectionPool from './config/databaseConnection'
const app = express();
//app.use("/assets",express.static("assets"));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/",encoder, function(req,res){
    var name = req.body.username;
    var pass = req.body.password;

    connectionPool.query(`select * from loginuser where name=? and pass= ? `,[name,pass],function(error,results,fields){
        if (pass.length > 6) {
            res.send(results);
        } else {
            res.redirect("/");
        }
        res.end();
    })
})

// set app port 
app.listen(process.env.PORT);