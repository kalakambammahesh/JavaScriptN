class Rectangle {
    //Constructor is to setup
    constructor(name, age, height) {
        console.log("Construtor is called");
        this.name = name;
        this.age = age;
        this.height = height;
    }

    talking() {
        console.log("Mahesh is talking");
        return;
    }
    walking() {
        console.log("Mahesh is walking")
    }
    desc() {
        return this.name + " age is " + this.age + " and height is " + this.height; 
    }
    //other way
    desc1() {
        console.log(`${this.name} age is ${this.age} and height is ${this.height}`);
    }
}

let obj = new Rectangle("Mahesh", 25, 5.11);
console.log(obj);
console.log(obj.talking());
console.log(obj.desc());
console.log(obj.desc1());

