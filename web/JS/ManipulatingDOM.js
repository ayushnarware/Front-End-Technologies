// ✅ 1. Changing Content
const heading = document.getElementById("heading");
const changeTextBtn = document.getElementById("changeTextBtn");

let isChanged = false;

changeTextBtn.addEventListener("click", () => {
  if (!isChanged) {
    heading.innerHTML = "🚀 Welcome to <span>Interactive JavaScript</span>!";
    changeTextBtn.innerHTML = "🔄 Reset Heading";
    console.log("Heading transformed to dynamic version ✅");
  } else {
    heading.innerHTML = "Mastering the DOM: Your Web Superpower 💪";
    changeTextBtn.innerHTML = "✨ Transform Heading";
    console.log("Heading reverted to original ✅");
  }
  isChanged = !isChanged;
});


// ✅ 2. Modifying Styles
// ===== Theme toggle via the .btn button =====
const themeToggleBtn = document.querySelector(".btn");

// apply theme (true => dark, false => light)
function applyTheme(isDark) {
  if (isDark) {
    document.body.style.backgroundColor = "#0b1220";
    document.body.style.color = "#e6eef6";
    // buttons
    document.querySelectorAll("button").forEach(b => {
      b.style.backgroundColor = "#4da3ff";
      b.style.color = "#0b1220";
      b.style.border = "none";
    });
    document.querySelectorAll("input").forEach(b => {
      b.style.backgroundColor = "#4da3ff";
      b.style.color = "#0b1220";
      b.style.padding = "10px";
      b.style.borderRadius = "5px";
      b.style.hover = "none";
      b.style.border = "none";
    });

    // headings and pre blocks
    document.querySelectorAll("h1,h2,h3").forEach(h => h.style.color = "#bfe4ff");
    document.querySelectorAll("pre").forEach(p => {
      p.style.background = "#08121a";
      p.style.color = "#d7eefc";
    });
    // card highlight (if exists)
    document.querySelectorAll(".card").forEach(c => {
      c.style.background = "#0f1724";
      c.style.border = "1px solid rgba(255,255,255,0.04)";
      c.style.boxShadow = "0 6px 18px rgba(0,0,0,0.6)";
    });
    // images border (optional)
    document.querySelectorAll("img").forEach(img => {
      img.style.border = "1px solid rgba(255,255,255,0.06)";
    });
  } else {
    // revert to light theme defaults (adjust if you have site CSS)
    document.body.style.backgroundColor = "#f8f9fa";
    document.body.style.color = "#333";
    document.querySelectorAll("button").forEach(b => {
      b.style.backgroundColor = "#0078d7";
      b.style.color = "white";
      b.style.border = "none";
    });
    document.querySelectorAll("h1,h2,h3").forEach(h => h.style.color = "");
    document.querySelectorAll("pre").forEach(p => {
      p.style.background = "#eee";
      p.style.color = "#000";
    });
    document.querySelectorAll(".card").forEach(c => {
      c.style.background = "";
      c.style.border = "";
      c.style.boxShadow = "";
    });
    document.querySelectorAll("img").forEach(img => {
      img.style.border = "";
    });
  }
}

// load saved theme on page load
const saved = localStorage.getItem("pageTheme");
if (saved === "dark") {
  applyTheme(true);
} else {
  applyTheme(false);
}

// toggle on button click
if (themeToggleBtn) {
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

const card = document.querySelector(".card");
const toggleClassBtn = document.getElementById("toggleClassBtn");

toggleClassBtn.addEventListener("click", () => {
  card.classList.toggle("highlight");
  console.log("Highlight toggled 🎯");
  toggleClassBtn.innerHTML = card.classList.contains("highlight") ? "Remove Highlight" : "Add Highlight";
});

// ✅ 5. Manipulating Attributes
const image = document.getElementById("image");
const changeImageBtn = document.getElementById("changeImageBtn");

// Image URLs
const img1 = "https://tse2.mm.bing.net/th/id/OIP.1Se7tgAnRox2K9H5L77QOAHaEx?pid=ImgDet&w=474&h=305&rs=1&o=7&rm=3";
const img2 = "https://wallpaper.dog/large/20673129.jpg";

// Track current image
let isImage1 = true;

changeImageBtn.addEventListener("click", () => {
  image.setAttribute("src", isImage1 ? img2 : img1);
  image.removeAttribute("alt");
  console.log("Image toggled 🎯");
  isImage1 = !isImage1;
});

console.log("✅ DOM Manipulation Script Loaded Successfully!");
