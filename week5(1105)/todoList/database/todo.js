const { getConn } = require("./pool");

const getTodo = (isCompleted = false) => {
    const conn = await getConn()

    try {
        
        
    } catch (error) {
        
    } finally{
        if(conn) conn.release()
    }

    if (isCompleted) {
        const list = todos.filter((v) => v.isCompleted == true);
        return list;
    } else return todos;
};

const updateTodo = (id, content) => {
    const i = todos.findIndex((v) => v.id == id);
    todos.splice(i, 1, { id, content, date: "202-11-05" });
};

const deleteTodo = (id, content) => {
    const i = todos.findIndex((v) => v.id == id);
    todos.splice(i, 1);
};

module.exports = { todos, getTodo, updateTodo, deleteTodo };
