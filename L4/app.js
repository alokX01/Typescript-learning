//functions
//function return type
function add(num1, num2) {
    return num1 + num2;
}
// console.log(add(10,20))
function greet(name) {
    console.log("Hi ".concat(name));
}
// let combineFunction :Function;
//  //combineFunction = 10; //invalid
//  //cominrFunction ="alok"  //invalid 
//  //combineFunction = function(){  }    //valid
//  combineFunction = add;
//  combineFunction=greet;
//  console.log( combineFunction(1,3))
//  Goood parctise 
// let  combineFunction : (a : number, b: number) => number;
// combineFunction = add;
// console.log(combineFunction(100,200));
//callbacks functions 
function addHandler(num1, num2, cb) {
    var result = num1 + num2;
    cb(result);
}
addHandler(10, 20, function (result) {
    console.log(result);
});
