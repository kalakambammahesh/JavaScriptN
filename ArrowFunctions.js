//works 
myFunction();

function myFunction() {
    console.log("This is normal function");
}

//calling normal function;
myFunction();


//Function declaring as variable.
var myFunction1 = function() {
    console.log("Function declaring as variable.")
}

myFunction1()

//Function returing a function

function myFunction2(x) {
    console.log("in myFunction2");
    return function(y) {
        console.log("Inside function of myFunction2")
        return x+y;
    }
}
//calling inside my function
console.log(myFunction2(2)(2));



/////Arrow functions
function myFunc() {
    console.log('Normal');
}
myFunc();

var myFunc = () =>{
    console.log("arrro funciton");
}

myFunc();

var myFunc1 = () => console.log("single line arrow function");
var myFunc2 = () =>
myFunc2();