//구구단 출력

function gugudan() {
  var i, j;

  for (i = 1; i < 10; i++) {
    console.log(i + "단");
    for (j = 1; j < 10; j++) {
      console.log(i + " * " + j + " = " + i * j);
    }
    console.log("\n");
  }
}

function gugudan_h() {
  var i, j;
  var result = "";

  for (i = 1; i < 10; i++) {
    for (j = 1; j < 10; j++) {
      result += j + " * " + i + " = " + i * j + "\t";
    }
  }
  console.log(result);
}

gugudan();
gugudan_h();
