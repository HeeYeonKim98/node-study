// 3 : Array.prototype

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const arrr = [1, 2, 3, 4, 5, 6, 7, 8];

//slice(start,end)
const arr1 = arr.slice(1);
const arr2 = arr.slice(3, 5);
const arr3 = arr.slice(-2);
const arr4 = arr.slice(1, -1);

console.log(arr1); //2345678
console.log(arr2); //45
console.log(arr3); //78
console.log(arr4); //234567

console.log("================");

//splice(start, deletecounter)
const arr5 = arr.splice(2, 5);
const arr6 = arr.splice(1, 0, "안녕");

console.log(arr5); //34567
console.log(arr6); //
console.log(arr); //1,'안녕',2,8

console.log("================");

//forEach((value, index, array)=>{})
arrr.forEach((v, i, a) => console.log(v));
arrr.forEach((v, i, a) => {
    if (v == 3) {
        console.log("index : " + i + ", value : ", +v + ", array : " + a);
    }
});
//forEach는 break와 continue 없기 때문에 잘 쓰지 않음.

console.log("================");

//some((value, index, array)=>{})
arrr.some((v, i, a) => {
    if (v == 5) return true;
    console.log("index : " + i + ", value : ", +v + ", array : " + a);
});
//some은 false-continue true-break로 사용함.

console.log("================");

//map((value, index, array)=>{})
arrr.map((v, i, a) => console.log(v));

console.log("================");

//filter((value, index, array)=>{})
const arr7 = arrr.filter((v, i, a) => v >= 4);
console.log(arr7);

//앞으로는 for문 while문을 사용하지 않고 some이나 제공해주는 api를 활용하여 서버를 구성한다.
//map filter slice splice api 사용 능숙하게 연습하기
