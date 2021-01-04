const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const indexRouter = require("../hw5/routes/index"); //수정
app.use("/", indexRouter);

const todoRouter = require("../hw5/routes/todoRouter"); //수정
app.use("/todo", todoRouter);

app.listen(9001, () => {
    console.log("http://localhost:9001/");
});
