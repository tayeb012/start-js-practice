// question that should be solve 
// no. 7........






// function declaration
// 1.............
function startFan() {
  console.log("Stand Up");
  console.log("Walk towards the switch");
  console.log("Press the switch");
}
// call the function
// startFan();

// 2...........
// parameter js

function bringSingara(money) {
  console.log("mama shingara den");
  console.log(money, "tk nen");
}
// bringSingara(250);

// console.log("next part.....................")

function bringSingara(money) {
  console.log("mama shingara den");
  console.log(money, "tk nen");
}
let tk = 250;
// bringSingara(tk);

// 3.............
function add2Parameter(num1, num2) {
  console.log("going to add two number", num1, num2);
}
// add2Parameter();

// console.log("next line...................");
// 4............
function add2Parameter(num1, num2) {
  console.log("going to add two number", num1, num2);
}
// add2Parameter(9,6);

// 5...............
function sum(a, b, c, d, e) {
  console.log(a, b, c, d, e);
  let sum = a + b + c + d + e;
  console.log(sum);
}
// sum(5, 2, 4, 8, 5);

// 6................
function buyChocolete(num1, num2) {
  console.log("2ta chocolete ar jonno tk", num1, "tk", num2);
  let sum = num1 + num2;
  console.log(sum);
  return sum;
}
// buyChocolete(150, 432);
// let total = buyChocolete(150, 432);
// console.log("total tk", total);

// 7...........................
function buyChocolete(num1, num2, num3) {
  console.log(
    "2ta chocolete ar jonno tk",
    num1,
    "tk",
    num2,
    "totel je tk dewa hoiche",
    num3
  );
  let totalChocolatePrice = num1 + num2;
  let ferotTK = num3 - totalChocolatePrice ;
  console.log("total Chocolate Price", totalChocolatePrice);
  return ("ferot tk", ferotTK);
}
// buyChocolete(150, 432);
let total = buyChocolete(150, 432, 1000);
console.log("total tk", total);



// practice

let time = prompt("Chad ki utche");
// console.log(time);
function isMoonUp(time){
  if(time > 7){
    return true
  }
  else{
    return false
  }
}