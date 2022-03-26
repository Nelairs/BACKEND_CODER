let testArr    =   [
{
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

let contactosArr    =   [
    {
        email: 'saetchenique@gmail.com',
        time: '24/3/2022 17:04:24' ,
        message: 'Buenas tardes, esto esta bien profe?'
    },
    {
        email: 'diegoalzate@coderhouse.com',
        time: '25/3/2022 10:15:54',
        message: 'Esta correcto.'
    }
    ];


const   express =   require('express');
const http  =   require('http');
const   {engine}    =   require('express-handlebars');
const   {Server, Socket}    =   require('socket.io');

const   PORT  =  8080;
const app   =   express();

const server =  http.createServer(app);
const   io  =   new Server(server);


app.use(express.json());
app.use(express.urlencoded({extended:   true}));

app.set('views',    './src/views');
app.set('view engine',  'hbs');

app.engine('hbs',   engine({

    extname:    '.hbs',
    defaultLayout:  'index.hbs',
    layoutDir   :   __dirname   +   '/views/layouts',
    partialsDir:    __dirname   +   '/views/partials'
}));

app.get('/',    (req,   res)    =>  {

    res.status(200).render('main.hbs');
});

io.on("connection", (socket)    =>  {
    //mensaje cliente conectado
    console.log('Usuario conectado 💻✅');

    //Envio lista a cliente conectado
    io.sockets.emit("listBack",    testArr);

    //Envio lista msj
    io.sockets.emit('listMsj', contactosArr);



    socket.on('disconnect', ()=>{
        console.log('Usuario desconectado 💻❌')
    })
})

app.post('/productos',  (req,   res)    =>  {
    const   {body}  =   req;
    const arrayObj =   {...body};
    
    testArr.push(arrayObj);
    
    res.status(200).redirect('/');
    //res.json(req.body).status(200);
});

app.post('/contacts',   (req,   res)    =>  {
    const   {body}  =   req;
    const arrayObj =   {...body};   

    arrayObj.time   =   new Date().toLocaleString();
    
    contactosArr.push(arrayObj);
    
    res.status(200).redirect('/');
})


server.listen(PORT,    ()  =>{

console.log(`Server started on http://localhost:${PORT}`);
});
server.on('error',  (err)   =>  console.log(err));