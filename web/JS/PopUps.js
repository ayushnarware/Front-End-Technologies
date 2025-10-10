// Console demonstration
console.log("----- JavaScript PopUps Demonstration -----");
console.log("alert() → shows a message box");
console.log("confirm() → asks user for confirmation and returns true/false");
console.log("prompt() → asks for input and returns the entered value");
console.log("----- Try these methods in console -----");
console.log("👨‍💻 Created by Ayush Narware | Happy Coding! 😊");


const btn1 = document.getElementById("popupBtn");
const btn2 = document.getElementById("alert");
const btn3 = document.getElementById("confirm");
const btn4 = document.getElementById("prompt");
const btn5 = document.getElementById("Example");


btn1.addEventListener("click", function () {

    // Alert
    alert("You opened Chrome browser!");

    // Confirm
    let result = confirm("Do you want to delete this item?");
    console.log(result);

    if (result) {
        document.writeln("User clicked OK");
    } else {
        document.writeln("User clicked Cancel");
    }
    document.writeln("<br>");

    // Prompt
    let name = prompt("Enter your name");
    document.writeln("Hello ", name, "<a href='PopUps.html' style=' margin: 20px;padding: 5px 5px; background: #0072ff; color: #fff; border-radius: 5px; transition: background-color 0.3s, color 0.3s; cursor: pointer;'>Go To Return</a>");
});

// Example: Using alert()
btn2.addEventListener("click", function () {

    alert("Welcome to JavaScript PopUps!");

    // Another example
    let name = "Ayush";
    alert("Hello " + name + "! Have a great day 😊");
});

// Example: Using confirm()
btn3.addEventListener("click", function () {

    let response = confirm("Do you want to continue?");
    if (response) {
        alert("You clicked OK!");
    } else {
        alert("You clicked Cancel!");
    }
});

// Example: Using prompt()
btn4.addEventListener("click", function () {

    let userName = prompt("Enter your name:");
    if (userName) {
        alert("Hello " + userName + "! Welcome to our site!");
    } else {
        alert("You didn't enter your name!");
    }
});


// Real-life example
btn5.addEventListener("click", function () {
    alert("you want to delete this file?");
    let confirmDelete = confirm("Are you sure you want to delete this file?");
    if (confirmDelete) {
        alert("File deleted successfully!");
    } else {
        alert("File deletion canceled.");
    }

});

