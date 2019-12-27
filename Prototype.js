+
function Student() {
    this.name = "Mahesh";
    this.age = 25;
}

// let obj = new Student();

// obj.gender = "male";

// console.log(obj.age);
// console.log(obj.gender);
// console.log(obj);

let obj1 = new Student();
obj1.gender = "male";
console.log(obj1.gender);

let obj2 = new Student();
console.log(obj2.gender);

//Prototype object attached defaulty to all functions and objects
//Prototype is used to attach new properties to construtor functions in later stage.
//These properties can be shared across all the instances.

//In above example obj2 returns undefiened gender to over come this we use prototypes.

Student.prototype.gender = "male";

console.log(obj1.gender);
console.log(obj2.gender);

console.log(typeof Student.prototype);
console.log(typeof obj1.prototype);
console.log(typeof obj1.__proto__);

console.log(Object.getPrototypeOf(obj1));
console.log(Object.getPrototypeOf(obj1).constructor)
console.log(obj1.hasOwnProperty());

Student.prototype = {gender : "M"};

let obj3 = new Student();
console.log(obj3.gender)

//Use of prototype
//1) To find properties and methods of an object
//2) To implement inheritance in JavaScript

var a = 10;
console.log(a);

