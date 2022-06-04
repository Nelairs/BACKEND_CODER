/* eslint-disable no-undef */
import  router    from    './router/routes.js'
import express from 'express';
import minimist from 'minimist';
import cluster from 'node:cluster';
import { cpus } from 'node:os';
import  './config/db_conf.js';

let numCPUs   =   1;

const   options =   {
    alias:    {
        p:'port',
        m:'mode',
    },
    default:    {
        port:   8080,
        mode:   'FORK',
    },
};

const   {port, mode} =   minimist(process.argv.slice(2), options);

//console.log(port);
//console.log(mode);
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

if(mode === 'CLUSTER'){
    
    numCPUs  =   cpus().length;
}


if(cluster.isMaster){
    for(let i=0;  i <   numCPUs;    i++){
        cluster.fork();
    }
    cluster.on("exit",  (worker,    code,   signal) =>  {
        cluster.fork();
    })
}else{


const   server  =   app.listen(port,    ()  =>{

console.log(`Server started on http://localhost:${port}`);
});
server.on('error',  (err)   =>  console.log(err));
}