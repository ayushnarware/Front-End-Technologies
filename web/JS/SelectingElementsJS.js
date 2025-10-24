// ==============================
// Selecting Elements in JavaScript
// ==============================

// 1. querySelector()
console.log("=== document.querySelector() ===");
const heading = document.querySelector('h1');
console.log("Heading Text:", heading.textContent);

// 2. querySelectorAll()
console.log("=== document.querySelectorAll() ===");
const paragraphs = document.querySelectorAll('p');
paragraphs.forEach((p, i) => console.log(`Paragraph ${i + 1}:`, p.textContent));

// 3. getElementById()
console.log("=== document.getElementById() ===");
document.body.innerHTML += '<p id="main">This is a sample main section</p>';
const mainSection = document.getElementById('main');
console.log("getElementById ->", mainSection.textContent);

// 4. getElementsByClassName()
console.log("=== document.getElementsByClassName() ===");
document.body.innerHTML += '<p class="item">Item 1</p><p class="item">Item 2</p>';
const items = document.getElementsByClassName('item');
console.log("Total items:", items.length, "| First item:", items[0].textContent);

// 5. getElementsByTagName()
console.log("=== document.getElementsByTagName() ===");
const list = document.createElement('ul');
list.id = "menu";
list.innerHTML = "<li>Home</li><li>About</li><li>Contact</li>";
document.body.appendChild(list);
const listItems = document.getElementsByTagName('li');
console.log("Total <li> tags:", listItems.length);

// 6. getElementsByName()
console.log("=== document.getElementsByName() ===");
document.body.innerHTML += `
    <input type="radio" name="gender" value="male"> Male
    <input type="radio" name="gender" value="female"> Female
`;
const radios = document.getElementsByName('gender');
console.log("Radio buttons count:", radios.length);

// 7. Combining Methods
console.log("=== Combining Methods ===");
const secondMenuItem = document.querySelector('#menu li:nth-child(2)');
console.log("Second Menu Item:", secondMenuItem.textContent);

const paragraphsInContent = document.querySelectorAll('p');
console.log("All paragraphs count:", paragraphsInContent.length);

// Summary
console.log("\n✅ Summary:");
console.log("querySelector/querySelectorAll -> Modern and versatile.");
console.log("getElementById -> Fastest for unique elements.");
console.log("getElementsByClassName/TagName -> Great for multiple elements.");
console.log("getElementsByName -> Useful for form elements.");
