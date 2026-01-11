
// //this is typescript function
function add(num1 : number ,num2 : number, printResult : boolean,someText : string){
     if(printResult){
        console.log(`${someText} ${num1 + num2}`);
    
     }
     else{
        return num1 + num2;
     }
     return num1 + num2;
}



const n1 = 50; // number type
const n2 = 10; // number type
 
const printResult = true;
const someText = "Result is: ";

add(n1,n2,printResult,someText);
