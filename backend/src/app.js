require('dotenv').config();

const bodyParser  = require('body-parser');
const cookieParser = require('cookie-parser');
const express     = require('express');
const morgan      = require('morgan');
const path        = require('path');
// Importing routes
const index = require('./routes');
const users = require('./routes/users');


// initialization
const app = express();

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.use(require('node-sass-middleware')({
  src:  path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));
      
// default value for title local
app.locals.title = 'Libreria de Alberto';

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// routes
app.use('/api/users', users);
app.use('/', index);



module.exports = app;