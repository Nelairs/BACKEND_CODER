/* eslint-disable no-undef */
import  router    from    './router/routes.js'
import express from 'express';
import session from 'express-session';
import  './config/db_conf.js';
//import  { DbModel }   from    './modules/db.models.js';
import dotenv from 'dotenv';
import passport from 'passport';
import  './utils/passport.util.js'

dotenv.config();

const   PORT  =  8080;
const app   =   express();
const __dirname =   './'
app.set('view engine',  'ejs');
app.set('views',    __dirname   +   '/views');


app.use(express.static( __dirname   +   '/public'));
app.use(express.json());
app.use(express.urlencoded({extended:   true}));


app.use('/api', router);


app.use(
    session({
        secret: process.env.SECRET,
        rolling:    true,
        resave: true,
        saveUninitialized:  true,
    }),
);

app.use(passport.initialize());
app.use(passport.session());



/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */




app.get('/',    (req,   res)    =>  {

    res.redirect('/api/productos')
})



const   server  =   app.listen(PORT,    ()  =>{

console.log(`Server started on http://localhost:${PORT}`);
});
server.on('error',  (err)   =>  console.log(err));