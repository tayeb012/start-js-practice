const result = Math.pow(3, 3);
console.log(result);

const num1 = 23;
const num2 = 43;

const gap = num1 - num2;
console.log(gap);

const gap2 = Math.abs(num1 - num2);
console.log(gap2);

if (gap2 < 10) {
  console.log("you can be friend");
} else {
  console.log("you can't be friend");
}

const number = 3.499999;
const number2 = 3.5;
console.log(Math.round(number));
console.log(Math.round(number2));

const number3 = 6.000001;
const number4 = 6.9;
console.log(Math.ceil(number3));
console.log(Math.floor(number4));

// random number
console.log(Math.random());
const random = Math.random() * 100;
console.log(random);

const random2 = Math.round(Math.random() * 10);
console.log(random2);

for (let i = 0; i < 20; i++) {
  const random3 = Math.round(Math.random() * 6);
  console.log(random3);
}


