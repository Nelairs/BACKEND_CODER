/* -------------------------------------------------------------------------- */
/*                             CLASE CONSTRUCTORA                             */
/* -------------------------------------------------------------------------- */


class   libro{
    constructor (nombreLibro    =   '', autorLibro  =   ''){
        this.nombreLibro    =   nombreLibro;
        this.autorLibro =   autorLibro;
    }

}


class usuario   {
    constructor (nombre = '',apellido   =   '', libros  =   [], mascotas){
        this.nombre =   nombre;
        this.apellido   =   apellido;
        this.libros =   libros;
        this.mascotas  =   mascotas;
    }


/* -------------------------------------------------------------------------- */
/*                                   GETTERS                                  */
/* -------------------------------------------------------------------------- */

    get fullName(){

        return this.getFullName();
    }

    get countMascotas(){

        return  this.cntMascotas();
    }

    get getBooksNames(){
        return  this.getbooksnames();
    }
/* -------------------------------------------------------------------------- */
/*                                   SETTERS                                  */
/* -------------------------------------------------------------------------- */

    /*set addMascota(tipoMascota  =   ['']){  

        let arrayAux    =   [this.mascotas].concat(tipoMascota);
        this.mascotas   =   [];
        this.mascotas   =   arrayAux;
        //console.log(this.mascotas);

    }*/
/* -------------------------------------------------------------------------- */
/*                                   METHODS                                  */
/* -------------------------------------------------------------------------- */
    getFullName()   {

        console.log(`El nombre completo es ${this.nombre} ${this.apellido}`);
    }

    cntMascotas(){
        
        console.log(this.mascotas.length);

    }

    addBook(bookName    =   '', authorName  =   ''){
    
        let arrayAux    =   this.libros.concat(new libro(bookName,authorName));
        this.libros =   [];
        this.libros =   arrayAux;
        //console.log(this.libros);
    }

    getbooksnames(){

        const   values  =   usr1.libros.map(object  =>  object.nombreLibro);
        console.log(values);

    }

    addMascota(tipoMascota){  

        let m   =   [''];
        m   =   [tipoMascota];
        [this.mascotas].push(m);
        console.log(this.mascotas)
        //this.mascotas   =   [];
        //this.mascotas   =   arrayAux;

    }

}

const   usr1NombreLibro   =   'Love music';
const   usr1AutorLibro  =   'Zarcort';

const   usr1Name    =   'Santiago';
const   usr1Last    =   'Etchenique';
const   usr1Mascota =   'Perro';

let usr1Libros   =   [new libro(usr1NombreLibro,  usr1AutorLibro)];

let usr1    =   new usuario(usr1Name,   usr1Last,   usr1Libros, usr1Mascota);


usr1.addMascota('Gato');

//usr1.addMascota('Loro');

//usr1.addMascota('Cabra');

usr1.fullName;

usr1.countMascotas;

usr1.getBooksNames;

usr1.addBook('Alice in wonderland','Lewis Carrol');

usr1.addBook('Gaturro','Nik');

usr1.addBook('El mundo imaginario','Keri Smith');

//usr1.getBooksNames;

//console.table(usr1.libros,  ['nombreLibro']);



