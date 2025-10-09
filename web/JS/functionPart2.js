function greet(name) {
    console.log("Hello, " + name + "!");
}
console.log("Function Parameters and Arguments->");
greet("Ayush"); // Output: Hello, Ayush!

function greetDefault(name = "Ayush") {
    console.log("Hello, " + name + "!");
}
console.log("Default Parameters->");
greetDefault(); // Output: Hello, Ayush!
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log("Rest Parameters->");
console.log(sum(1, 2, 3, 4)); // Output: 10
function fetchData(callback) {
    setTimeout(() => {
        const data = { name: "Ayush", age: 20 };
        callback(data);
    }, 1000);
}
console.log("Callback Functions-->");
fetchData(function (data) {
    console.log("Data received:", data);
});
const multiply = (a, b) => a * b;
console.log("Arrow Functions with Implicit Return-->");
console.log(multiply(5, 3)); // Output: 15
function myFunction() {
    let message = "Hello, World!";
    console.log(message); // Output: Hello, World!
}
console.log("Function Scope-->");
myFunction();
// console.log(message); // Error: message is not defined
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log("Outer Variable: " + outerVariable);
        console.log("Inner Variable: " + innerVariable);
    };
}
console.log("Closures");
const newFunction = outerFunction("outside");
newFunction("inside");


function add() {
    let a = 5;
    let b = 10;
    let sum = a + b;
    console.log("Adding " + a + " and " + b + " by simpal function");
    console.log("Sum is: " + sum);
}

function add(a, b) {
    let sum = a + b;
    console.log("Adding " + a + " and " + b + " by function with parameters");
    console.log("Sum is: " + sum);
}

function add(a, b, c) {
    return a + b + c;
}


const multiply1 = (x, y) => x * y;

add();
add(15, 25);
add(20, 30, 40);

console.log("Multiplying 5 and 4 using Arrow Function");
console.log("Product is: " + multiply1(5, 4));

console.log("Function Declarations->");
console.log(square(5)); // Output: 25
function square(x) {
    return x * x;
}
console.log("Function Expressions->");
const squareExp = function (x) {
    return x * x;
};
console.log(squareExp(5)); // Output: 25


//Footer Year Update

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("Login").onclick = function () {
    onclick = alert("Login functionality will be added soon!");
};
document.querySelector(".soon").onclick = function () {
    onclick = alert("More content coming soon... Stay tuned! 🚀");
};
