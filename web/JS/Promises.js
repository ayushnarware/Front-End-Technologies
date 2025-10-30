promise = new Promise((resolve, reject) => {
    app = "BMS";
    if (app === "BMS") {
        resolve("1. open BMS app");
    } else {
        reject("Please onsider BMS not found");
    }
})
promise.then((msg) => {
    console.log(msg);
    console.log("2. Login with username and password");
})

.then((msg) => {
    console.log(msg);
    console.log("3. Serach movie" );
})

.then((msg) => {
    console.log(msg);
    console.log("4. Select movie and book ticket");
})

.then((msg) => {
    console.log(msg);
    console.log("5. ticket booked successfully");
})

.catch((err) => {
    console.log(err);
})
.finally(() => {
    console.log("Close BMS app");
});
