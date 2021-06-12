import * as express from'express' 
import '../index'
import '../configg'

const router = express.Router();

//const bcrypt = require('bcrypt');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('send email');

});

//Handle POST request for User Registration
router.post('/sent', function (req, res, next) {  
  res.send('mailsent')
});

export = router;
