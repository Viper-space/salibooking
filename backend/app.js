import express from "express";
import bodyParser from 'body-parser';
import session from "express-session";
import passport, { authenticate } from "passport";
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const Google_Client_ID = '';
const Google_Client_Secret = '';

passport.use(new GoogleStrategy({
    clientID: Google_Client_ID,
    clientSecret: Google_Client_Secret,
    callbackURL: 'http://localhost:3000/auth/google/callback'
},
    function(accesToken, refreshToken, profile, done){
        userProfile = profile;
        return done(null, userProfile);
}));

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//usage of session
app.use( session({
    resave: false,
    saveUninitialized: true,
    secret: 'SECRET'
}));

//passport initialization and suc/err pages
app.use(passport.initialize());
app.use(passport.session());

app.get('/authsucess', (req,res) => res.send(userProfile));
app.get('/error', (req,res) => res.send('error logging in'));

passport.serializeUser(function(user, cb) {
    cb(null, user)
});

passport.deserializeUser(function(obj, cb){
    cb(null, obj)
});
//start of Google Oauth setup
app.get('/auth/google',
 passport.authenticate('google', {scope: ['profile', email]}));

app.get('auth/google/callback',
    passport.authenticate('google', {failureRedirect: '/error'}),
    function(req,res){
        res.redirect('/sucess');
    });


//naglasava na kojem portu se slusa server
app.listen(5000, function () {
    console.log("SERVER STARTED ON localhost:5000");
})
