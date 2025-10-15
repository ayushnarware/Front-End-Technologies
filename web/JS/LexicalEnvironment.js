
let globalVar = "I’m global!";

function outerFunction() {
    let outerVar = "I’m in the outer function!";
    
    function innerFunction() {
        let innerVar = "I’m in the inner function!";
        console.log(globalVar); // Accessible: "I’m global!"
        console.log(outerVar);  // Accessible: "I’m in the outer function!"
        console.log(innerVar);  // Accessible: "I’m in the inner function!"
    }
    
    innerFunction();
}

outerFunction();