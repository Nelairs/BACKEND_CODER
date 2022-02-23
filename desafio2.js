const { Console } = require("console");
const   fs  =   require("fs");

let numID   =   0;

/* -------------------------------------------------------------------------- */
/*                                   CLASES                                   */
/* -------------------------------------------------------------------------- */

class   contenedor{


    constructor(nombreArchivo   =   ''){

        this.nombreArchivo  =   nombreArchivo;

    }


/* -------------------------- CREACION DEL ARCHIVO -------------------------- */
    create(){

        fs.writeFileSync(this.nombreArchivo,    '');

        
    }


/* ----- GUARDO OBJETOS PASADOS POR PARAMETRO Y DEVUELVO ID DE CADA UNO ----- */
    save(objetoGuardar){

        objetoGuardar.id    =   numID;
        let retID   =   numID;
        numID++;

        const   objTxt  =   this.getAll();

        const   newObj  =   {objetoGuardar};

        objTxt.push(newObj);


        try{
            fs.promises.appendFile(this.nombreArchivo,   JSON.stringify(objTxt,null,2));
            console.log(retID);
        }   catch (err)  {

            console.log(err);
        }
        
    }

    getByID(){

        let   objByID  =   fs.readFileSync(this.nombreArchivo, 'utf-8');
        console.log('AAAAAAAAAAAAAAAAAAAA');    //MOMENTO DESESPERACION
        console.log(objByID);
    }

    getAll(){

        try {
            const   objTxt  =   fs.readFile(this.nombreArchivo, 'utf-8');

            return  JSON.parse(objTxt); 
        } catch (err) {
            return  []
        }
       
    }

    deleteByID(){

    }


/* --------------------------- DELETE DEL ARCHIVO --------------------------- */
    deleteAll(){

        fs.unlinkSync(this.nombreArchivo);
        
        fs.writeFileSync(this.nombreArchivo,    '');
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

const   dataTest3   =   {
    marca: 'CHEVROLET', 
    modelo: 'Corsa',  
    color:  'Gris'};

let archivo1    =   new contenedor(archivoTest);

/* --------------------------- CREACION DE ARCHIVO -------------------------- */
archivo1.create();

/* ----------------------------- GUARDO DATA UNO ---------------------------- */
archivo1.save(dataTest);

/* ----------------------------- GUARDO DATA DOS ---------------------------- */
archivo1.save(dataTest2);

archivo1.save(dataTest3);


/* -------------------------------------------------------------------------- */
console.log(archivo1.getAll());                 

archivo1.getByID();

//archivo1.deleteAll();