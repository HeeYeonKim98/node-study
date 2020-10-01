// 2 : deep-copy, shallow-copy

//shallow-copy
const arr1 = [1, 2, 3, 4, 5, 6, 7];
const arrcopy1 = arr1;

console.log(arr1);
console.log(arrcopy1);

arrcopy1[0] = 100;

console.log(arr1);
console.log(arrcopy1);

console.log(arr1 === arrcopy1);

console.log("=============================");

//deep-copy
const arr2 = [1, 2, 3, 4, 5, 6, 7];
const arrcopy2 = JSON.parse(JSON.stringify(arr2));

console.log(arr2);
console.log(arrcopy2);

arrcopy2[0] = 100;

console.log(arr2);
console.log(arrcopy2);

console.log(arr2 === arrcopy2);
