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
