const express = require("express");
const fs = require("fs"); //파일 시스템 (파일 입출력) 모듈
const app = express();

//app.use 미들웨어 등록 함수
//경로를 지정해주지 않으면 어떠한 경로로 들어가도 app.use가 호출된다
//static(root : 폴더이름)
//프로필 사진, 사진을 접근할 수 있는 url을 던져줌
app.use(express.static("public"));

//어떠한 경로에도 파싱을 해주고(전역적으로) 다음 라우터 경로로 지나간다.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/register", (req, res) => {
    console.log(req.body);
    res.end();
});

try {
    fs.accessSync("public");
} catch {
    fs.mkdirSync("public");
} // 수정하고 서버 새로고침을 할 필요 없이 fs모듈과 try-catch로 로직 구현이 가능하다

app.listen(3001, () => {
    console.log("http://localhost:3001");
});
