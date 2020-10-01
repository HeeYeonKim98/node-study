// javascript 자료형과 키워드

// 1 : typeof all

let a = 10;
let b = "안녕";
let c = [];
let d = {};
let e = function () {};
let f = () => {};
let g;
let h = null;
let i = BigInt(123123123123123123123123);
let j = new Map();

console.log(typeof a); //int
console.log(typeof b); //string
console.log(typeof c); //object
console.log(typeof d); //object
console.log(typeof e); //function
console.log(typeof f); //function
console.log(typeof g); //undefinded
console.log(typeof h); //object -> javascript error
console.log(typeof i); //bigint -> ES2020에서 새로 나온 타입
console.log(typeof j); //object
