//There types of objects in js
//1.Arrays : which is dynamic and can insert different datatypes.
//2.Functions
//Objects

//Arrays :: provides rich set of methods and properties

let arr = [];
console.log(typeof arr);
//Can insert different datatypes and dynamic
arr = ["Mahes", 547, true, null];
console.log(arr);
//can access using index values
console.log(arr[3]);

//Functions : just like methods and functions in other programming language
function fun() {
    console.log("In funciton::");
    return null
}
fun();

//objects:: key value pairs

let obj = {
    "name" : "Mahes",
    "Age" : "25",
    "Married" : false
}
console.log(typeof obj) ;
//We can access objects properties by two ways
//One was is dot notation
console.log(obj.name);

//Other way to access
console.log(obj['Age']);

//above mentioned two is important and we can not say
//which one is better dot is simple and prescie where as other way is userful when taking user input dynamically

//How to modify objects data
obj.name="Mahesh K";
console.log(obj.name)
obj['Age'] = 24.5;
console.log(obj['Age']);

//We can add functions and other objects in and object as key value pair
let newObj = {
    "fun" : function() {
        console.log("In function in newObj");
    },
    "obj1" : obj
}

console.log(newObj.fun);
debugger;
console.log(newObj.obj1.name)