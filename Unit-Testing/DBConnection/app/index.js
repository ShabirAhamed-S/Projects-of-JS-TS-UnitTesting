var express = require('express');
var app = express();
var config = require('../config');

app.use(express.static(config.staticFolder));

app.listen(config.port, () => {
  console.log(`Server is listening on ${config.port}`)
});
