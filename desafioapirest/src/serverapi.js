let testArr    =   [[{
    title: 'alpargatas_yute',
    price: 1300,
    thumbnail: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/077/620/products/polish_20191207_0942225831-78121a29673b9b170515757227831624-1024-1024.jpg'
}],
[{
    title: 'bombacha_campo',
    price: 2100,
    thumbnail:  'https://http2.mlstatic.com/D_NQ_NP_725692-MLA42273703592_062020-W.jpg'
}]
];



const   express =   require("express");
const   PORT  =  8080;
const app   =   express();

/* -------------------------- PARA PODER USAR JSON -------------------------- */
app.use(express.json());
app.use(express.urlencoded({extended:   true}));
/* -------------------------------------------------------------------------- */
app.use(express.static('public'));



/* ------------------------------- METODOS GET ------------------------------ */

app.get('/api/productos',   (req,   res)    =>{

    res.status(200).json(testArr);
    //console.log(testArr[0][0]);
    

});

app.get('/api/productos/:id',   (req,   res)    =>{

    const   {id}    =   req.params;
    if(id   === '0' || id  >   testArr.length){

        res.status(400).json({ error : 'producto no encontrado' });
    }   else{

        res.status(200).json(testArr[(id    -   1)][0]);
        res.status(200);
        
    }
    
});

/* -------------------------------------------------------------------------- */

/* ------------------------ METODOS POST, PUT, DELETE ----------------------- */

app.post('/api/productos',  (req,   res)    =>  {
    const   {body}  =   req;
    let arrayObj =   [body];
    
    testArr.push(arrayObj);
    
    res.status(200).send(`Se agrego correctamente`);
    
    //console.log(`Soy el body: \n ${JSON.stringify(arrayObj)}`);
    //console.log(testArr);
});

app.put('/api/productos/:id',   (req,   res)    =>{

    const   {id} =  req.params;
    const   {body}  =   req;

    //console.log(body);

    if(id   ===    '0'  ||  (id-1)  >   testArr.length){
        res.status(400).json({ error : 'producto no encontrado' });
    }else{

    testArr[(id -   1)][0].title =   body.title;
    
    testArr[(id -   1)][0].price =   body.price;

    testArr[(id -   1)][0].thumbnail =   body.thumbnail;
    
    res.status(200).json('ok');
    }
    
});

app.delete('/api/productos/:id',    (req,   res)    =>  {

    const   {id}    =   req.params;
    
    if(id   === '0' || (id-1)  >   testArr.length){
        res.status(400).json({ error : 'producto no encontrado' });
    }   else{

        testArr.splice((id  -   1),1);
        res.status(200).json(`Se borro el producto ${id}`);
        
    }
    

    
});



const   server  =   app.listen(PORT,    ()  =>{

console.log(`Server started on http://localhost:${PORT}`);
});

server.on('error',  (err)   =>  console.log(err));

