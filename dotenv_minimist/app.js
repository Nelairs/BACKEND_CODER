/* eslint-disable no-undef */
import  router    from    './router/routes.js'
import express from 'express';
import minimist from 'minimist';
import  './config/db_conf.js';
import  { DbModel }   from    './modules/db.models.js';

const   options =   {
    alias:    {
        p:'port', 
    },
    default:    {
        port:   8080,
    },
};

const   {port} =   minimist(process.argv.slice(2), options);

console.log(port);
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



const   server  =   app.listen(port,    ()  =>{

console.log(`Server started on http://localhost:${port}`);
});
server.on('error',  (err)   =>  console.log(err));