class Person{
    constructor(name, age, height) {
        this._name = name;
        this._age = age;
        this._height = height;
    }
    set name(name) {
        this._name = name;
    }
    get name () {
        return this._name;
    }
}

let obj = new Person("Mahesh", 25, 5.10);
console.log(obj);
obj.name = "Mahi";
console.log(obj.name);