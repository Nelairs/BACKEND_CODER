/* -------------------------------------------------------------------------- */
/*                              ARRAY                                         */
/* -------------------------------------------------------------------------- */

const   array = [
    {
        "title":    'Escuadra',
        "price":    123.45,
        "thumbnail":   "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png" ,
        "id":   0
    },
    {
        "title":    'Calculadora',
        "price":    234.56,
        "thumbnail":    "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
        "id":   1
    },
    {
        "title":    'Globo Terraqueo',
        "price":    345.67,
        "thumbnail":    "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
        "id":   2
    }
];


/* -------------------------------------------------------------------------- */
/*                              SERVIDOR EXPRESS                              */
/* -------------------------------------------------------------------------- */
const   express =   require("express");

const   app =   express();


app.get("/productos",    (req,   res)    =>{
    
    res.send(`<h1>EL CONTENIDO DEL ARRAY ES:</h1>
    <p>${JSON.stringify(array)}</p>`)
    
});

app.get("/productosRandom", (req,   res)    =>{
    
    const max   =   array.length;
    const   index   =   Math.floor(Math.random() * (max));

    //console.log(`Largo del array: ${max}`);
    //console.log(`Indice del array:  ${index}`);
    //console.log(array[index]);


    res.send(JSON.stringify(array[index]));

});

const   PORT    =   8080;

const   server  =   app.listen(PORT,    ()  =>{
    console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
});

server.on("error",  (error) =>  console.log(error));