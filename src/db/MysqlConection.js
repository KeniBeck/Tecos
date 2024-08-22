import mysql2 from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();


const pool = mysql2.createPool({
    host: process.env.DB_HOST,
    user: process.env.USER_NAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE_NAME,
    port: parseInt(process.env.DB_PORT), // Asegúrate de que el puerto sea un número entero
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    connectTimeout: 10000 // Aumenta el tiempo de espera a 10 segundos
});

export default pool;