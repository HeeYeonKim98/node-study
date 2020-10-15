const express = require("express");
const app = express();

//router
// HTTP GET 방식
app.get("/", (req, res, next) => {
    res.send("<h1>hello</h1>");
});
