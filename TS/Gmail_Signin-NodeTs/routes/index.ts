import * as express from 'express'
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Google Sign in using Node-TS' });
});

export= router;