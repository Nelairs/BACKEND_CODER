import { knex } from "./app.js";
    

export    async   function testKnex(){

        try {
            
            console.log('CLASS SQL');

            const   exists  =   await knex.schema.hasTable('productos');
    
            console.log(exists);

        } catch (error) {

            console.log(error);
        }finally{
            knex.destroy();
        }
}


export  async function  postProd(bodyProds){

    try {
        
        const   response =  await knex('productos').insert({title: bodyProds.title,   price: bodyProds.price, thumbnail: bodyProds.thumbnail});

        console.log('Se agrego el producto');

        console.log(response);
        
    } catch (error) {
        console.log(error);
    }finally{
        knex.destroy();
    }
}

