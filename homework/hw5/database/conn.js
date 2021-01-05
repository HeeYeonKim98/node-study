const mysql = require("mysql2/promise");

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "gmldus98!",
    database: "db_project",
    waitForConnections: true,
    connectionLimit: 3,
});

module.exports = {
    getConn: (async () => await pool.getConnection())(),
};
