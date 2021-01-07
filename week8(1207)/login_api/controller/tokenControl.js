module.exports = {
    signToken: (req, res, next) => {
        try {
        } catch (signtokenErr) {
            res.json({ success: false, message: signtokenErr });
        }
    },
    verifyToken: (req, res, next) => {
        try {
        } catch (verifytokenErr) {
            res.json({ success: false, message: verifytokenErr });
        }
    },
};
