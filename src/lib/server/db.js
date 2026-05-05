import mysql from 'mysql2/promise';
import { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } from '$env/static/private';

const pool = mysql.createPool({
    host: DB_HOST,
    port: parseInt(DB_PORT),
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    waitForConnections: true, 
    connectionLimit: 10, 
    queueLimit: 0
});

export async function query(sql, params = []) {
    const [rows] = await pool.execute(sql, params);
    return rows;
}

export default pool;
