const express = require("express");
const router = express.Router();

const { login, signup, view } = require("../controller/userControl");
const { signToken, verifyToken } = require("../controller/tokenControl");

/**
 * @method POST
 * @summary 로그인
 */
router.post("/login", login, signToken, (req, res) => {
    res.json({ success: true, message: "login 성공", data: req.token });
});

/**
 * @method POST
 * @summary 회원가입
 */
router.post("/signup", signup, (req, res) => {
    res.json({ success: true, message: "signup 성공" });
});

/**
 * @method POST
 * @summary 내 정보 조회
 */
router.get("/view", verifyToken, view, (req, res) => {
    res.json({ success: true, message: "view 성공", data: req.user });
});

module.exports = router;
