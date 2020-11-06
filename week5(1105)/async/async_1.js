const fs = require("fs");

function callback(err, data) {
    if (err) console.log(err);
    else console.log(data);
}

const res = fs.readFileSync("./tt.txt", { encoding: "utf8" }, callback);

console.log("1");
console.log(res);
