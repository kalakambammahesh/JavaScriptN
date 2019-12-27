const items = [
    {
        name : "Bike", price : 100
    },
    {
        name : "TV", price : 200
    },
    {
        name : "Album", price : 10
    },
    {
        name : "Book", price : 5
    },
    {
        name : "Phone", price : 500
    },
    {
        name : "com[puter", price : 1000
    },
    {
        name : "Keyboard", price : 125
    },

];

//Main object of Arrays does not changes after using arrays method 
//FILTER Method
// console.log(items.filter((item)=>{
//     return item.price > 100
// }));
// console.log(items.filter((item)=>{
//     return item.name.indexOf('com') != -1
// }))
// console.log(items)

//MAP Method

// const itemName = items.map((item)=>{
//    // return item.name;
//    return item.price
// })

// console.log(itemName);

//FIND method

// const findItem = items.find((item)=>{
//     return item.name === 'TV';
// })

// console.log(findItem)

//FOREACH methid of arrays

// items.forEach((item)=>{
//     console.log(item.name + '::' + item.price)
// })

//SOME method : return true for atleast one

// const hasInexpensive = items.some((item)=>{
//     return item.price < 1;
// })

// console.log(hasInexpensive)

//Every method : return true if provided condition is true for every element of arrays;


// const hasInexpensive = items.every((item)=>{
//     return item.price < 10000;
// })

// console.log(hasInexpensive)

//REDUCE method (reduces to only one thing)

// const totalValue = items.reduce((currentTotal, item)=>{
//     return item.price + currentTotal;
// },1000); 
// console.log(totalValue)

//INCLUDES method;
const arr = [1,2,3,4,5,6]
arr.push(7)
const contains = arr.includes(8);
console.log(contains)