// function overloading - 
// function with same name but different number of parameters
//not posssible
function add(){
    console.log(5+5);// 0 parameters
}
function add(a,b){
    console.log(a+b);// 2 parameters
}
function add(a,b,c){
    console.log(a+b+c);// 3 parameters
}
function add(a,b,c,d){
    console.log(a+b+c+d);//4 parameters
}

add(); // 0 para - Nan
add(10,20); // 2 para - Nan
add(10, 20, 30); // 3 para - Nan
add(10,20,30,40); // 4 para - 100


function hello() {
    console.log("Hey and Hello!");
}
hello();

function hello(name){
    console.log("Hello, ", name);
}
hello("Ayush");

//Using Arguments

function add1() {
    if (arguments.length === 0) {
        return "no arguments"; //no arguments
    }
    else if (arguments.length === 2) {
        return arguments[0] + arguments[1];  // Adds two numbers
    } else if (arguments.length === 3) {
        return arguments[0] + arguments[1] + arguments[2];  // Adds three numbers
    } else if (arguments.length === 3) {
        return arguments[0] + arguments[1] + arguments[2] + arguments[3];  // Adds four numbers
    } 
    else {
        return "Invalid number of arguments.";
    }
}

console.log(add1());       // 
console.log(add1(1, 2));    // 
console.log(add1(1, 2, 3));  //
console.log(add1(1, 2, 3, 4));   //
console.log(add1(0, 1, 2, 3, 4));   //




//spread operator
function add2(...numbers) {
    let sum = 0;
    for (let num of numbers) {
        sum = sum + num;
    }
    return sum;
}

console.log(add2(1, 2, 3));         // 6
console.log(add2(10, 20, 30, 40));  // 100
console.log(add2());   //0




// in java
// class OverloadExample {

//     // Method with 0 parameters
//     void add() {
//         System.out.println(5 + 5);
//     }

//     // Method with 2 parameters
//     void add(int a, int b) {
//         System.out.println(a + b);
//     }

//     // Method with 3 parameters
//     void add(int a, int b, int c) {
//         System.out.println(a + b + c);
//     }

//     // Method with 4 parameters
//     void add(int a, int b, int c, int d) {
//         System.out.println(a + b + c + d);
//     }

//     public static void main(String[] args) {
//         OverloadExample obj = new OverloadExample();

//         obj.add();                // 10
//         obj.add(10, 20);          // 30
//         obj.add(10, 20, 30);      // 60
//         obj.add(10, 20, 30, 40);  // 100
//     }
// }