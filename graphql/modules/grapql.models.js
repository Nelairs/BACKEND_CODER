import  {buildSchema}   from    'graphql'
import * as dbMethods from  '../DAOs/dbMethods.js'

const arrayProd = []

export const schema = buildSchema(`
  type Producto {
    id: ID!
    title: String
    price: Int
    thumbnail: String
  }
  input ProductosInput {
    title: String!
    price: Int!
    thumbnail: String!
  }
  input ProductoEditInput {
    title: String
    price: Int
    thumbnail: String
  }
  input FilterInput {
    price: Int
  }
  type Query {
    encontrarProducto(id:ID!):Producto
    obtenerProductos:[Producto]
  }
  type Mutation {
    agregarProducto(data: ProductosInput): Producto
    editarProducto(id:ID!, data:ProductoEditInput!):Producto
  }
`);


/* -------------------------------- MUTATIONS ------------------------------- */

export function agregarProducto({ data }) {

  const persona = {
    id: uuid(),
    ...data,
  };
  return persona;
}

export function editarProducto ({ id, data }) {

}

/* --------------------------------- QUERYS --------------------------------- */

export function encontrarProducto({ id }) {
 

  return persona;
}

export function obtenerProductos() {


  dbMethods.getProd()
        .then(function(v)   {
            arrayProd.push(v);
            console.log(v);
            
        })
        .catch(function(v)  {
            console.log('error');
            // const   loggerFileError  =   log4js.getLogger('fileError');
            // loggerFileError.error(`Error en metodo DB`)
        });
  
  return arrayProd;
}