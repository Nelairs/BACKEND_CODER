import  dotenv  from 'dotenv';

dotenv.config();

export  const   config  =   {

    client: 'mysql2',
    connection: {

        host:   process.env.HOST_DB,
        user:   process.env.USER_DB,
        password:   process.env.PASS_DB,
        database:   process.env.DB,
    },
}