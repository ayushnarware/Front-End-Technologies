// ✅ 1. Changing Content
const heading = document.querySelector("#heading");
const changeTextBtn = document.querySelector("#changeTextBtn");
const  rechangeBtn = document.querySelector("#rechange");


changeTextBtn.addEventListener("click", () => {
    heading.textContent = "Welcome to Dynamic Webpages!";
    console.log("Heading changed using textContent ✅");

    heading.innerHTML = "Welcome to <span style='color: blue;'>JavaScript</span>";
    console.log("Heading updated with HTML structure ✅");
});
rechangeBtn.addEventListener("click", () => {
    heading.innerHTML = "Explore the <em style='color: green;'> Original Heading - DOM Manipulation</em>!";
    console.log("Heading updated with HTML structure ✅");
});



// ✅ 2. Modifying Styles
// ===== Theme toggle via the .btn button =====
const themeToggleBtn = document.querySelector(".btn");

// apply theme (true => dark, false => light)
function applyTheme(isDark){
  if(isDark){
    document.body.style.backgroundColor = "#0b1220";
    document.body.style.color = "#e6eef6";
    // buttons
    document.querySelectorAll("button").forEach(b=>{
      b.style.backgroundColor = "#4da3ff";
      b.style.color = "#0b1220";
      b.style.border = "none";
    });
    document.querySelectorAll("input").forEach(b=>{
      b.style.backgroundColor = "#4da3ff";
      b.style.color = "#0b1220";
      b.style.padding = "10px";
      b.style.borderRadius = "5px";
      b.style.hover = "none";
      b.style.border = "none";
    });
    
    // headings and pre blocks
    document.querySelectorAll("h1,h2,h3").forEach(h => h.style.color = "#bfe4ff");
    document.querySelectorAll("pre").forEach(p=>{
      p.style.background = "#08121a";
      p.style.color = "#d7eefc";
    });
    // card highlight (if exists)
    document.querySelectorAll(".card").forEach(c=>{
      c.style.background = "#0f1724";
      c.style.border = "1px solid rgba(255,255,255,0.04)";
      c.style.boxShadow = "0 6px 18px rgba(0,0,0,0.6)";
    });
    // images border (optional)
    document.querySelectorAll("img").forEach(img=>{
      img.style.border = "1px solid rgba(255,255,255,0.06)";
    });
  } else {
    // revert to light theme defaults (adjust if you have site CSS)
    document.body.style.backgroundColor = "#f8f9fa";
    document.body.style.color = "#333";
    document.querySelectorAll("button").forEach(b=>{
      b.style.backgroundColor = "#0078d7";
      b.style.color = "white";
      b.style.border = "none";
    });
    document.querySelectorAll("h1,h2,h3").forEach(h => h.style.color = "");
    document.querySelectorAll("pre").forEach(p=>{
      p.style.background = "#eee";
      p.style.color = "#000";
    });
    document.querySelectorAll(".card").forEach(c=>{
      c.style.background = "";
      c.style.border = "";
      c.style.boxShadow = "";
    });
    document.querySelectorAll("img").forEach(img=>{
      img.style.border = "";
    });
  }
}

// load saved theme on page load
const saved = localStorage.getItem("pageTheme");
if(saved === "dark"){
  applyTheme(true);
} else {
  applyTheme(false);
}

// toggle on button click
if(themeToggleBtn){
  themeToggleBtn.addEventListener("click", () => {
    const nowDark = document.body.getAttribute("data-theme") !== "dark";
    // store flag on body to track state
    document.body.setAttribute("data-theme", nowDark ? "dark" : "light");
    applyTheme(nowDark);
    localStorage.setItem("pageTheme", nowDark ? "dark" : "light");
    console.log("Theme switched to:", nowDark ? "dark" : "light");
  });
}


// ✅ Selecting elements
    const list = document.querySelector("#itemList");
    const addItemBtn = document.querySelector("#addItemBtn");
    const removeItemBtn = document.querySelector("#removeItemBtn");
    const newItemInput = document.querySelector("#newItemInput");

    // ✅ Add Item functionality
    addItemBtn.addEventListener("click", () => {
      const newItem = document.createElement("li");
      const itemName = newItemInput.value.trim() || "New Item";

      // Prevent duplicate "New Item"
      for (let i = 0; i < list.children.length; i++) {
        if (list.children[i].textContent === itemName) {
          console.log("⚠️ Item already exists:", itemName);
          alert("⚠️ Item already exists in the list!");
          return;
        }
      }

      newItem.textContent = itemName;
      list.appendChild(newItem);
      console.log("✅ New list item added:", itemName);
      newItemInput.value = ""; // Clear input after adding
    });

    // ✅ Remove Item functionality
    removeItemBtn.addEventListener("click", () => {
      if (list.lastElementChild) {
        console.log("❌ Removed item:", list.lastElementChild.textContent);
        list.removeChild(list.lastElementChild);
      } else {
        console.log("⚠️ No items left to remove.");
        alert("⚠️ No items left to remove!");
      }
    });

removeItemBtn.addEventListener("click", () => {
    const firstItem = list.querySelector("li");
    if (firstItem) {
        list.removeChild(firstItem);
        console.log("❌ First list item removed.");
    } else {
        console.log("⚠️ No items left to remove.");
    }
});

// ✅ 4. Adding and Removing Classes
const card = document.querySelector(".card");
const toggleClassBtn = document.querySelector("#toggleClassBtn");

toggleClassBtn.addEventListener("click", () => {
    card.classList.toggle("highlight");
    console.log("Card highlight toggled:", card.classList.contains("highlight"));
});

// ✅ 5. Manipulating Attributes
const image = document.querySelector("#image");
const changeImageBtn = document.querySelector("#changeImageBtn");

changeImageBtn.addEventListener("click", () => {
    image.setAttribute("src", "https://tse2.mm.bing.net/th/id/OIP.1Se7tgAnRox2K9H5L77QOAHaEx?pid=ImgDet&w=474&h=305&rs=1&o=7&rm=3");
    console.log("Image src set to:", image.getAttribute("src"));
    image.removeAttribute("alt");
    console.log("Removed alt attribute from image.");
});

console.log("✅ DOM Manipulation Script Loaded Successfully!");
