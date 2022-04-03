/* eslint-disable no-undef */
const   express =   require('express');
const   PORT  =  8080;
const app   =   express();

app.set('view engine',  'ejs');
app.set('views',    __dirname   +  '/views');


app.use(express.static(__dirname    +   '/public'));
app.use(express.json());
app.use(express.urlencoded({extended:   true}));

/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */


app.use('/api',    require('./router/routes'));


app.get('/index',    (req,   res)    =>  {

    res.render('index', {})
})



const   server  =   app.listen(PORT,    ()  =>{

console.log(`Server started on http://localhost:${PORT}`);
});
server.on('error',  (err)   =>  console.log(err));