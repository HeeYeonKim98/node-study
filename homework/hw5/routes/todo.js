const express = require("express");
const router = express.Router();

const { todoView, todoInsert, todoUpdate, todoDelete } = require("../controllers/todoControl");

/**
 * @method GET
 * @summary view
 */
router.get("/view", todoView, (req, res) => {
    res.status(201).json({ success: true, message: "todoView 성공", data: req.todoview });
});

/**
 * @method POST
 * @summary insert
 */
router.post("/insert", (req, res) => {
    res.status(201).json({ success: true, message: "todoInsert 성공" });
});

/**
 * @method PUT
 * @summary update
 */
router.put("/update", (req, res) => {
    res.status(201).json({ success: true, message: "todoUpdate 성공" });
});

/**
 * @method DELETE
 * @summary delete
 */
router.delete("/delete", (req, res) => {
    res.status(201).json({ success: true, message: "todoDelete 성공" });
});

module.exports = router;
