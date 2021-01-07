const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const indexRouter = require("./routes/index");
app.use("/", indexRouter);
const userRouter = require("./routes/user");
app.use("/api/user", userRouter);

app.listen(9001, () => {
    console.log("http://localhost:9001");
});
