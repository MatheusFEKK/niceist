import mysql from 'mysql';
import 'dotenv/config'

export const databaseConnection = 

        mysql.createConnection({
            host:process.env.DATABASE_ADDRESS,
            port:process.env.DATABASE_PORT,
            user:process.env.DATABASE_USER,
            password:process.env.DATABASE_PASSWORD,
            database:process.env.DATABASE_NAME,
        });
