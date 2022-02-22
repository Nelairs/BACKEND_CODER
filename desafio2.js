const   fs  =   require("fs");
const { fileURLToPath } = require("url");

/* -------------------------------------------------------------------------- */
/*                                   CLASES                                   */
/* -------------------------------------------------------------------------- */

class   contenedor{


    constructor(nombreArchivo   =   ''){

        this.nombreArchivo  =   nombreArchivo;

    }

    create(){

        fs.writeFileSync(this.nombreArchivo,   '');

    }

    save(objetoGuardar){

        try{
            fs.appendFileSync(this.nombreArchivo,   `${JSON.stringify(objetoGuardar)}\n`);
        }   catch (err)  {

            console.log(err)
        }
        
    }

    getByID(){

        const   readedData  =   fs.readFileSync(this.nombreArchivo, 'utf-8');
        console.log(readedData);

        const   readedDataParsed    =   fs.readFileSync(this.nombreArchivo, 'utf-8');
        console.log(JSON.parse(readedDataParsed));

    }

    getAll(){

    }

    deleteByID(id){

    }

    deleteAll(){

    }

}

const   archivoTest    =   'test1Desafio.txt';

const   dataTest    =   {
    marca: 'FIAT', 
    modelo: 'Uno',  
    color:  'Blanco'};

const   dataTest2   =   {
    marca: 'FORD', 
    modelo: 'Focus',  
    color:  'Celeste'};

let archivo1    =   new contenedor(archivoTest);

//console.log(archivo1);

//console.log(archivo1.nombreArchivo);

/* --------------------------- CREACION DE ARCHIVO -------------------------- */
archivo1.create();

/* ----------------------------- GUARDO DATA UNO ---------------------------- */
archivo1.save(dataTest);

/* ----------------------------- GUARDO DATA DOS ---------------------------- */
archivo1.save(dataTest2);


archivo1.getByID();