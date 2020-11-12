const mysql = require("mysql2/promise"); //<- 드라이버, 모듈

// 1. connection
(async () => {
    const conn = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "gmldus98!",
        database: "db_project",
    });
    const [rows, op] = await conn.query("select * from db_table");
    console.log(rows);
})();

// connection 객체 하나 만들어줌

// 2. sql, injection

// 2-1. connection pool -> 여러개의 커넥션 객체를 미리 만들어놓음 : 1개 만들면 안되나?

// 3. commit / rollback -> 트랜젝션
