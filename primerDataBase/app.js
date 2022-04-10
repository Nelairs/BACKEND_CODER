/* eslint-disable no-undef */

import  {config}    from    './config.js';
import  router    from    './router/routes.js'
import _knex  from 'knex';
import express from 'express';
const   PORT  =  8080;
const app   =   express();

app.set('view engine',  'ejs');
app.set('views','./views');


app.use(express.static('./public'));
app.use(express.json());
app.use(express.urlencoded({extended:   true}));

/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
export  const   knex    =   _knex(config)

//app.use('/api',    require('./router/routes.js').default);

app.use('/api', router);

const   server  =   app.listen(PORT,    ()  =>{

console.log(`Server started on http://localhost:${PORT}/api/productos`);
});
server.on('error',  (err)   =>  console.log(err));