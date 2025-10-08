
// Creating an array of fruits
let fruits1 = ["apple", "banana", "cherry"];
console.log("Accessing first fruit from fruits1 array:", fruits1[0]); // Output: "apple"

// Explaining array declaration methods
console.log("👉 Declaring Arrays using different methods");

// Using square brackets to declare an array of numbers
let numbers1 = [1, 2, 3, 4];
console.log("Array declared using square brackets:", numbers1);

// Using Array constructor to declare an array of colors
let colors1 = new Array("red", "green", "blue");
console.log("Array declared using Array constructor:", colors1);

// Placeholder for further array operations
console.log("📦 Ready for Array Operations like push, pop, etc.");


console.log("----- 🔍 JavaScript Array Operations Demonstration -----");

// Initial array of fruits
let fruits = ["apple", "banana", "cherry"];
console.log("Original fruits array:", fruits);

// Adding an element to the end using push()
fruits.push("grape");
console.log("After using push() to add 'grape':", fruits);

// Removing the last element using pop()
fruits.pop();
console.log("After using pop() to remove last element:", fruits);

// Array of numbers for method demonstrations
let numbers = [1, 2, 3, 4];

// Using reduce() to calculate sum of all elements
let sum = numbers.reduce((a, b) => a + b);
console.log("Sum of numbers using reduce():", sum);

// Using map() to square each element
let squared = numbers.map(n => n * n);
console.log("Each number squared using map():", squared);

// Using filter() to extract even numbers
let evenNumbers = numbers.filter(n => n % 2 === 0);
console.log("Even numbers extracted using filter():", evenNumbers);

console.log("----- ✅ End of Array Examples -----");
console.log("👨‍💻 Created by Ayush Narware | Happy Coding! 😊");