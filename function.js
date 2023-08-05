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
  let ferotTK = num3 - totalChocolatePrice;
  console.log("total Chocolate Price", totalChocolatePrice);
  return "ferot tk", ferotTK;
}
// buyChocolete(150, 432);
let total = buyChocolete(150, 432, 1000);
console.log("total tk", total);

// practice

// let time = prompt("Chad ki utche");
// console.log(time);
function isMoonUp(time) {
  if (time > 7) {
    return true;
  } else {
    return false;
  }
}

//  is Even function practice

function isEven(number) {
  const remainder = number % 2;
  // console.log(remainder);
  if (remainder === 0) {
    console.log("number is even");
    return true;
  } else {
    console.log("number is odd");
    return false;
  }
}
isEven(44);
const isItEven = isEven(44);
console.log(isItEven);
isEven(45);
const isItEven2 = isEven(45);
console.log(isItEven2);

//  is odd function practice
function isOdd(number) {
  const remainder2 = number % 2;
  console.log(remainder2);
}
isOdd(45);

// checking leap year by function
function isLeapYear(year) {
  const remainder3 = year % 4;
  if (remainder3 === 0) {
    console.log("this year is leap year", year);
    return true;
  } else {
    console.log("This year isn't leaper", year);
    return false;
  }
}

isLeapYear(1232);

// alternative
function isLeapYear2(year) {
  const remainder4 = year % 4;
  if (remainder4 === 0) {
    console.log("this year is leap year", year);
    return true;
  }
  return false;
}

isLeapYear2(1235); /* why this function isn't working*/

// function + loop
// find odd & some

//  How to get sum of all element in a array
function getSumOfAnArray(numbers) {
  // console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    // let sum = 0; if i do this, it will be mistake
    const element = numbers[index];
    sum = sum + element;
    // console.log(index, element, sum);
  }
  return sum;
}

function getOddNumberOfArray(number) {
  const oddNumbers = [];
  for (let i = 0; i < number.length; i++) {
    const index = i;
    const element = number[index];
    if (element % 2 !== 0) {
      console.log(index, element);
      oddNumbers.push(element);
    }
  }
  return oddNumbers;
}

const thatsNumbers = [12, 23, 43, 54, 46, 57, 27, 38, 67];
// getOddNumberOfArray(thatsNumbers);
const oddNumbers = getOddNumberOfArray(thatsNumbers);
console.log(oddNumbers);
const oddNumbersSum =
  getSumOfAnArray(oddNumbers); /**Have to understand this line  */
console.log("odd number sum", oddNumbersSum);
// getSumOfAnArray(thatsNumbers);



// 1+2+3+4+5+6+7
function sumOfNumber(number) {
  sum2 = 0;
  for (let i = 0 ; i <= number; i++) {
    let index = i;
    sum2 = sum2 + index;
    console.log(index, sum2);
  }
  return sum2;
}
sumOfNumber(7)
// console.log(sum2);

// 1*2*3*4*5*6*7  (jkhon aita gun korar proyjon hoy tkhon sum2 = 0 dia shuru korte pari na)
function sumOfNumber2(number) {
  sum3 = 1;
  for (let i = 1; i <= number; i++) {
    let index = i;
    sum3 = sum3 * index;
    console.log(index, sum3);
  }
  return sum3;
}
sumOfNumber2(7)
console.log(sum3);
