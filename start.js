//  How to get sum of all element in a array
function getSumOfAnArray(numbers) {
    // console.log(numbers);
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      const index = i;
      // let sum = 0; if i do this, it will be mistake
      const element = numbers[index];
      sum = sum + element;
      console.log(index, element, sum);
    }
    return sum;
  }

  const thatsNumbers = [12, 23, 43, 54, 46, 57, 27, 38, 67];
  getSumOfAnArray(thatsNumbers);