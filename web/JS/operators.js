
console.log("🚀 JavaScript Operators Page Loaded Successfully!");
console.log("Arthmetic Operators: +, -, *, /, %, ++, --");
let a = 10;
let b = 5;
let sum = a + b; // 15
console.log("Sum:", sum);
let difference = a - b; // 5
console.log("Difference:", difference);
let product = a * b; // 50
console.log("Product:", product);
let quotient = a / b; // 2
console.log("Quotient:", quotient);
let remainder = a % b; // 0
console.log("Remainder:", remainder);
a++; // 11
console.log("Incremented a:", a);
b--; // 4
console.log("Decremented b:", b);
console.log("=============================================================");

console.log("Assignment Operators: =, +=, -=, *=, /=, %=");
let x = 10;
console.log("Initial x:", x);
x += 5; // 15
console.log("x after += 5:", x);
x -= 3; // 12
console.log("x after -= 3:", x);
x *= 2; // 24
console.log("x after *= 2:", x);
x /= 4; // 6
console.log("x after /= 4:", x);
x %= 4; // 2
console.log("x after %= 4:", x);
console.log("=============================================================");

console.log("Comparison Operators: ==, ===, !=, !==, >, <, >=, <=");
let p = 10;
let q = '10';
console.log("p == q:", p == q); // true (value comparison)
console.log("p === q:", p === q); // false (value and type comparison)
console.log("p != q:", p != q); // false
console.log("p !== q:", p !== q); // true
console.log("p > 5:", p > 5); // true
console.log("p < 15:", p < 15); // true
console.log("p >= 10:", p >= 10); // true
console.log("p <= 10:", p <= 10); // true
console.log("=============================================================");

console.log("Logical Operators: && (AND), || (OR), ! (NOT)");
let isAdult = true;
let hasID = false;
console.log("isAdult && hasID:", isAdult && hasID); // false
console.log("isAdult || hasID:", isAdult || hasID); // true
console.log("!isAdult:", !isAdult); // false
console.log("=============================================================");

console.log("String Operators: + (concatenation), += (concatenation assignment)");
let firstName = "Ayush";
let lastName = "Narware";
let fullName = firstName + " " + lastName; // "Ayush Narware"
console.log("Full Name:", fullName);
firstName += " Smith"; // "Ayush Smith"
console.log("First Name after += ' Smith':", firstName);
console.log("=============================================================");

console.log("Ternary Operator: condition ? expr1 : expr2");
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No"; // "Yes"
console.log("Can Vote:", canVote);
console.log("Type Operators: typeof, instanceof");
let num = 42;
console.log("Type of num:", typeof num); // "number"
let str = "Hello";
console.log("Type of str:", typeof str); // "string"
let arr = [1, 2, 3];
console.log("arr instanceof Array:", arr instanceof Array); // true


console.log("💡 Keep Learning and Exploring JavaScript!");
