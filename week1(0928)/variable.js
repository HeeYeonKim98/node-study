// javascript 변수선언

//옛날부터 변수선언에 쓰인 var, var의 단점을 보완하려 ES2015에 추가된 const, let

//var
//호이스팅 가능
//스코프에 엄격하지 않는다.
//재할당 가능
console.log(a);
var a = "aa";

//const
//호이스팅 가능하지만 access가 되지 않아 error
//중괄호 스코프
//재할당 불가능
//상수선언 키워드
//배열 또는 객체로 사용할 때 수정가능
const b = [1, 2, 3, 4, 5];
console.log(b);

b.push(6);
console.log(b);
b.pop();
console.log(b);

//let
//호이스팅 가능하지만 access가 되지 않아 error
//중괄호 스코프
//재할당 가능
let c = 3;
c = 10;
console.log(c);

//호이스팅
//자바스크립트 함수는 실행되기 전에 함수 안에 필요한 변수값들을 모두 모아서 유효 범위의 최상단에 선언한다
