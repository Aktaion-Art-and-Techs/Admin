const createError = require('http-errors');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const session = require('express-session')
const MongoDBStore = require("connect-mongodb-session")(session)
var logger = require('morgan');
const cors = require('cors');
require('dotenv').config();

const panierRoute = require('./routers/panier.router')
const postRoute = require('./routers/post.router')
const produitRoute = require('./routers/produit.router')
const commandeRoute= require('./routers/commande.router')

const AppDB = require('./database/index')
const uri = process.env.NODE_ENV !== 'production' ? process.env.DEV_DB_URI : process.env.DB_URI
AppDB.connect()

var app = express();
app.use(express.json())

const store = new MongoDBStore({
  uri: uri,
})

store.on('error', error => console.log(error))

app.use(session({
  secret: "Ibrahim2011",
  cookie: {
      maxAge: 1000 * 60 * 60 * 24,
      sameSite: "lax",
      //secure: true,
  },
  store: store,
  resave: true,
  saveUninitialized:true
}))

if (app.get('env') === 'production') {
  app.set('trust proxy', 1) // trust first proxy
}


app.use(cors())
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(logger('dev'))


app.use('/api/commandes', commandeRoute)  
app.use('/api/produits', produitRoute)
app.use('/api/posts', postRoute)

app.get('*', (req, res) => {
    res.send('Welcome to API APP')
  })
 
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.urlencoded({extended: false}))
// catch 404 and forward to error handler

app.use(function(req, res, next) {
    next(createError(404));
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    return res.json({error:true, "msg":res.locals.message});
  });
  
module.exports = app;
  