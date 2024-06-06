// In JavaScript, the spread and rest operators are both represented by three dots (...), 
// but they are used in different contexts and for different purposes. 

// The spread operator allows an iterable such 
// as an array or string to be expanded in 
// places where zero or more arguments or elements are expected. 
// It is often used for copying or combining arrays, 
// passing arrays as function arguments, and more.

// Copying an Array:
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log(copiedArray); // Output: [1, 2, 3]

// Combining Arrays:
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

// Passing Elements as Function Arguments:
const numbers = [1, 2, 3];
function sum(a, b, c) {
  return a + b + c;
}
console.log(sum(...numbers)); // Output: 6

// The rest operator allows you to represent an indefinite number
// of arguments as an array. It is used in function parameters 
// to capture all remaining arguments into an array, making it useful 
// for handling a variable number of function arguments.

// Function Parameters:
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
  }
  console.log(sum(1, 2, 3, 4)); // Output: 10

// Destructuring Arrays:
const [first, ...rest1] = [1, 2, 3, 4];
console.log(first); // Output: 1
console.log(rest1);  // Output: [2, 3, 4]

//Destructuring Objects:
const {a, b, ...rest2} = {a: 1, b: 2, c: 3, d: 4};
console.log(a);    // Output: 1
console.log(b);    // Output: 2
console.log(rest2); // Output: {c: 3, d: 4}