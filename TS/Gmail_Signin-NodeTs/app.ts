import * as express from 'express';
import * as  passport from "passport";
import * as logger from 'morgan'
import * as path from 'path'
import * as cookieParser from 'cookie-parser'
import './authenticate'
import 'dotenv/config'

import indexRouter = require('./routes/index');
import usersRouter = require('./routes/users');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(process.env.PORT, () => {
    console.log('server is started');
})

app.use(passport.initialize());
app.use(passport.session());

app.get('/google', passport.authenticate('google', { scope: ['profile','email'] }));

app.get('google/callback', passport.authenticate('google', { failureRedirect: '/auth/fail' }),
    (req, res, next) => {
        console.log(req.user, req.isAuthenticated());
        res.send('user is logged in');
    })

app.get('/fail', (req, res, next) => {
    res.send('user logged in failed');
});

app.get('/logout', (req, res, next) => {
    req.logout();
    res.send('user is logged out');
});