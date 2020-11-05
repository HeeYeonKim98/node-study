//auto increment
const todos = [
    {
        id: 1,
        content: "안뇽1",
        isCompleted: false,
        date: "2020-11-05",
    },
    {
        id: 2,
        content: "안뇽2",
        isCompleted: true,
        date: "2020-11-06",
    },
    {
        id: 3,
        content: "안뇽3",
        isCompleted: false,
        date: "2020-11-07",
    },
    {
        id: 4,
        content: "안뇽4",
        isCompleted: true,
        date: "2020-11-08",
    },
    {
        id: 5,
        content: "안뇽5",
        isCompleted: false,
        date: "2020-11-09",
    },
];

const getTodo = (isCompleted = false) => {
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
