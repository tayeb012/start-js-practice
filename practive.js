// function isLeapYear2(year) {
//   const remainder4 = year % 4;
//   if (remainder4 === 0) {
//     console.log("this year is leap year", year);
//     return true;
//   }
//   return false;
// }

// isLeapYear2(1235); /* why this function isn't working*/

// function isLeapYear2(year) {
//   const remainder4 = year % 4;
//   if (remainder4 === 0) {
//     console.log("This year is a leap year:", year);
//     return true;
//   }
//   return false;
// }

// const result = isLeapYear2(2232);
// console.log(result)


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
const oddNumbersSum = getSumOfAnArray(oddNumbers); /**Have to understand this line  */
console.log("odd number sum", oddNumbersSum);
// getSumOfAnArray(thatsNumbers);
