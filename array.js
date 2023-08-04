/**
 * What is the purpose of array?
 * number of elements in an array.
 *      ans :
 *          let fruits = ["apple", "banana", "orange", "grape"];
            let numberOfElements = fruits.length;

            console.log(numberOfElements); // Output: 4

 * What is index? find the value of an element by index.
            ans:
            let colors = ["red", "green", "blue", "yellow"];
            let secondColor = colors[1]; // "green"
            console.log(secondColor);
            
 * Change an element by index.
            ans:
            let colors = ["red", "green", "blue", "yellow"];

            // Changing the element at index 1 from "green" to "orange"
            colors[1] = "orange";

            console.log(colors); // Output: ["red", "orange", "blue", "yellow"]

 * Get the index of an element by the value.
            ans:
            let fruits = ["apple", "banana", "orange", "mango"];

            let searchElement = "orange";
            let index = fruits.indexOf(searchElement);

            console.log(index); // Output: 2
        
 * What dose it mean when you get undefined while getting the value of an element by index.            
            ans:
            let numbers = [1, 2, 3];
            console.log(numbers[3]); // Output: undefined (index 3 is out of bounds)

            let fruits = ["apple", "banana", undefined, "orange"];
            console.log(fruits[2]); // Output: undefined (element at index 2 is set to undefined)

            let arr = [];
            console.log(arr[0]); // Output: undefined (the array is empty, and there is no value at index 0)

 * How can you add an element to an array at the last position?
            ans:
            let numbers = [1, 2, 3];
            numbers.push(4); // Adds 4 to the end of the array
            console.log(numbers); // Output: [1, 2, 3, 4]

            (alternative)
            let numbers = [1, 2, 3];
            numbers[numbers.length] = 4; // Assigns 4 to the index one greater than the last index (which is the end of the array)
            console.log(numbers); // Output: [1, 2, 3, 4]

 * How can you remove the last element from array?           
            ans:
            let numbers = [1, 2, 3, 4];
            let lastElement = numbers.pop(); // Removes 4 from the end of the array and stores it in the 'lastElement' variable
            console.log(numbers); // Output: [1, 2, 3]
            console.log(lastElement); // Output: 4
 
 * ADD an element at the first position of an array.    
            ans:
            let numbers = [2, 3, 4];
            numbers.unshift(1); // Adds 1 to the beginning of the array
            console.log(numbers); // Output: [1, 2, 3, 4]
        
 * Remove the first element of an array.
            ans:
            let numbers = [1, 2, 3, 4];
            let removedElement = numbers.shift(); // Removes the first element (1)
            console.log(numbers); // Output: [2, 3, 4]
            console.log(removedElement); // Output: 1



 */

// * number of elements in an array.
let fruits = ["apple", "banana", "orange", "grape"];
let numberOfElements = fruits.length;

console.log(numberOfElements); // Output: 4

// What is index? find the value of an element by index.
let colors = ["red", "green", "blue", "yellow"];
let secondColor = colors[1]; // "green"
console.log(secondColor);

// * Change an element by index.
let colors2 = ["red", "green", "blue", "yellow"];
// Changing the element at index 1 from "green" to "orange"
colors2[1] = "orange";
console.log(colors2); // Output: ["red", "orange", "blue", "yellow"]

// * Get the index of an element by the value.
let fruits2 = ["apple", "banana", "orange", "mango"];
let searchElement = "orange";
let index = fruits.indexOf(searchElement);
console.log(index); // Output: 2

// What dose it mean when you get undefined while getting the value of an element by index.
let numbers = [1, 2, 3];
console.log(numbers[3]); // Output: undefined (index 3 is out of bounds)

let fruits3 = ["apple", "banana", undefined, "orange"];
console.log(fruits3[2]); // Output: undefined (element at index 2 is set to undefined)

let arr = [];
console.log(arr[0]); // Output: undefined (the array is empty, and there is no value at index 0)

//  * How can you add an element to an array at the last position.
let numbers2 = [1, 2, 3];
numbers2.push(4); // Adds 4 to the end of the array
console.log(numbers2); // Output: [1, 2, 3, 4]

// alternative
let numbers3 = [1, 2, 3];
numbers3[numbers.length] = 4; // Assigns 4 to the index one greater than the last index (which is the end of the array)
console.log(numbers3); // Output: [1, 2, 3, 4]

//  * How can you remove the last element from array?
let numbers4 = [1, 2, 3, 4];
let lastElement = numbers4.pop(); // Removes 4 from the end of the array and stores it in the 'lastElement' variable
console.log(numbers4); // Output: [1, 2, 3]
console.log(lastElement); // Output: 4

//  * ADD an element at the first position of an array.
let numbers5 = [2, 3, 4];
numbers5.unshift(1); // Adds 1 to the beginning of the array
console.log(numbers5); // Output: [1, 2, 3, 4]

//  * Remove the first element of an array.
let numbers6 = [1, 2, 3, 4];
let removedElement = numbers.shift(); // Removes the first element (1)
console.log(numbers6); // Output: [2, 3, 4]
console.log(removedElement); // Output: 1





// git remote add origin https://github.com/tayeb012/start-js-practice.git