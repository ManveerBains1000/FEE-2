console.log(1 + 2);
console.log(1 + "2");

console.log(10+"A");
console.log(10-"A");
console.log(1 + "A");
console.log("10" + "2" + "A");
console.log("10" + "2" - "A");
console.log(10 + "2");
console.log(10 - "2");

let a = '20';
let b = parseInt(a);
console.log(typeof(b));
let c = Number(a);
console.log(typeof(c));



let globalVar1 = "Global Variable";
const globalVar2 = "Global Variable 2";
var globalVar3 = "Global Variable 3";

function myfunc(){
    console.log(globalVar1);
    console.log(globalVar2);
    console.log(globalVar3);
}

myfunc();