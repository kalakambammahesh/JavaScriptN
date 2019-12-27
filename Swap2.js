let a = 10;
let b = 20;

console.log(a + " " + b);

a = a + b;
b = a - b;
a = a - b;

console.log(a + " " + b);

let temp = 0;

temp = a;
a = b;
b = temp;

console.log(a + " " + b);