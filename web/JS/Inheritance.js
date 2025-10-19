// ===============================
// Introduction to Inheritance in JavaScript
// ===============================

// 🧩 Example 1: Parent and Child Classes
class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this.name} is barking.`);
  }
}

// Creating objects
const animal = new Animal("Generic Animal");
animal.eat(); // Output: Generic Animal is eating.

const dog = new Dog("Buddy");
dog.eat(); // Output: Buddy is eating. (inherited from Animal)
dog.bark(); // Output: Buddy is barking.


// ===============================
// 🏗️ Example 2: Using constructor() and super()
// ===============================
class Cat extends Animal {
  constructor(name, color) {
    super(name); // Call parent class constructor
    this.color = color; // Child class property
  }

  purr() {
    console.log(`${this.name}, the ${this.color} cat, is purring.`);
  }
}

// Creating object
const kitty = new Cat("Whiskers", "black");
kitty.eat(); // Output: Whiskers is eating.
kitty.purr(); // Output: Whiskers, the black cat, is purring.


// ===============================
// 🎵 Example 3: Method Overriding
// ===============================
class GenericAnimal {
  constructor(name) {
    this.name = name;
  }

  sound() {
    console.log(`${this.name} makes a sound.`);
  }
}

class SpecificDog extends GenericAnimal {
  sound() {
    console.log(`${this.name} barks.`);
  }
}

// Creating objects
const genericAnimal = new GenericAnimal("Generic Animal");
genericAnimal.sound(); // Output: Generic Animal makes a sound.

const myDog = new SpecificDog("Buddy");
myDog.sound(); // Output: Buddy barks.


// ===============================
// 🛒 Example 4: Real-Life Example (Shopping System)
// ===============================
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  display() {
    console.log(`${this.name} costs $${this.price}.`);
  }
}

class Book extends Product {
  constructor(name, price, author) {
    super(name, price); // Call parent constructor
    this.author = author;
  }

  display() {
    super.display(); // Call parent display method
    console.log(`Written by ${this.author}.`);
  }
}

// Creating objects
const product = new Product("Laptop", 1200);
product.display(); // Output: Laptop costs $1200.

const book = new Book("JavaScript Basics", 25, "John Doe");
book.display();
// Output:
// JavaScript Basics costs $25.
// Written by John Doe.


// ===============================
// ✅ Summary Output
// ===============================
console.log("\n✅ Summary:");
console.log("Inheritance lets child classes reuse parent properties and methods.");
console.log("The 'extends' keyword links child to parent.");
console.log("The 'super' keyword calls the parent constructor or methods.");
console.log("Child classes can override methods to define specific behaviors.");





console.log("Class Notes");
class Employee {
  constructor(empId, empName, empSalary) {
    this.empId = empId;
    this.empName = empName;
    this.empSalary = empSalary;
  }
  //Inherited
  work() {
    console.log(`${this.empName} is working.`);
  }
  project() {
    console.log(`${this.empName} is working on a project.`);
  }
}
class Developer extends Employee {
  //Overriden method
  project() {
    console.log(`${this.empName} is coding as Developer.`);
  }
  //Specilized
  infoDeveloper() {
    console.log(`The Developer name is ${this.empName}, 
        id is ${this.empId} and salary is ${emp1.empSalary}!`);
  }
}
class Tester extends Employee {
  //overridden
  project() {
    console.log(`${this.empName} is testing the application.`);
  }
  //specialized
  infoTester() {
    console.log(`The Tester name is ${this.empName}, 
        id is ${this.empId} and salary is ${emp1.empSalary}!`);
  }
}

const emp1 = new Developer(101, "Ram", 70000);
emp1.work();
emp1.project();
emp1.infoDeveloper();
const emp2 = new Tester(102, "Sita", 45000);
emp2.work();
emp2.project();
emp2.infoTester();




class Tester extends Employee {
  //overridden
  project() {
    console.log(`${this.empName} is testing the application.`);
  }
  //specialized
  infoTester() {
    console.log(`The Tester name is ${this.empName}, 
        id is ${this.empId} and salary is ${emp1.empSalary}!`);
  }
}

const emp11 = new Developer(101, "Ram", 70000);
emp11.work();
emp11.project();
emp11.infoDeveloper();
const emp22 = new Tester(102, "Sita", 45000);
emp22.work();
emp22.project();
emp22.infoTester();


// Parent class
class Animal {
  constructor(name) {
    this.name = name; // 'this' refers to Animal instance
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

// Child class
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // calls parent constructor (Animal)
    this.breed = breed; // 'this' refers to Dog instance
  }

  speak() {
    super.speak(); // calls Animal's speak()
    console.log(`${this.name} barks`);
  }

  showDetails() {
    console.log(`Name: ${this.name}, Breed: ${this.breed}`);
  }
}

// Create object
const dog1 = new Dog("Buddy", "Golden Retriever");

dog1.showDetails(); // Name: Buddy, Breed: Golden Retriever
dog1.speak();


// Output:
// Buddy makes a sound
// Buddy barks
//super() - super constructor call parent class constructor
//super. - super keyword point to parent class
//this - keyword point to current object