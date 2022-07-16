import  dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

mongoose.connect(process.env.MONGO_URI_CLOUD, (err)   =>  {
    if(err){
        console.log('No se pudo conectar a MongoDB')
    }else{
        console.log('Conectado a MongoDB')
    }
});

export  default mongoose;