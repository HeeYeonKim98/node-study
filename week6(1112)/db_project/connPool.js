const mysql = require("mysql2/promise");

(async () => {
    try {
        const pool = mysql.createPool({
            host: "localhost",
            user: "root",
            password: "gmldus98!",
            database: "db_project",
            waitForConnections: true,
            connectionLimit: 3,
        });

        const conn = await pool.getConnection();
        const [rows, op] = await conn.query("select * from db_table");
        console.log(rows);
        conn.release();
    } catch (e) {
        console.error(e.message);
    }
})();
