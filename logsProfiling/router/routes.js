import  process from    'process';
import  log4js  from    '../log/log.config.js';



let arrayProd   =   [];


import * as dbMethods from '../dbMethods.js'
import { Router } from 'express';
import compression from 'compression';
const   router  =   Router();



router.get('/productos',   (req,   res)    =>{

    const   saveUrl =   req.url
    const   saveMethod  =   req.headers

    
    dbMethods.getProd()
        .then(function(v)   {
            arrayProd = [];
            arrayProd =   v; 
        })
        .catch(function(v)  {
            console.log('error');
        });

    res.status(200).render('prodListUser',  {
        arrayProd
    })

    const   loggerConsole   =   log4js.getLogger('consoleLog');
    loggerConsole.info(`La URL es: ${saveUrl} Tipo de peticion:  GET ${saveMethod}}`); 
    
});

router.get('/productos/form',   (req,   res)    =>  {

    const   saveUrl =   req.url
    const   saveMethod  =   req.headers

    res.status(200).render('prodForm',{

    });
    const   loggerConsole   =   log4js.getLogger('consoleLog');
    loggerConsole.info(`La URL es: ${saveUrl} Tipo de peticion:  GET ${saveMethod}}`); 
});

router.post('/productos',   (req,   res)    =>  {

    const   saveUrl =   req.url
    const   saveMethod  =   req.headers

    const   {body}  =   req;
    let arrayObj =   {...body};

    dbMethods.postProd(arrayObj);
    res.status(200).redirect('/api/productos');

    const   loggerConsole   =   log4js.getLogger('consoleLog');
    loggerConsole.info(`La URL es: ${saveUrl} Tipo de peticion:  POST ${saveMethod}}`); 
});

router.post('/productos/put',   (req,   res)    =>  {

    const   saveUrl =   req.url
    const   saveMethod  =   req.headers

    const   {body}  =   req;
    let arrayObj =   {...body};

    dbMethods.putProd(arrayObj);

    res.status(200).redirect('/api/productos');

    const   loggerConsole   =   log4js.getLogger('consoleLog');
    loggerConsole.info(`La URL es: ${saveUrl} Tipo de peticion:  POST ${saveMethod}}`); 

});

router.post('/productos/delete',    (req,   res)    =>  {

    const   saveUrl =   req.url
    const   saveMethod  =   req.headers

    const   {body}  =   req;
    let arrayObj =   {...body};

    dbMethods.deleteProd(arrayObj);

    res.status(200).redirect('/api/productos');

    const   loggerConsole   =   log4js.getLogger('consoleLog');
    loggerConsole.info(`La URL es: ${saveUrl} Tipo de peticion:  POST ${saveMethod}}`); 
  
});

router.get('/info', (req,   res)    =>  {

    const   saveUrl =   req.url
    const   saveMethod  =   req.headers


    let processData =   [{
        os: `${process.platform}`,
        nodeVersion: `${process.version}`,
        memoriaUso:   `${JSON.stringify(process.memoryUsage())}`,
        path: `${process.cwd()}`,
        processID:   `${process.pid}`,
        
}];
    
    //console.log(processData);
    res.status(200).render('info',  {
        processData
    })
    const   loggerConsole   =   log4js.getLogger('consoleLog');
    loggerConsole.info(`La URL es: ${saveUrl} Tipo de peticion:  GET ${saveMethod}}`); 
});

router.get('/infoComp', compression(),  (req,   res)    =>  {

    const   saveUrl =   req.url
    const   saveMethod  =   req.headers


    let processData =   [{
        os: `${process.platform}`,
        nodeVersion: `${process.version}`,
        memoriaUso:   `${JSON.stringify(process.memoryUsage())}`,
        path: `${process.cwd()}`,
        processID:   `${process.pid}`,
        
}];
    
    //console.log(processData);
    res.status(200).render('info',  {
        processData
    })
    const   loggerConsole   =   log4js.getLogger('consoleLog');
    loggerConsole.info(`La URL es: ${saveUrl} Tipo de peticion:  GET ${saveMethod}}`); 
});
export default   router;