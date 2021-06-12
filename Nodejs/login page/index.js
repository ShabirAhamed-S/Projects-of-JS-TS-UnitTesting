const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const encoder = bodyParser.urlencoded({ extended: false });
const { connectionPool } = require('./config/databaseConnection');
const app = express();
//app.use("/assets",express.static("assets"));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.post("/", encoder, function(req, res) {
    var name = req.body.username;
    var pass = req.body.password;

    connectionPool.query(`select * from loginuser where name=? and pass= ? `, [name, pass], function(error, results, fields) {
        if (pass.length > 6) {
            res.send(results);
        } else {
            res.redirect("/");
        }
        res.end();
    })
})


// set app port 
app.listen(process.env.PORT, () => {
    console.log('server')
});