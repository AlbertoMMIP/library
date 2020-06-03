import express, { json } from 'express';
import morgan from 'morgan';
import path from 'path';

// Importing routes
import index from './routes';


// initialization
const app = express();

// middlewares
app.use(morgan('dev'));
app.use(json());

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
app.use('/', index);

export default app;