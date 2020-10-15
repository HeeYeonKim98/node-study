const express = require("express");
const app = express();

app.use((req, res, next) => {
    next();
    console.log(`${req.id}:${res.statusCode} - ${new Date().toLocaleString}`);
});

app.get("/", (res, req) => {
    console.log("/실행");
});

app.listen(3001, () => {
    console.log("http://localhost:3001");
});
