const { getConn } = require("../config/database/db_conn");

module.exports = {
    login: (req, res, next) => {
        const conn = await getConn;

        try {
        } catch (loginErr) {
            res.json({ success: false, message: loginErr });
        }
    },
    signup: (req, res, next) => {
        const conn = await getConn;

        try {
        } catch (signupErr) {
            res.json({ success: false, message: signupErr });
        }
    },
    view: (req, res, next) => {
        const conn = await getConn;

        try {
        } catch (viewErr) {
            res.json({ success: false, message: viewErr });
        }
    },
};
