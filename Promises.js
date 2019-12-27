//Promises are used to handle asynchronous operations

/*
A Promise has four states:
1.Fulfilled : Action related to the promise succeeded.
2.rejected : Action related to the promise failed
3.pending : Promise is still pending i.e not fulfilled or rejected yet.
4.settled : Promise has fulfilled or rejected
*/

var promise = new Promise((resolve, reject)=>{
    var x = 1;
    if(x===1) {
        resolve("message1");
    }else if(true){
        reject("message2");
    }
});

promise.then((message)=>{
    console.log(message)
}).catch((message)=>{
    console.log(message)
});

