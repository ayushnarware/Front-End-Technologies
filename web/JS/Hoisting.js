let sum = add(5, 10); // sum is assigned the result of add(5, 10)
console.log(sum);
function add(a, b) {
    return a + b;
}


console.log("console.log(value); // ❌ ReferenceError");
let value = 10;


let sum2 = add(5, 10); // function call
function add(a, b) {
    return a + b;
}
console.log(sum2); // ✅ Output: 15


