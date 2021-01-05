const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const indexRouter = require("../hw5/routes/index"); //수정
app.use("/", cors(), indexRouter);

const todoRouter = require("./routes/todo"); //수정
app.use("/api/todo", cors(), todoRouter);

app.listen(9001, () => {
    console.log("http://localhost:9001");
});
