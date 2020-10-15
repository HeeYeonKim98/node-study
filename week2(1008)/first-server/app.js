// import express from "express" -> es6문법, node가 아직 es6문법을 사용하게 하지 않음, 사용하려면 바벨을 설정해야함.

const express = require("express");
const app = express();

//router
// HTTP GET 방식
app.get("/", (req, res, next) => {
    res.send("<h1>hello</h1>");
});

//res.render : 조각조각들을 하나의 html로 만들어줌
app.get("/users", (req, res) => {
    res.send("<h1>users</h1>");
});

app.get("/api", (req, res) => {
    res.json({ name: "heeyeon", success: true });
});

//클라이언트가 요청
app.get("/param/:id", (req, res) => {
    const { id } = req.params;
    console.log(id);
    res.end();
});

app.get("/query", (req, res) => {
    const { name } = req.query; //구조 분해 할당
    console.log(name);
    res.end();
});

// port binding
app.listen(3001, () => {
    console.log("http://localhost:3001");
});
