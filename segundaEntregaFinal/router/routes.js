let arrayProd   =   [];
let testArr ;

import * as dbMethods from '../dbMethods.js'
import { Router } from 'express';
const   router  =   Router();



router.get('/productos',   (req,   res)    =>{


    
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

 
    
});

router.get('/productos/form',   (req,   res)    =>  {

    res.status(200).render('prodForm',{

    });
});

router.post('/productos',   (req,   res)    =>  {

    const   {body}  =   req;
    let arrayObj =   {...body};

    dbMethods.postProd(arrayObj);
    res.status(200).redirect('/api/productos');
});

router.post('/productos/put',   (req,   res)    =>  {

    const   {body}  =   req;
    let arrayObj =   {...body};

    dbMethods.putProd(arrayObj);

    res.status(200).redirect('/api/productos');

});

router.post('/productos/delete',    (req,   res)    =>  {

    const   {body}  =   req;
    let arrayObj =   {...body};

    dbMethods.deleteProd(arrayObj);

    res.status(200).redirect('/api/productos');
  
})

export default   router;