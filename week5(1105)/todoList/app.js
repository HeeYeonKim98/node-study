const express = require("express");
const app = express();
const morgan = require("morgan");

// application middlewere
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//load router
const todoRouter = require("./routes/todoRouter");
app.use("/todos", todoRouter);

//error handing
app.use((err, req, res, next) => {
    if (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

// port binding
app.listen(9001, (err) => {
    if (err) throw console.log(err);
    else console.log("http://localhost:9001/");
});
