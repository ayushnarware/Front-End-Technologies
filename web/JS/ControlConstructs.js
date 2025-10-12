















// File: ControlConstructs.js
// Author: Ayush Narware
// Purpose: Interactive "Control Constructs in JavaScript" demo
// Layout: Left side - controls | Right side - Run window (output)

document.addEventListener("DOMContentLoaded", function () {
    // ====== Main Layout Container ======
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.gap = "20px";
    container.style.flexWrap = "wrap";
    container.style.maxWidth = "1100px";
    container.style.margin = "20px auto";
    container.style.fontFamily = "Poppins, Arial, sans-serif";

    // ====== Left Panel (Inputs + Buttons) ======
    const leftPanel = document.createElement("div");
    leftPanel.style.flex = "1 1 45%";
    leftPanel.style.minWidth = "300px";
    leftPanel.style.padding = "20px";
    leftPanel.style.border = "1px solid #ddd";
    leftPanel.style.borderRadius = "10px";
    leftPanel.style.background = "white";
    leftPanel.style.boxShadow = "0 3px 6px rgba(0,0,0,0.08)";

    const title = document.createElement("h2");
    title.textContent = "🎯 Control Constructs Demos";
    title.style.color = "#007bff";
    title.style.marginBottom = "10px";

    const subtitle = document.createElement("p");
    subtitle.innerHTML =
        "Choose a construct below and click <b>Run</b> to see how it works. Output will appear on the right side.";
    subtitle.style.marginBottom = "15px";
    subtitle.style.color = "#555";

    leftPanel.appendChild(title);
    leftPanel.appendChild(subtitle);

    // Helper functions
    const makeInput = (placeholder) => {
        const input = document.createElement("input");
        input.placeholder = placeholder;
        input.style.padding = "8px";
        input.style.marginRight = "8px";
        input.style.borderRadius = "6px";
        input.style.border = "1px solid #ccc";
        return input;
    };

    const makeButton = (label, color, handler) => {
        const btn = document.createElement("button");
        btn.textContent = label;
        btn.style.background = color;
        btn.style.color = "#fff";
        btn.style.border = "none";
        btn.style.borderRadius = "6px";
        btn.style.padding = "8px 14px";
        btn.style.cursor = "pointer";
        btn.style.marginTop = "6px";
        btn.onclick = handler;
        btn.onmouseover = () => (btn.style.opacity = 0.9);
        btn.onmouseleave = () => (btn.style.opacity = 1);
        return btn;
    };

    const addSection = (titleText, contentEl) => {
        const sec = document.createElement("div");
        sec.style.marginBottom = "15px";
        const h3 = document.createElement("h3");
        h3.textContent = titleText;
        h3.style.marginBottom = "6px";
        h3.style.fontSize = "16px";
        sec.appendChild(h3);
        sec.appendChild(contentEl);
        return sec;
    };

    // ===== Demo Functions =====
    const logArea = document.createElement("pre");
    logArea.style.background = "#0d1117";
    logArea.style.color = "#00ff9d";
    logArea.style.padding = "15px";
    logArea.style.height = "500px";
    logArea.style.overflowY = "auto";
    logArea.style.borderRadius = "10px";
    logArea.style.flex = "1 1 50%";
    logArea.style.fontSize = "14px";
    logArea.style.fontFamily = "Consolas, monospace";
    logArea.textContent = "▶ Output will appear here...\n";

    function log(msg) {
        const time = new Date().toLocaleTimeString();
        logArea.textContent += `[${time}] ${msg}\n`;
        logArea.scrollTop = logArea.scrollHeight;
    }
    function clearLog() {
        logArea.textContent = "▶ Output cleared.\n";
    }

    // --- If / Else Demo ---
    const ifDiv = document.createElement("div");
    const ageInput = makeInput("Enter Age");
    ifDiv.appendChild(ageInput);
    ifDiv.appendChild(
        makeButton("Run", "#007bff", function () {
            const age = Number(ageInput.value);
            log("🧩 If/Else Demo:");
            if (isNaN(age)) return log("Invalid age!");
            if (age >= 18) log("You are eligible to vote.");
            else if (age >= 16) log("You are almost eligible to vote.");
            else log("You are not eligible to vote.");
        })
    );
    leftPanel.appendChild(addSection("If / Else / Else If", ifDiv));

    // --- Switch Demo ---
    const switchDiv = document.createElement("div");
    const dayInput = makeInput("Enter Day (e.g. Tuesday)");
    switchDiv.appendChild(dayInput);
    switchDiv.appendChild(
        makeButton("Run", "#17a2b8", function () {
            log("🧭 Switch Demo:");
            const day = dayInput.value.trim();
            switch (day) {
                case "Monday":
                    log("Start of the work week!");
                    break;
                case "Tuesday":
                    log("It’s Tuesday!");
                    break;
                case "Friday":
                    log("Almost weekend!");
                    break;
                default:
                    log("Just another day.");
            }
        })
    );
    leftPanel.appendChild(addSection("Switch Statement", switchDiv));

    // --- For Loop ---
    const forDiv = document.createElement("div");
    const forInput = makeInput("Enter n");
    forDiv.appendChild(forInput);
    forDiv.appendChild(
        makeButton("Run", "#28a745", function () {
            const n = Number(forInput.value);
            log("🔁 For Loop:");
            if (isNaN(n) || n <= 0) return log("Enter valid positive number.");
            for (let i = 1; i <= n; i++) log("Iteration: " + i);
        })
    );
    leftPanel.appendChild(addSection("For Loop", forDiv));

    // --- While Loop ---
    const whileDiv = document.createElement("div");
    const whileInput = makeInput("Enter limit");
    whileDiv.appendChild(whileInput);
    whileDiv.appendChild(
        makeButton("Run", "#fd7e14", function () {
            let count = 1;
            const limit = Number(whileInput.value);
            log("🔄 While Loop:");
            if (isNaN(limit) || limit <= 0) return log("Enter valid limit.");
            while (count <= limit) {
                log("Count: " + count);
                count++;
            }
        })
    );
    leftPanel.appendChild(addSection("While Loop", whileDiv));

    // --- Do While Loop ---
    const doDiv = document.createElement("div");
    const doInput = makeInput("Enter limit");
    doDiv.appendChild(doInput);
    doDiv.appendChild(
        makeButton("Run", "#6f42c1", function () {
            let num = 1;
            const limit = Number(doInput.value);
            log("🔂 Do...While Loop:");
            if (isNaN(limit) || limit <= 0) return log("Enter valid number.");
            do {
                log("Number: " + num);
                num++;
            } while (num <= limit);
        })
    );
    leftPanel.appendChild(addSection("Do...While Loop", doDiv));

    // --- Other Loops ---
    const others = document.createElement("div");
    others.appendChild(
        makeButton("for...of", "#20c997", function () {
            log("🍎 for...of Loop:");
            const fruits = ["apple", "banana", "cherry"];
            for (let fruit of fruits) log(fruit);
        })
    );
    others.appendChild(
        makeButton("for...in", "#0dcaf0", function () {
            log("👤 for...in Loop:");
            const person = { name: "Alice", age: 25 };
            for (let key in person) log(key + ": " + person[key]);
        })
    );
    others.appendChild(
        makeButton("forEach", "#6610f2", function () {
            log("🎨 forEach Demo:");
            ["red", "green", "blue"].forEach((color, i) =>
                log(`Color ${i}: ${color}`)
            );
        })
    );
    others.appendChild(
        makeButton("Break/Continue", "#e83e8c", function () {
            log("🚦 Break & Continue:");
            for (let i = 1; i <= 5; i++) {
                if (i === 3) {
                    log("Break at 3!");
                    break;
                }
                log("Value: " + i);
            }
            for (let i = 1; i <= 5; i++) {
                if (i === 3) {
                    log("Skip 3 (Continue)");
                    continue;
                }
                log("Value: " + i);
            }
        })
    );
    leftPanel.appendChild(addSection("Other Loops", others));

    // --- Actions ---
    const actions = document.createElement("div");
    actions.appendChild(makeButton("Clear Output", "#6c757d", clearLog));
    actions.appendChild(
        makeButton("Run All", "#198754", function () {
            clearLog();
            log("🚀 Running all demos...");
            const demos = [
                () => log("You are eligible to vote."),
                () => log("It’s Tuesday!"),
                () => log("Iteration: 1"),
                () => log("Count: 1"),
                () => log("Number: 1"),
            ];
            demos.forEach((fn) => fn());
            
            log("✅ All demos completed.");
        })
    );
    leftPanel.appendChild(addSection("Actions", actions));

    // ====== Append both panels ======
    container.appendChild(leftPanel);
    container.appendChild(logArea);
    document.body.appendChild(container);
});





























// // File: ControlConstructs.js
// // Author: Ayush Narware (assistant help)
// // Purpose: Interactive demos for Control Constructs in JavaScript
// // Comments: Hinglish explanations for learning

// // Helper: ek reusable logger jo output ko page par pre tag me likhega
// function createLogger() {
//     const pre = document.createElement("pre");
//     pre.style.whiteSpace = "pre-wrap";
//     pre.style.background = "#f7f7f7";
//     pre.style.border = "1px solid #ddd";
//     pre.style.padding = "12px";
//     pre.style.borderRadius = "6px";
//     pre.style.maxHeight = "300px";
//     pre.style.overflow = "auto";
//     pre.style.width = "100%";
//     pre.id = "cc-logger";
//     return pre;
// }

// function log(message) {
//     const pre = document.getElementById("cc-logger");
//     if (!pre) {
//         console.log(message);
//         return;
//     }
//     const time = new Date().toLocaleTimeString();
//     pre.textContent += `[${time}] ${message}\n`;
//     pre.scrollTop = pre.scrollHeight;
// }

// // Clear logger
// function clearLog() {
//     const pre = document.getElementById("cc-logger");
//     if (pre) pre.textContent = "";
// }

// // Utility: create styled button
// function createBtn(text, onClick, bg = "#007bff") {
//     const btn = document.createElement("button");
//     btn.textContent = text;
//     btn.style.padding = "8px 14px";
//     btn.style.border = "none";
//     btn.style.borderRadius = "6px";
//     btn.style.cursor = "pointer";
//     btn.style.background = bg;
//     btn.style.color = "white";
//     btn.style.margin = "6px 6px 6px 0";
//     btn.onclick = onClick;
//     return btn;
// }

// // Utility: small input with placeholder
// function createInput(placeholder = "", type = "text") {
//     const inp = document.createElement("input");
//     inp.type = type;
//     inp.placeholder = placeholder;
//     inp.style.padding = "6px 8px";
//     inp.style.borderRadius = "6px";
//     inp.style.border = "1px solid #ccc";
//     inp.style.marginRight = "8px";
//     return inp;
// }

// // Main demo functions for each construct
// function demoIfElse(ageVal) {
//     log("Demo: if / else if / else");
//     const age = Number(ageVal);
//     if (isNaN(age)) {
//         log("Input invalid — please enter a number for age.");
//         return;
//     }
//     log(`Input age = ${age}`);
//     if (age >= 18) {
//         log("You are eligible to vote.");
//     } else if (age >= 16) {
//         log("You are almost eligible to vote.");
//     } else {
//         log("You are not eligible to vote.");
//     }
//     log("---");
// }

// function demoSwitch(dayVal) {
//     log("Demo: switch statement");
//     const day = String(dayVal).trim();
//     log(`Input day = "${day}"`);
//     switch (day) {
//         case "Monday":
//             log("Start of the work week!");
//             break;
//         case "Tuesday":
//             log("It’s Tuesday!");
//             break;
//         case "Friday":
//             log("Almost weekend!");
//             break;
//         case "":
//             log("No day entered.");
//             break;
//         default:
//             log("Just another day.");
//     }
//     log("---");
// }

// function demoForLoop(nVal) {
//     log("Demo: for loop (count 1 to n)");
//     let n = Number(nVal);
//     if (isNaN(n) || n <= 0) {
//         log("Enter a positive integer for iterations.");
//         return;
//     }
//     log(`Running for loop for n = ${n}`);
//     for (let i = 1; i <= n; i++) {
//         log(`Iteration: ${i}`);
//     }
//     log("---");
// }

// function demoWhileLoop(limitVal) {
//     log("Demo: while loop (count 1 to limit)");
//     let limit = Number(limitVal);
//     if (isNaN(limit) || limit <= 0) {
//         log("Enter a positive integer for limit.");
//         return;
//     }
//     let count = 1;
//     while (count <= limit) {
//         log(`Count is: ${count}`);
//         count++;
//     }
//     log("---");
// }

// function demoDoWhile(limitVal) {
//     log("Demo: do...while loop (runs at least once)");
//     let limit = Number(limitVal);
//     if (isNaN(limit)) {
//         log("Enter a number for limit.");
//         return;
//     }
//     let n = 1;
//     do {
//         log(`Number: ${n}`);
//         n++;
//     } while (n <= limit);
//     log("---");
// }

// function demoForOf() {
//     log("Demo: for...of (iterate array values)");
//     const fruits = ["apple", "banana", "cherry"];
//     log(`Array: [${fruits.join(", ")}]`);
//     for (let fruit of fruits) {
//         log(`Value: ${fruit}`);
//     }
//     log("---");
// }

// function demoForIn() {
//     log("Demo: for...in (iterate object keys)");
//     const person = { name: "Alice", age: 25, city: "Indore" };
//     log("Object: " + JSON.stringify(person));
//     for (let key in person) {
//         log(`${key}: ${person[key]}`);
//     }
//     log("---");
// }

// function demoForEach() {
//     log("Demo: forEach (array iteration with function)");
//     const colors = ["red", "green", "blue"];
//     log(`Array: [${colors.join(", ")}]`);
//     colors.forEach(function (color, index) {
//         log(`Index ${index} => ${color}`);
//     });
//     log("---");
// }

// function demoBreakContinue() {
//     log("Demo: break and continue within loop");
//     log("Loop 1..5 with break at 3:");
//     for (let i = 1; i <= 5; i++) {
//         if (i === 3) {
//             log(`i === ${i} → break executed (loop ends)`);
//             break;
//         }
//         log(`Value: ${i}`);
//     }

//     log("---");

//     log("Loop 1..5 with continue at 3:");
//     for (let i = 1; i <= 5; i++) {
//         if (i === 3) {
//             log(`i === ${i} → continue (skip this iteration)`);
//             continue;
//         }
//         log(`Value: ${i}`);
//     }
//     log("---");
// }

// // A function that runs all demos (useful for quick demonstration)
// function demoAll() {
//     clearLog();
//     log("Running all Control Construct demos...");
//     demoIfElse(20);
//     demoSwitch("Tuesday");
//     demoForLoop(5);
//     demoWhileLoop(3);
//     demoDoWhile(2);
//     demoForOf();
//     demoForIn();
//     demoForEach();
//     demoBreakContinue();
//     log("All demos finished.");
// }

// // DOMContentLoaded: create UI controls and bind events
// document.addEventListener("DOMContentLoaded", function () {
//     // Create top-level container
//     const main = document.createElement("div");
//     main.style.maxWidth = "900px";
//     main.style.margin = "20px auto";
//     main.style.fontFamily = "Arial, sans-serif";
//     main.style.lineHeight = "1.5";

//     // Title + description (if not present)
//     let h1 = document.querySelector("h1");
//     if (!h1) {
//         h1 = document.createElement("h1");
//         h1.textContent = "Control Constructs in JavaScript - Interactive Demos";
//         main.appendChild(h1);
//     } else {
//         // make sure heading is visible and styled slightly
//         h1.style.marginTop = "6px";
//     }

//     // Short description
//     const desc = document.createElement("p");
//     desc.innerHTML = "<strong>Interactive demos:</strong> Try each control construct below. Outputs appear in the log area.";
//     main.appendChild(desc);

//     // Container for controls
//     const controls = document.createElement("div");
//     controls.style.display = "flex";
//     controls.style.flexDirection = "column";
//     controls.style.gap = "12px";
//     controls.style.marginBottom = "12px";

//     // --- If / Else controls ---
//     const ifDiv = document.createElement("div");
//     ifDiv.style.display = "flex";
//     ifDiv.style.flexWrap = "wrap";
//     ifDiv.style.alignItems = "center";

//     const ageInput = createInput("Enter age (e.g., 20)");
//     const ifBtn = createBtn("Test if/else", function () {
//         demoIfElse(ageInput.value);
//     }, "#6f42c1");
//     ifDiv.appendChild(ageInput);
//     ifDiv.appendChild(ifBtn);
//     controls.appendChild(createSection("If / Else / Else If", ifDiv));

//     // --- Switch controls ---
//     const switchDiv = document.createElement("div");
//     switchDiv.style.display = "flex";
//     switchDiv.style.alignItems = "center";
//     const dayInput = createInput("Enter day (e.g., Tuesday)");
//     const switchBtn = createBtn("Test switch", function () {
//         demoSwitch(dayInput.value);
//     }, "#17a2b8");
//     switchDiv.appendChild(dayInput);
//     switchDiv.appendChild(switchBtn);
//     controls.appendChild(createSection("Switch", switchDiv));

//     // --- For loop controls ---
//     const forDiv = document.createElement("div");
//     forDiv.style.display = "flex";
//     forDiv.style.alignItems = "center";
//     const forInput = createInput("Enter n (iterations)");
//     forInput.type = "number";
//     const forBtn = createBtn("Run for loop", function () {
//         demoForLoop(forInput.value);
//     }, "#28a745");
//     forDiv.appendChild(forInput);
//     forDiv.appendChild(forBtn);
//     controls.appendChild(createSection("For Loop", forDiv));

//     // --- While loop controls ---
//     const whileDiv = document.createElement("div");
//     whileDiv.style.display = "flex";
//     whileDiv.style.alignItems = "center";
//     const whileInput = createInput("Enter limit for while");
//     whileInput.type = "number";
//     const whileBtn = createBtn("Run while loop", function () {
//         demoWhileLoop(whileInput.value);
//     }, "#fd7e14");
//     whileDiv.appendChild(whileInput);
//     whileDiv.appendChild(whileBtn);
//     controls.appendChild(createSection("While Loop", whileDiv));

//     // --- Do...While controls ---
//     const doDiv = document.createElement("div");
//     doDiv.style.display = "flex";
//     doDiv.style.alignItems = "center";
//     const doInput = createInput("Enter limit for do..while");
//     doInput.type = "number";
//     const doBtn = createBtn("Run do...while", function () {
//         demoDoWhile(doInput.value);
//     }, "#6c757d");
//     doDiv.appendChild(doInput);
//     doDiv.appendChild(doBtn);
//     controls.appendChild(createSection("Do...While Loop", doDiv));

//     // --- Other demo buttons (for...of, for...in, forEach, break/continue) ---
//     const othersDiv = document.createElement("div");
//     othersDiv.style.display = "flex";
//     othersDiv.style.flexWrap = "wrap";
//     othersDiv.style.alignItems = "center";

//     const forOfBtn = createBtn("for...of demo", demoForOf, "#20c997");
//     const forInBtn = createBtn("for...in demo", demoForIn, "#0dcaf0");
//     const forEachBtn = createBtn("forEach demo", demoForEach, "#6610f2");
//     const bcBtn = createBtn("Break / Continue demo", demoBreakContinue, "#e83e8c");
//     othersDiv.appendChild(forOfBtn);
//     othersDiv.appendChild(forInBtn);
//     othersDiv.appendChild(forEachBtn);
//     othersDiv.appendChild(bcBtn);
//     controls.appendChild(createSection("Other Loop Types & Modifiers", othersDiv));

//     // --- Run All + Clear Log buttons ---
//     const actionDiv = document.createElement("div");
//     actionDiv.style.display = "flex";
//     actionDiv.style.alignItems = "center";

//     const runAllBtn = createBtn("Run All Demos", function () {
//         demoAll();
//     }, "#0d6efd");

//     const clearBtn = createBtn("Clear Log", function () {
//         clearLog();
//     }, "#adb5bd");

//     actionDiv.appendChild(runAllBtn);
//     actionDiv.appendChild(clearBtn);
//     controls.appendChild(createSection("Actions", actionDiv));

//     // Append controls to main
//     main.appendChild(controls);

//     // Create logger and add to page
//     const logger = createLogger();
//     main.appendChild(logger);

//     // Insert main into body (before existing script tag if possible)
//     const referenceNode = document.querySelector("script[src$='ControlConstructs.js']");
//     if (referenceNode && referenceNode.parentNode) {
//         referenceNode.parentNode.insertBefore(main, referenceNode);
//     } else {
//         document.body.appendChild(main);
//     }

//     // Initial quick demo message
//     log("Control Constructs interactive demo ready. Use inputs and buttons above to run examples.");
// });

// // Helper to create a titled section wrapper for controls
// function createSection(title, contentElement) {
//     const wrapper = document.createElement("div");
//     wrapper.style.padding = "10px";
//     wrapper.style.border = "1px solid #eee";
//     wrapper.style.borderRadius = "8px";
//     wrapper.style.background = "white";
//     wrapper.style.marginBottom = "8px";
//     wrapper.style.boxShadow = "0 1px 3px rgba(0,0,0,0.03)";

//     const t = document.createElement("h3");
//     t.textContent = title;
//     t.style.margin = "4px 0 8px 0";
//     t.style.fontSize = "16px";

//     wrapper.appendChild(t);
//     wrapper.appendChild(contentElement);
//     return wrapper;
// }
