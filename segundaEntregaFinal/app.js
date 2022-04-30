/* eslint-disable no-undef */
import  router    from    './router/routes.js'
import express from 'express';
import  './config/db_conf.js';
import  { DbModel }   from    './modules/db.models.js';

const   PORT  =  8080;
const app   =   express();
const __dirname =   './'
app.set('view engine',  'ejs');
app.set('views',    __dirname   +   '/views');


app.use(express.static( __dirname   +   '/public'));
app.use(express.json());
app.use(express.urlencoded({extended:   true}));

/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */


app.use('/api', router);


app.get('/',    (req,   res)    =>  {

    res.redirect('/api/productos')
})



const   server  =   app.listen(PORT,    ()  =>{

console.log(`Server started on http://localhost:${PORT}`);
});
server.on('error',  (err)   =>  console.log(err));