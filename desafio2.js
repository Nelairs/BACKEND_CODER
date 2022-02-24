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
    async   save(objetoGuardar){

        objetoGuardar.id    =   numID;
        let retID   =   numID;
        numID++;

        const   objTxt  =   await   this.getAll();

        const   newObj  =   {objetoGuardar};

        objTxt.push(newObj);


        try{
            await   fs.promises.writeFile(this.nombreArchivo,   JSON.stringify(objTxt,null,2));
            console.log(retID);
        }   catch (err)  {

            console.log(err);
        }
        
    }

    async   getByID(seekID){

        let   objByID  =   await   this.getAll();
        
        objByID =   objByID[seekID];
        
        //const   filterID    =   objByID.objetoGuardar.marca;
        
        //console.log(objByID);
        return  objByID.objetoGuardar;
    }

    async   getAll(){

        try {
            const   objTxt  =   await   fs.promises.readFile(this.nombreArchivo, 'utf-8');

            return  JSON.parse(objTxt); 
        } catch (err) {
            return  []
        }
       
    }

    async   deleteByID(id){

        let afterDelete =   [];

        const   objTxt  =   await   this.getAll();

        //await   this.deleteAll();        

        for (let i = 0; i < objTxt.length; i++) {
            
            if (i  != id) {
                
                //console.log(objTxt[i]);
                afterDelete.push(objTxt[i]);

            }   else{continue}
            
            
        }

        try{
            await   fs.promises.writeFile(this.nombreArchivo,   JSON.stringify(afterDelete,null,2));
            
        }   catch (err)  {

            console.log(err);
        }
    }


/* --------------------------- DELETE DEL ARCHIVO --------------------------- */
    async   deleteAll(){

        fs.unlinkSync(this.nombreArchivo);
        
        fs.writeFileSync(this.nombreArchivo,    '');
    }

}
/* -------------------------------------------------------------------------- */
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

/* -------------------------------------------------------------------------- */



async   function    pruebas(){
/* --------------------------- CREACION DE ARCHIVO -------------------------- */
archivo1.create();

/* ----------------------------- GUARDO DATA UNO ---------------------------- */
await   archivo1.save(dataTest);

/* ----------------------------- GUARDO DATA DOS ---------------------------- */
await   archivo1.save(dataTest2);

/* ---------------------------- GUARDO DATA TRES ---------------------------- */
await   archivo1.save(dataTest3);


/* ------------------------------- METODOS GET ------------------------------ */

//console.log(await   archivo1.getAll());                                                //DEVUELVE TODO EL ARCHIVO

//console.log('El ID buscado:'    +   JSON.stringify(await   archivo1.getByID(0)));     //ENVIAR EL ID A BUSCAR

/* ----------------------------- METODOS DELETE ----------------------------- */

//archivo1.deleteAll();             //BORRA TODO EL ARCHIVO

//archivo1.deleteByID(2);           //PARA PROBAR DIFERENTES ARCHIVOS CAMBIAR NUMERO
}

pruebas();