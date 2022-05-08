let arrayProd   =   [];
//let testArr ;

import * as dbMethods from '../dbMethods.js'
//import { Router } from 'express';
import express from 'express';

//import req from 'express/lib/request';
import  dotenv  from    'dotenv';
import session from 'express-session';
import  mongoStore  from    'connect-mongo';
import  cookieParser    from    'cookie-parser';
import  auth    from    '../middleware/auth.middleware.js';

const   router  =   express.Router();
const   app     =   express();
dotenv.config();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({    extended:   true    }));
app.use(
    session({
        store: mongoStore.create({
            mongoUrl:   process.env.MONGO_URI_SESSION,
            options:    {
                userNewUrlParser:   true,
                useUnifiedTopology: true,
            },
        }),

        secret: process.env.SECRET,
        resave: false,
        saveUninitialized:  false,
    }),
);


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


router.post('/login',    (req,   res)    =>  {

    const   {   user,   pass    }   =   req.body;

    if(user === 'coderhouse'    &&  pass    == '123456'){
        req.session.login   =   true;
        res.send('login correcto');
    }else{
        res.send('login incorrecto').redirect('/api/login');
    }
})

router.get('/login',    (req,   res)    =>  {

    res.status(200).render('loginAdmin',    {

    })
})
export default   router;