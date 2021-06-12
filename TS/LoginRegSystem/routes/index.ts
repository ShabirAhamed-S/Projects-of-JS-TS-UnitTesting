import * as express from 'express'
const router = express.Router();
import 'mysql'
import * as bcrypt from 'bcrypt'
import con  from '../conn/conn' 

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.session.flag == 1){
    req.session.destroy();
    res.render('index', { title: 'Node-Ts', message : 'Email Already Exists' , flag : 1});
  }
  else if(req.session.flag == 2){
    req.session.destroy();
    res.render('index', { title: 'Node-Ts', message : 'Registration Done. Please Login.', flag : 0});
  }
  else if(req.session.flag == 3){
    req.session.destroy();
    res.render('index', { title: 'Node-Ts', message : 'Confirm Password Does Not Match.', flag : 1});
  }
  else if(req.session.flag == 4){
    req.session.destroy();
    res.render('index', { title: 'Node-Ts', message : 'Incorrect Email or Password.', flag : 1 });
  }
  else{
    res.render('index', { title: 'Node-Ts' });
  }
   
});

//Handle POST request for User Registration
router.post('/auth_reg', function(req, res, next){

  var fullname = req.body.fullname;
  var email = req.body.email;
  var password = req.body.password;
  var cpassword = req.body.cpassword;

  if(cpassword == password){

    var sql = `SELECT * FROM user WHERE email = '${email}'`;

    con.query(sql, function(err, result, fields){
      if(err) throw err;

      if(result.length > 0){
        req.session.flag = 1;
        res.redirect('/');
      }else{

        var hashpassword = bcrypt.hashSync(password, 10);
        var sql = `INSERT INTO user(fullname,email,password) VALUES('${fullname}','${email}','${hashpassword}')`;

        con.query(sql, function(err, result, fields){
          if(err) throw err;
          req.session.flag = 2;
          res.redirect('/');
        });
      }
    });
  }else{
    req.session.flag = 3;
    res.redirect('/');
  }
});


//Handle POST request for User Login
router.post('/auth_login', function(req,res,next){

  var email = req.body.email;
  var password =req.body.password;

  var sql = `SELECT * FROM user WHERE email = '${email}'`;
  
  con.query(sql, function(err,result, fields){
    if(err) throw err;

    if(result.length && bcrypt.compareSync(password, result[0].password)){
      req.session.email = email;
      res.redirect('/home');
    }else{
      req.session.flag = 4;
      res.redirect('/');
    }
  });
});


//Route For Home Page
router.get('/home', function(req, res, next){
  res.render('home', {message : 'Welcome, ' + req.session.email});
});

router.get('/logout', function(req, res, next){
  if(req.session.email){
    req.session.destroy();
    res.redirect('/');
  }
})

export = router;