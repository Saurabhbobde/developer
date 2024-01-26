// var naam = prompt("naam do");

// while(naam != "exit"){
//     var naam = prompt("naam do");
//     console.log(naam)    
// }


// var arr = new Array(1000).fill(36);
// console.log(arr);

// console.log(Array(1000) .fill(2));


// var a = prompt("first number");
// console.log(a);
// var b = prompt("second number");
// console.log(b);

// console.log(a + b);




// DOM - Document Object Model.


// var h1 = document.querySelector('h1');

// h1.style.backgroundColor = 'red';
// h1.style.color = 'yellow';

// var flag = 0;

// h1.addEventListener("click", function () {
//     if (flag === 0) {
//         h1.innerHTML = "I LOVE YOU";
//         h1.style.backgroundColor = 'yellow';
//         h1.style.color = 'red';
//         flag = 1;
//     }
//     else {
//         h1.innerHTML = "hehehehehe";
//         h1.style.backgroundColor = 'red';
//         h1.style.color = 'yellow';
//         flag = 0;
//     }
// })


// var box = document.querySelector('#box');
// var btn = document.querySelector("button");



// var flag = 0;

// btn.addEventListener("click",function(){
//     if(flag === 0){
//         box.style.backgroundColor = 'black';
//         btn.innerHTML = "ON";
//         flag = 1;

//     }
//     else{
//         box.style.backgroundColor = 'blue';
//         btn.innerHTML = 'OFF'; 
//         flag = 0;
//     }
// })





// var a = document.querySelector("#bulb")
// var btn = document.querySelector("button")

// var flag = 0

// btn.addEventListener("click", function () {
//     if(flag == 0){
//     console.log("on")
//     a.style.backgroundColor = 'yellow';
//     btn.innerHTML = "off"
//     flag = 1
//     }
//     else{
//         console.log("off")
//         a.style.backgroundColor  = "gray"
//         btn.innerHTML = "on"
//         flag = 0
//     }
// })



var btn = document.querySelector("button")
var box = document.querySelector("#box")


btn.addEventListener("click",function(){
    var a1 = Math.floor(Math.random()*256)
    var a2 = Math.floor(Math.random()*256)
    var a3 = Math.floor(Math.random()*256)
    console.log(a1, a2, a3)

    btn.style.backgroundColor = `rgb(${a1},${a2},${a3})`;
    box.style.backgroundColor = `rgb(${a1},${a2},${a3})`;
})