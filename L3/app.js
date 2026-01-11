// let firstName : string;
// let age : number;
function combine(num1, num2, conversionType) {
    var result;
    if (typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-number") {
        result = +num1 + +num2;
    }
    else {
        result = num1.toString() + num2.toString();
    }
    return result;
}
var sum1 = combine("10", "20", "as-number"); //30
var sum2 = combine(10, 15, "as-number");
var combineName = combine("Alok", " Mernstack", "as-string"); //Alok mernstack
console.log(sum1, sum2, combineName);
var user = {
    name: "Aman",
    age: 23,
    skils: ["mern-stack", "strong react", "apis-handling"],
};
function greet(user) {
    console.log("Hii , I'm ".concat(user.name));
}
greet(user);
