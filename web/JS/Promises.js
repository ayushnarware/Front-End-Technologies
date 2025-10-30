let fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = true; // change to false to test reject
        if (success) {
            resolve("Data fetched successfully! ✅");
        } else {
            reject("Failed to fetch data ❌");
        }
    }, 2000); // 2 seconds ka delay
});

console.log(fetchData);