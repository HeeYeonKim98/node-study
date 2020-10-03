// javascript 함수

//inner function
function add(a, b) {
  function square(x) {
    return x * x;
  }
  result = square(a) + square(b);
  console.log(result);
}

add(1, 2);

//closure
//함수와 함수가 선언된 어휘적 환경의 조합
function makeFunc() {
  var name = "Mozilla";
  function displayName() {
    alert(name);
  }
  return displayName;
}

var myFunc = makeFunc();
//myFunc변수에 displayName을 리턴함
//유효범위의 어휘적 환경을 유지
myFunc();
//리턴된 displayName 함수를 실행(name 변수에 접근)

//arrow function
function add1() {}
const add2 = () => {};

//argument
function thisArgTest1(a, b, c) {
  console.log("this:", this);
  console.log("args:", arguments[0]);
}

const thisArgTest2 = (a, b, c) => {
  console.log("this:", this);
  console.log("args:", arguments[0]);
};
thisArgTest1(1, 2, 3);
thisArgTest2(1, 2, 3);

//closure, function과 arrow function 차이 찾아보기
