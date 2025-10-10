
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

//foreach loop
let fruits2 = ["apple", "banana", "cherry"];
fruits2.forEach(fruits2 => console.log(fruits2));

//filter()
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let even = num.filter(num => num % 2 === 0);
console.log("Simpal Array is = [" + num + "]");
console.log("Even Number Array is = [" + even + "]");
console.log("");

//reduce()

let rnum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 12, 14, 2, 5, 6, 5, 1, 40, 98, 7, 65, 43, 2, 54];
let summ = rnum.reduce((acc, numm) => acc + numm, 0);
console.log("Sum is = " + summ);


//concat
console.log("concat");
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let concatarr = arr1.concat(arr2);
console.log("1st Array is ", arr1);
console.log("2nd Array is ", arr2);
console.log(" Concat Array is ", concatarr);


// Join 
console.log("Joins");
let woeds =  ["Hello", "word", "!"];
console.log(woeds);
let joi = woeds.join(" - ");
console.log(joi);

// Array Destructuring
console.log("Array Destructuring");
let frui = ["apple", "banana", "cherry"];
let [first, second, third] = frui;
console.log(first); // Output: "apple"
console.log(second); // Output: "banana"
console.log(third);