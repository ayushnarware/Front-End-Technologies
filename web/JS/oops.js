//Creating with class
class Student {
    //properties
    id = 101;
    name = "Anusha";
    grade = 7.8;

    //behaviour
    study() {
        console.log(s1.name, "Student studies");
    }
    eat() {
        console.log(s1.name , "Student eats");
    }
}
//object creation
const s1 = new Student();
console.log(`The is id: ${s1.id}!`);
console.log(`The is name: ${s1.name}!`);
console.log(`The is grade: ${s1.grade}!`);
s1.study();
s1.eat();