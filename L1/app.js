// //this is typescript function
function add(num1, num2, printResult, someText) {
    if (printResult) {
        console.log("".concat(someText, " ").concat(num1 + num2));
    }
    else {
        return num1 + num2;
    }
    return num1 + num2;
}
var n1 = 50; // number type
var n2 = 10; // number type
var printResult = true;
var someText = "Result is: ";
add(n1, n2, printResult, someText);
