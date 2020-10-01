// Java-Script 자료형과 키워드

// 1 : 자료형과 키워드
// let a = 10;
// let b = "안녕";
// let c = [];
// let d = {};
// let e = function () {};
// let f = () => {};
// let g;

// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);
// console.log(typeof e);
// console.log(typeof f);
// console.log(typeof g);

// 2 : number
const a = Number("1000");
const b = Number("1000");

console.log(Number.MAX_SAFE_INTEGER); //안전한 최대 정수 값
console.log(Number.MAX_VALUE);
console.log(Number.MIN_SAFE_INTEGER); //안전한 최소 정수 값
console.log(Number.MIN_VALUE);
console.log(a === b);

// 2-1
const x = Number.MAX_SAFE_INTEGER + 1;
const y = Number.MAX_SAFE_INTEGER + 2;

console.log(Number.MAX_SAFE_INTEGER);
// expected output: 9007199254740991

console.log(x);
// expected output: 9007199254740992

console.log(x === y);
// expected output: true
