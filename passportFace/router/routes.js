let arrayProd   =   [];

import * as dbMethods from '../dbMethods.js'
import { Router } from 'express';
import passport   from 'passport';
import *    as utils    from    '../utils/passport.util.js'
import { DbModel } from '../modules/db.models.js';


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


router.get('/adminLogin',   (req,   res)    =>  {

    res.status(200).render('login', {

    });
});

router.get('/auth/facebook',    passport.authenticate('facebook'));

router.get('/auth/facebook/callback',   passport.authenticate('facebook',   {

    successRedirect:    '/api/productos/form',
    failureRedirect:    'failLogin',
    
    })

);

router.get('/logout',    (req,  res)    =>  {
    req.logout;
    res.status(200).redirect('/api/productos');
})

router.get('/productos/form',   (req,   res)    =>  {
    let userID =    utils.lastUserInfo()
    res.status(200).render('prodForm',{
        userID
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