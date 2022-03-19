let testArr    =   [{
    title: 'alpargatas_yute',
    price: 1300,
    thumbnail: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/077/620/products/polish_20191207_0942225831-78121a29673b9b170515757227831624-1024-1024.jpg'
},
{
    title: 'bombacha_campo',
    price: 2100,
    thumbnail:  'https://http2.mlstatic.com/D_NQ_NP_725692-MLA42273703592_062020-W.jpg'
},
{
    title: 'faja',
    price: 1200,
    thumbnail:  'https://http2.mlstatic.com/D_NQ_NP_725692-MLA42273703592_062020-W.jpg'
}
];



const   express =   require('express');
const   {engine}  =   require('express-handlebars');

const   PORT  =  8081;
const app   =   express();

app.use(express.json());
app.use(express.urlencoded({extended:   true}));

app.use(express.static("public"));

app.set('views',    './src/views');
app.set('view engine',  'hbs');

app.engine('hbs',   engine({

    extname:    '.hbs',
    defaultLayout:  'index.hbs',
    layoutDir   :   __dirname   +   '/views/layouts',
    partialsDir:    __dirname   +   '/views/partials'
}))

app.get('/',    (req,   res)    =>  {

    res.status(200).render('main_form',  {});

})


app.get('/productos',   (req,   res)    =>{

    res.status(200).render('main_list', {
        testArr,
    });
    
    
    

});


app.post('/productos',  (req,   res)    =>  {
    const   {body}  =   req;
    const arrayObj =   {...body};
    
    testArr.push(arrayObj);
    
    res.status(200).redirect('/');
    //res.json(req.body).status(200);
});



const   server  =   app.listen(PORT,    ()  =>{

console.log(`Server started on http://localhost:${PORT}`);
});
server.on('error',  (err)   =>  console.log(err));