// 3 : typeof string

const a = String("appcenter");
const b = String("mynameisheeyeon");
const c = String("he^^llo");

console.log(b.charAt(2)); //n
console.log(b.concat(a)); //mynameisheeyeonappcenter
console.log(b.split("")); //m y n a m e i s h e e y e o n
console.log(c.split("^^")); //he llo
