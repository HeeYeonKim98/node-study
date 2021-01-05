const express = require("express");
const router = express.Router();

const { todoView, todoInsert, todoUpdate, todoDelete } = require("../controllers/todoControl");

/**
 * @method GET
 * @summary view
 */
router.get("/view", (req, res) => {});

/**
 * @method POST
 * @summary insert
 */
router.post("/insert", (req, res) => {});

/**
 * @method PUT
 * @summary update
 */
router.put("/update", (req, res) => {});

/**
 * @method DELETE
 * @summary delete
 */
router.delete("/delete", (req, res) => {});

module.exports = router;
