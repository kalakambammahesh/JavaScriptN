//Clousers are more like scopes which stores outter function data and uses then even after executring the outter function

//Example 1 : Clousers using variable

var passed = 2;

function outter(inner) {
    return passed + inner;
}

console.log(outter(2))


//Example 2 : Clousers with inner function
function outter1() {
    return function inner(inner) {
        return passed + inner;
    }
}

console.log(outter1()(2))