const { getTodo, updateTodo, deleteTodo } = require("../database/todo");

const router = require("express").Router();

/**
 * @description list 모두 조회
 * @routes GET
 */
router.get("/", (req, res, next) => {
    // const todoList = getTodo(true);
    const todoList = getTodo(true);
    res.status(200).json({ success: true, todoList });
});

/**
 * @description list 수정
 * @routes PUT
 * @request @body { content }
 * @summary put -> 전체 수정, fetch -> 일부 수정
 */
router.put("/:id", (req, res, next) => {
    const { content } = req.body;
    const { id } = req.params;
    updateTodo(id, content);
    res.status(200).json({ success: true, message: "list 수정 성공" });
});

/**
 * @description list 삭제
 * @routes DELETE
 */
router.delete("/:id", (req, res, next) => {
    const { id } = req.params;
    deleteTodo(id);
    res.status(200).json({ success: true, message: "list 삭제 성공" });
});

/**
 * @description list 마감 조회
 * @routes GET
 */
router.get("/complete", (req, res, next) => {
    const isComplete = getTodo(true);
    res.status(200).json({ success: true, isComplete });
});

module.exports = router;
