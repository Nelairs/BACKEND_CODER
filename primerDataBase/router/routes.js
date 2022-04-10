let arrayProd   =   [{
    id: 0,
    title: 'Campera Columbia Alpine Action II',
    price: 28778,
    thumbnail: 'http://columbiasportswear.com.ar/media/catalog/product/cache/84501bf2af75e659022a456946bd3e2c/f/1/f17_1743171_337_f_1_4.jpg'
},
{
    id: 1,
    title: 'Zapatillas Botita Finders Trekking',
    price: 11599,
    thumbnail:  'https://http2.mlstatic.com/D_NQ_NP_646285-MLA45738644441_042021-O.webp'
},
{
    id: 2,
    title: 'NATUREHIKE POLAINAS',
    price: 4293,
    thumbnail:  'https://www.nakaoutdoors.com.ar/img/articulos/2021/12/naturehike_polainas_nh20hj011_1_imagen2.jpg'
}];

let arrayCarrito    =   [

]
/* -------------------------------------------------------------------------- */
import * as dbMethods from '../dbMethods.js'
import { Router } from 'express';
const   router  =   Router();



router.get('/productos/form',    (req,   res)    =>  {
    

   /* ----------------------------- PANEL DE ADMIN ----------------------------- */
    res.status(200).render('prodForm',  {
        
    });
});

router.get('/403',    (req,   res)    =>  {
    /* ---------------------- LISTA DE TODOS LOS PRODUCTOS ---------------------- */
    res.status(200).render('403',  {
        
    });
});
/* ------------------------------ GET Y GET ID ------------------------------ */

router.get('/productos',    (req,   res)    =>  {
    /* ---------------------- LISTA DE TODOS LOS PRODUCTOS ---------------------- */
    res.status(200).render('prodListUser',  {
        arrayProd
    });
});

router.get('/productos/:id',   (req,   res)    =>{
/* ------------------------- LISTA DE PRODUCTO UNICO ------------------------ */
    const   {id}    =   req.params;
    if(id   === '0' || id  >   arrayProd.length){

        res.status(400).json({ error : 'producto no encontrado' });
    }   else{

        let arrayAux =   arrayProd[(id   -   1)];
        
        res.status(200).render('prodSingle',  {
            arrayAux
        });
        
    }
    
});
/* -------------------------------------------------------------------------- */

router.post('/productos',  (req,   res)    =>  {
    /* --------------------------- CARGA DE PRODUCTOS --------------------------- */
    const   {body}  =   req;
    let arrayObj =   {...body};


    dbMethods.postProd(arrayObj);


    res.status(200).redirect('/api/productos');
    
});
router.post('/productos/aa',  (req,   res)    =>  {
    /* --------------------------- CARGA DE PRODUCTOS --------------------------- */
    const   {body}  =   req;
    let arrayObj =   {...body};

    arrayObj.id =   arrayProd.length;

    arrayProd.push(arrayObj);
    
    res.status(200).redirect('/api/productos');
    
});


router.post('/productos/put',   (req,   res)    =>{

    /* ------------------ PUT HECHO CON POST PARA FUNCIONALIDAD ----------------- */
    
    const   {body}  =   req;
    let arrayObj =   {...body};

    
    //console.log(body);

    if(arrayObj.id   ===    '0'  ||  (arrayObj.id-1)  >   arrayProd.length){
        res.status(400).json({ error : 'producto no encontrado' });
    }else{

        arrayProd[(arrayObj.id -   1)].title =   body.title;
        
        arrayProd[(arrayObj.id -   1)].price =   body.price;

        arrayProd[(arrayObj.id -   1)].thumbnail =   body.thumbnail;
    
    res.status(200).redirect('/api/productos');
    }
    
});

router.put('/productos/:id',   (req,   res)    =>{
/* ---------- ACTUALIZACION MEDIANTE PUT TESTEADO CON THUNDERCLIENT --------- */
    const   {id} =  req.params;
    const   {body}  =   req;

    //console.log(body);

    if(id   ===    '0'  ||  (id-1)  >   arrayProd.length){
        res.status(400).json({ error : 'producto no encontrado' });
    }else{

        arrayProd[(id -   1)].title =   body.title;
        
        arrayProd[(id -   1)].price =   body.price;

        arrayProd[(id -   1)].thumbnail =   body.thumbnail;
    
    res.status(200).redirect('/api/productos');
    }
    
});

router.post('/productos/delete',    (req,   res)    =>  {
/* ---------------- DELETE HECHO CON POST PARA FUNCIONALIDAD ---------------- */
    const   {body}  =   req;
    let arrayObj =   {...body};
    
    if(arrayObj.id   === '0' || (arrayObj.id-1)  >   arrayProd.length){
        res.status(400).json({ error : 'producto no encontrado' });
    }   else{

        arrayProd.splice((arrayObj.id  -   1),1);
        res.status(200).redirect('/api/productos');
        
    }  
});

router.delete('/productos/:id',    (req,   res)    =>  {
/* -------------------- DELETE TESTEADO CON THUNDERCLIENT ------------------- */
    const   {id}    =   req.params;
    
    if(id   === '0' || (id-1)  >   arrayProd.length){
        res.status(400).json({ error : 'producto no encontrado' });
    }   else{

        arrayProd.splice((id  -   1),1);
        res.status(200).redirect('/api/productos');
        
    }  
});

/* -------------------------------------------------------------------------- */
/*                                   CARRITO                                  */
/* -------------------------------------------------------------------------- */

router.get('/carrito',    (req,   res)    =>  {     
    /* --------------------------- LISTADO DE CARRITO --------------------------- */
    res.status(200).render('carritoList',  {
        arrayCarrito
    });

 
});

router.post('/carrito',  (req,   res)    =>  {
    /* ---------------------------- CARGA DE CARRITO ---------------------------- */
    const   {body}  =   req;
    let arrayObj =   {...body};

    arrayCarrito.push(arrayObj);
    
    //console.log(arrayCarrito);
    res.status(200).redirect('/api/productos');
    
});

router.get('/carrito/delete',    (req,   res)    =>  {
//DELETE HECHO CON GET  PARA DAR FUNCIONALIDAD

    const   {body}  =   req;
    let arrayObj =   {...body};
    
    if(arrayObj.id   === '0' || (arrayObj.id-1)  >   arrayCarrito.length){
        res.status(400).json({ error : 'producto no encontrado' });
    }   else{

        arrayCarrito.splice((arrayObj.id  -   1),1);
        res.status(200).redirect('/api/productos');
        
    }  
});


router.delete('/carrito/:id',    (req,   res)    =>  {
/* -------------------- DELETE TESTEADO CON THUNDERCLIENT ------------------- */
    const   {id}    =   req.params;
    
    if(id   === '0' || (id-1)  >   arrayCarrito.length){
        res.status(400).json({ error : 'producto no encontrado' });
    }   else{

        arrayCarrito.splice((id  -   1),1);
        res.status(200).redirect('/api/productos');
        
    }  
});

export default   router;