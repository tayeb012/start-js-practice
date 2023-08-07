let first = 8;
let second = 5;
console.log(first, second);

let temp = first;
first = second;
second = temp;
console.log(first, second);

// alternative
let first2 = 9;
let second2 = 4;
console.log(first2, second2);

[first2, second2] = [second2, first2];
console.log(first2, second2);
