console.log("💫Exception Handling in Js 💖");
let a = 10;
let b = 0;

try {
    console.log(a / b );
}
catch (e) {
    console.log("this is error");
}




try {
  setTimeout(() => {
    throw new Error("Async error"); // ❌ won't be caught
  }, 1000);
} catch (e) {
  console.log("Caught:", e); // ❌ won't run
}
setTimeout();
