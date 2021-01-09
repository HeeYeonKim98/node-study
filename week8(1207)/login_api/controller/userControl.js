const { getConn } = require("../config/database/db_conn");
const bcrypt = require("bcrypt");

module.exports = {
    login: async (req, res, next) => {
        const conn = await getConn;
        const { user_id, password } = res.body;

        if (user_id == null || password == null)
            return res.json({ success: false, msg: "채우지않은 정보가 있습니다." });

        try {
            const [rows, op] = await conn.query("select into");
            if (rows.length == 0) return res.json({ success: false });
            else {
                if (await bcrypt.compareSync(password, rows[0].password)) {
                    req.user = {
                        user_id: rows[0].user_id,
                        name: rows[0].name,
                    };
                    next();
                } else return res.json({ success: false });
            }
        } catch (loginErr) {
            res.json({ success: false, message: loginErr });
        }
    },

    signup: async (req, res, next) => {
        const conn = await getConn;
        const { user_id, password, name } = req.body;

        if (user_id == null || password == null || name == null)
            return res.json({ success: false, msg: "채우지않은 정보가 있습니다." });

        try {
            password = await bcrypt.hashSync(password, 10);
            await conn.query("insert (?,?,?)", [user_id, password, name]);
            next();
        } catch (signupErr) {
            res.json({ success: false, message: signupErr });
        }
    },

    view: async (req, res, next) => {
        const conn = await getConn;

        try {
        } catch (viewErr) {
            res.json({ success: false, message: viewErr });
        }
    },
};
