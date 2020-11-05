const fs = require("fs");

// function callback(err, data) {
//     if (err) console.log(err);
//     else console.log(data);
// }

const res = fs.readFileSync("./tt.txt", { encoding: "utf8" });

console.log("1");
console.log("1");
console.log(res);
//콜 스택 부터 (메인 스레드) 적용하고 넘어감
