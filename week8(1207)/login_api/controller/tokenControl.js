const jwt = require("jsonwebtoken");
const { privateKey } = require("../config/jwt/jwt_config");

module.exports = {
    signToken: (req, res, next) => {
        try {
            req.token = jwt.sign({ user: req.user }, privateKey);
            next();
        } catch (signtokenErr) {
            res.json({ success: false, message: signtokenErr });
        }
    },

    verifyToken: (req, res, next) => {
        try {
            const token = req.headers.authorization;
            jwt.verify(token, privateKey, (err, decode) => {
                req.user = decode.user;
                next();
            });
        } catch (verifytokenErr) {
            res.json({ success: false, message: verifytokenErr });
        }
    },
};
