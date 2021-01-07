const express = require("express");
const router = express.Router();

/**
 * @method GET
 * @summary index router
 */
router.get("/", (req, res) => [res.json("login rest api")]);

module.exports = router;
