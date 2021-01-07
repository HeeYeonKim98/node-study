module.exports = {
    login: (req, res, next) => {
        try {
        } catch (loginErr) {
            res.json({ success: false, message: loginErr });
        }
    },
    signup: (req, res, next) => {
        try {
        } catch (signupErr) {
            res.json({ success: false, message: signupErr });
        }
    },
    view: (req, res, next) => {
        try {
        } catch (viewErr) {
            res.json({ success: false, message: viewErr });
        }
    },
};
