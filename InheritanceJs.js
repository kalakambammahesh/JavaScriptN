class Person{
    constructor(name) {
        this._name = name;
    }

    set name(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
}

class Programmer extends Person {
    constructor(name, programmingLang){
        super(name);
        this._programmingLang = programmingLang;
    }
    fun() {
        return `${this._name} is coding ${this._programmingLang}`;
    }
 }

 let obj = new Programmer("Mahesh", "Javascript");
 console.log(obj);
 console.log(obj.fun());