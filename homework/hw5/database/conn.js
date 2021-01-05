const mysql = require("mysql2/promise");

const pool = async () => {
    mysql.createPool({
        host: "localhost",
        user: "root",
        password: "gmldus98!",
        database: "db_project",
        waitForConnections: true,
        connectionLimit: 3,
    });
};

module.exports = {
    getConn: () => pool.getConnection(),
};
