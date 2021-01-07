const mysql = require("mysql2");

const config = require("./db_config");
const pool = mysql.createPool({
    ...config,
    waitForConnections: true,
    connectionLimit: 3,
});

module.exports = {
    getConn: (async () => await pool.getConnection())(),
};
