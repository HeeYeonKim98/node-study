const { getConn } = require("../database/conn");

module.exports = {
    todoView: async (req, res, next) => {
        const conn = await getConn;
        try {
            const [rows, op] = await conn.query("select * from todolistDB");
            req.todoview = rows;
            conn.release();
            next();
        } catch (todoviewErr) {
            res.json(todoviewErr);
        }
    },

    todoInsert: async (req, res, next) => {},

    todoUpdate: async (req, res, next) => {},

    todoDelete: async (req, res, next) => {},
};
