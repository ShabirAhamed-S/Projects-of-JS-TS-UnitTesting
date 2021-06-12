const express = require('express');
let { mailsent } = require('../configg');

const router = express.Router();
require('../configg')
//const bcrypt = require('bcrypt');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('send email');

});

//Handle POST request for User Registration
router.post('/sent', function (req, res, next) {

  var tto = req.body.to;
  var ssubject = req.body.subject;
  var ttext = req.body.text;
  var hhtml = req.body.html;
  mailsent = {
    from:req.body.from,
    to: tto,
    subject: ssubject,
    text: ttext,
    html: hhtml
  }
  require('../index')
  module.exports=mailsent
  res.send(mailsent)
});

module.exports = router;
