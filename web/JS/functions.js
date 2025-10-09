
// Example code to demonstrate function types
// Function Declaration
function greet() {
    console.log("Hello from Function Declaration!");
}
greet();

// Function Expression
const greetExpression = function () {
    console.log("Hello from Function Expression!");
};
greetExpression();

// Arrow Function
const greetArrow = () => {
    console.log("Hello from Arrow Function!");
};
greetArrow();

// Anonymous Function as Argument
setTimeout(function () {
    console.log("Hello from Anonymous Function after 1 second!");
}, 1000);

// Immediately Invoked Function Expression (IIFE)
(function () {
    console.log("Hello from IIFE!");
})();
console.log("🚀==================================🚀");
function add() {
    let a = 5;
    let b = 10;
    let sum = a + b;
    console.log("Adding " + a + " and " + b + " by simpal function");
    console.log("Sum is: " + sum);
}
add();
console.log("🚀==================================🚀");
function addParams(a, b) {
    let sum = a + b;
    console.log("Adding " + a + " and " + b + " by function with parameters");
    console.log("Sum is: " + sum);
}
addParams(15, 25);
console.log("🚀==================================🚀");

function addReturn(a, b) {
    return a + b;
}
let result = addReturn(20, 30);
console.log("Adding 20 and 30 by function with return type");
console.log("Sum is: " + result);
console.log("🚀==================================🚀");

// Arrow Function Example
const multiply = (x, y) => x * y;
let product = multiply(5, 4);
console.log("Multiplying 5 and 4 using Arrow Function");
console.log("Product is: " + product);
console.log("🚀==================================🚀");

// IIFE Example
(function () {
    let message = "This is an IIFE example!";
    console.log(message);
})();


// Exstra function examples
console.log("🚀==================================🚀");

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
let num = 5;
console.log(`Factorial of ${num} is: ` + factorial(num));
console.log("🚀==================================🚀");
const fibonacci = (n) => {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
};
let fibSequence = fibonacci(10);
console.log("Fibonacci sequence up to 10 terms: " + fibSequence.join(","));




//Footer Year Update
const year = new Date().getFullYear();
document.querySelector('footer p').innerHTML = `&copy; ${year} Ayush Narware. All rights reserved.`;