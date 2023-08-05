function factorial(number) {
  let result = 1;
  for (let i = number; i >= 1; i--) {
    result = result * i;
    console.log(i, result);
  }
  return result;
}
let number = 6;
const fact = factorial(number);
console.log("factorial of",number,':', fact);
