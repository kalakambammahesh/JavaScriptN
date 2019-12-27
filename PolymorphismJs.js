class Person{
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    set name(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set age(age) {
        this._age = age;
    }
    get age() {
        return this._age;
    }
    name_age() {
        return this._name + " age is " + this._age;
    }
}

class Programmer extends Person{
    constructor(name, age, lang) {
        super(name, age);
        this._lang = lang;
    }
    name_age() {
        return this._name + " age is " + this._age + " is and programs " + this._lang;
    }
}

console.log("Starting and creating obj");

let obj = new Programmer("Mahes K", 25, "JS");
console.log(obj);
console.log(obj.name_age())
