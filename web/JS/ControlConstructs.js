// File: ControlConstructs.js
// Author: Ayush Narware
// Purpose: Interactive "Control Constructs in JavaScript" demo inside a target DIV

document.addEventListener("DOMContentLoaded", function () {
    // ====== Target Container ======
    const mainDiv = document.getElementById("div"); // 👈 use your div here
    if (!mainDiv) {
        console.error("❌ Target div with id='div' not found in HTML!");
        return;
    }
// ====== Main Layout Container ======
const container = document.createElement("div");
container.style.display = "flex";
container.style.gap = "20px";
container.style.flexWrap = "wrap";
container.style.maxWidth = "100%";
container.style.margin = "20px auto";
container.style.fontFamily = "Poppins, Arial, sans-serif";

// ====== Left Panel ======
const leftPanel = document.createElement("div");
leftPanel.style.flex = "1 1 25%";       // takes 50% width, flexible
leftPanel.style.padding = "20px";
leftPanel.style.border = "1px solid #ddd";
leftPanel.style.borderRadius = "10px";
leftPanel.style.background = "white";
leftPanel.style.boxShadow = "0 3px 8px rgba(0,0,0,0.08)";

// ====== Right Panel ======
const logArea = document.createElement("div");
logArea.style.flex = "1 1 25%";         // takes 50% width, flexible
logArea.style.background = "#0d1117";
logArea.style.color = "#00ff9d";
logArea.style.padding = "15px";
logArea.style.borderRadius = "10px";
logArea.style.fontSize = "14px";
logArea.style.fontFamily = "Consolas, monospace";
logArea.style.flexDirection = "column";
logArea.style.justifyContent = "flex-start";
logArea.style.position = "relative";
logArea.innerHTML = "<p style='opacity:0.8'>▶ Output will appear here...</p>";

// Append panels to container
container.appendChild(leftPanel);
container.appendChild(logArea);

// Append container to body
document.body.appendChild(container);


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

    // ===== Helper Functions =====
    const makeInputButtonRow = (placeholder, btnLabel, color, handler) => {
        const row = document.createElement("div");
        row.style.display = "flex";
        row.style.alignItems = "center";
        row.style.gap = "10px";

        const input = document.createElement("input");
        input.placeholder = placeholder;
        input.style.padding = "8px";
        input.style.borderRadius = "6px";
        input.style.border = "1px solid #ccc";
        input.style.flex = "1";

        const btn = document.createElement("button");
        btn.textContent = btnLabel;
        btn.style.background = color;
        btn.style.color = "#fff";
        btn.style.border = "none";
        btn.style.borderRadius = "6px";
        btn.style.padding = "8px 14px";
        btn.style.cursor = "pointer";
        btn.onclick = () => handler(input.value);
        btn.onmouseover = () => (btn.style.opacity = 0.9);
        btn.onmouseleave = () => (btn.style.opacity = 1);

        row.appendChild(input);
        row.appendChild(btn);
        return row;
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

    // ===== Right Panel (Animated Output Crawler) =====
        function log(msg) {
        const p = document.createElement("p");
        p.style.margin = "0";
        p.style.padding = "2px 0";
        p.style.opacity = "0";
        p.textContent = msg;
        logArea.appendChild(p);
        setTimeout(() => (p.style.opacity = 1), 100);
    }

    function clearLog() {
        logArea.innerHTML = "<p style='opacity:0.8'>▶ Output cleared.</p>";
    }

    // ===== Demo Sections =====
    const ifSection = addSection(
        "If / Else / Else If",
        makeInputButtonRow("Enter Age", "Run", "#007bff", (val) => {
            const age = Number(val);
            log("🧩 If/Else Demo:");
            if (isNaN(age)) return log("Invalid age!");
            if (age >= 18) log("You are eligible to vote.");
            else if (age >= 16) log("You are almost eligible to vote.");
            else log("You are not eligible to vote.");
        })
    );

    const switchSection = addSection(
        "Switch Statement",
        makeInputButtonRow("Enter Day (e.g. Tuesday)", "Run", "#17a2b8", (val) => {
            const day = val.trim();
            log("🧭 Switch Demo:");
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

    const forSection = addSection(
        "For Loop",
        makeInputButtonRow("Enter n", "Run", "#28a745", (val) => {
            const n = Number(val);
            log("🔁 For Loop:");
            if (isNaN(n) || n <= 0) return log("Enter valid positive number.");
            for (let i = 1; i <= n; i++) log("Iteration: " + i);
        })
    );

    const whileSection = addSection(
        "While Loop",
        makeInputButtonRow("Enter limit", "Run", "#fd7e14", (val) => {
            let count = 1;
            const limit = Number(val);
            log("🔄 While Loop:");
            if (isNaN(limit) || limit <= 0) return log("Enter valid limit.");
            while (count <= limit) {
                log("Count: " + count);
                count++;
            }
        })
    );

    const doSection = addSection(
        "Do...While Loop",
        makeInputButtonRow("Enter limit", "Run", "#6f42c1", (val) => {
            let num = 1;
            const limit = Number(val);
            log("🔂 Do...While Loop:");
            if (isNaN(limit) || limit <= 0) return log("Enter valid number.");
            do {
                log("Number: " + num);
                num++;
            } while (num <= limit);
        })
    );

    // ===== Other Loops =====
    const others = document.createElement("div");
    const makeBtn = (label, color, fn) => {
        const btn = document.createElement("button");
        btn.textContent = label;
        btn.style.background = color;
        btn.style.color = "white";
        btn.style.border = "none";
        btn.style.borderRadius = "6px";
        btn.style.padding = "8px 12px";
        btn.style.marginRight = "6px";
        btn.style.cursor = "pointer";
        btn.onclick = fn;
        return btn;
    };

    others.appendChild(makeBtn("for...of", "#20c997", () => {
        log("🍎 for...of Loop:");
        ["apple", "banana", "cherry"].forEach(fruit => log(fruit));
    }));
    others.appendChild(makeBtn("for...in", "#0dcaf0", () => {
        log("👤 for...in Loop:");
        const person = { name: "Alice", age: 25 };
        for (let key in person) log(key + ": " + person[key]);
    }));
    others.appendChild(makeBtn("forEach", "#6610f2", () => {
        log("🎨 forEach Demo:");
        ["red", "green", "blue"].forEach((c, i) => log(`Color ${i}: ${c}`));
    }));
    others.appendChild(makeBtn("Break/Continue", "#e83e8c", () => {
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
    }));

    const otherSection = addSection("Other Loops", others);

    // ===== Actions =====
    const actions = document.createElement("div");
    actions.appendChild(makeBtn("Clear Output", "#6c757d", clearLog));
    actions.appendChild(makeBtn("Run All", "#198754", () => {
        clearLog();
        log("🚀 Running all demos...");
        const steps = [
            "You are eligible to vote.",
            "It’s Tuesday!",
            "Iteration: 1",
            "Count: 1",
            "Number: 1",
            "✅ All demos completed."
        ];
        steps.forEach((msg, i) => {
            setTimeout(() => log(msg), (i + 1) * 400);
        });
    }));
    const actionSection = addSection("Actions", actions);

    // ===== Append to Left Panel =====
    leftPanel.append(
        ifSection,
        switchSection,
        forSection,
        whileSection,
        doSection,
        otherSection,
        actionSection
    );

    // ===== Append both panels into given div =====
    container.appendChild(leftPanel);
    container.appendChild(logArea);
    mainDiv.appendChild(container);
});
