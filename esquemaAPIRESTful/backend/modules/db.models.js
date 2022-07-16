import mongoose from "mongoose";

const   Schema  =   new mongoose.Schema({

    title:{
        type:   String,
        required:   true
    },
    price:{
        type:   Number,
        required:   true
    },
    thumbnail:{
        type:   String,
        required:   true
    }
});

export  const   DbModel    =   mongoose.model('Productos', Schema);