//  1
// var btn = document.querySelector("button");
// console.dir(btn);
// btn.onclick = function (){
//     alert("Button is pressed");
// }

// 2
// var btns = document.querySelectorAll('button');

// for (btn of btns){
//     btn.onclick = myfunc
// }
// function myfunc(){
//     console.log("button Pressed");
// }

var form = document.querySelector("form");

form.addEventListener("submit", function (event)) {
    var inp = document.querySelector("input");
    var p = document.querySelector("p");
    p.innerText = inp.value;
    event.preventDefault();
};

// HomeWork
