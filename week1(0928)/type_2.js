// 2 : typeof number

const a = Number("1000");
const b = Number("1000");

console.log(Number.MAX_SAFE_INTEGER); //안전한 최대 정수 값 : (2^53-1)
console.log(Number.MAX_VALUE);
console.log(Number.MIN_SAFE_INTEGER); //안전한 최소 정수 값 : -(2^53-1)
console.log(Number.MIN_VALUE);
console.log(a === b); //true

// 2-1
const x = Number.MAX_SAFE_INTEGER + 1;
const y = Number.MAX_SAFE_INTEGER + 2;
const z = Number.MAX_SAFE_INTEGER + 1000;

console.log(Number.MAX_SAFE_INTEGER); //9007199254740991
console.log(x); //9007199254740992 same y,z

//표현할 수 있는 수의 범위에 벗어나는 경우 모두 같다고 인식, 범위 이상의 수는 모두 2^53으로 반올림 된다.

console.log(x === y); //true
