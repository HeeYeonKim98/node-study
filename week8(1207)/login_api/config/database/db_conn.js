const mysql = require("mysql2/promise");

const config = require("./db_config").local;
const pool = mysql.createPool({
    ...config,
    waitForConnections: true,
    connectionLimit: 3,
});

module.exports = {
    getConn: (async () => await pool.getConnection())(),
};
