//Var is function scope, If you declare it in block can be used in entire function which is not usual in other 
//programming languages, which is why not recommended to use
var number = 10;
number = 20;
console.log(number);

function varCheck(number) {
    if(number > 0) {
        var numberChange = 100;
    }
    //Even we declared numberChange in if block we can access here, which is actual issue.
    console.log("numberChange::"+numberChange);
}

varCheck(number)
//Alternative and other way of var is let which is block scope.

let number1 = 10
number1 = 20;
console.log(number1)

function varCheck1(number1) {
    if(number1 > 0) {
        let numberChange = 100;
    }
    //Even can't access numberChange here like var variable becuse it is block scope. 
    //if we tried to access it throws error.
    //console.log("numberChange::"+numberChange);
}

varCheck1(number1);

//const keyword

const name = "Mahesh";
//throws error Assignment to const variable
//name = "Mahesh K";
console.log(name);


var nameN = "Mahesh";
nameN = "Sashi";
console.log(nameN)