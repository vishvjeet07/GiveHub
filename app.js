require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./server/config/db');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const checkAuth = require('./server/middleware/check_auth');

const expressLayouts = require('express-ejs-layouts');

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(session ({
    secret:'piepie',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URI
    })
}));

app.use(passport.initialize());
app.use(passport.session());

connectDB();
app.use(express.static('public'));
app.use(expressLayouts);


app.use(checkAuth);
app.set('view engine','ejs');

app.use('/',require('./server/routes/index'));
app.use('/',require('./server/routes/auth'));
app.use('/',require('./server/routes/upload'));
app.use('/',require('./server/routes/dashboard'));

app.listen(3000,'0.0.0.0',()=>{
    console.log('running');
});

