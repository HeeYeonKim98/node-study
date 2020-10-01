//4 : typeof function

function add(a, b) {
  return a + b;
}

console.log(add(10, 20));

//javascript 함수는 일급 함수
//1) 변수에 담을 수 있다.
//2) 다른 함수(메서드)의 인자로 넘길 수 있다.
//3) 다른 함수(메서드)에서 리턴할 수 있다.

//1)
const A = () => {
  console.log("1. 변수에 담을 수 있다.");
};

A();

//2)
function B(b) {
  return b();
}

B(function () {
  console.log("2. 어떤 함수의 인자로 넘길 수 있다.");
});

//3)
function C() {
  return "3. 다른 함수(메서드)에서 리턴할 수 있다.";
}

function main_c(func, str) {
  console.log(func() + str);
}

main_c(C, "히히");

//2)예제
function callAndAdd(a, b) {
  return a() + b();
}
console.log(
  callAndAdd(
    function () {
      return 10;
    },
    function () {
      return 5;
    }
  )
);

//3)예제
function sayHello() {
  return "Hello, ";
}
function greeting(helloMessage, name) {
  console.log(helloMessage() + name);
}
greeting(sayHello, "JavaScript!");
