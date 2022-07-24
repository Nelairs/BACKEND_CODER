import mongoose from "mongoose";
import { DbModel } from "../modules/db.models.js";



export  async function    getProd(){                //      WORKS

    try {
        const   response    =   await   DbModel.find();
        return  response;
    } catch (error) {
        console.log(error);
    }
}



export  async function  postProd(bodyProds){            //     WORKS

    try {
        const   response    =   await   DbModel.create(bodyProds);
        console.log(response);

    } catch (error) {
        console.log(error);
    }
}



export  async   function    putProd(bodyProds){     //     WORKS

    try {
        const   response    =   await   DbModel.updateOne({title: bodyProds.titleUpdate}, bodyProds);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}



export  async   function    deleteProd(bodyProds){     //     WORKS

    try {
        const response = await DbModel.deleteOne({title: bodyProds.titleUpdate});
        console.log(response);
      } catch (error) {
        console.log(error);
      }
}