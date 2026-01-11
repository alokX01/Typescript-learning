// let firstName : string;
// let age : number;

// firstName  = "Harsh";
// age= 22;

// const person : {
//     firstName : string;
//      age : number;
// } ={
// firstName : "Harsh",
// age : 22

// }

// Union, litrals types, types Alias(custom types)

// Union : pipe in ts

// function combine(num1 : number | string, num2: number | string){
//     let result ;
//     if(typeof num1 === "number" && typeof num2 === "number"){
//         result = num1+num2;
//     }else{
//         result = num1.toString() + num2.toString();
//     }
//     return result;
// }
// const sum = combine(10,20); //30
// const combineName = combine("Alok"," Mernstack");//Alok mernstack

// console.log(sum,combineName);

//! Ltera types

// function combine(num1 : number | string, num2: number | string, conversionType : "as-number"| "as-string"){
//         let result ;
//         if(typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-number"){
//             result = +num1 + +num2;
//         }else{
//             result = num1.toString() + num2.toString();
//         }
//         return result;
//     }
//     const sum1 = combine("10","20","as-number"); //30
//     const sum2   = combine(10,15, "as-number");
//     const combineName = combine("Alok"," Mernstack","as-string");//Alok mernstack
    
//     console.log(sum1, sum2,combineName)


//type alias

type cominable = number | string;

function combine(num1 : cominable, num2: cominable, conversionType : "as-number"| "as-string"){
            let result ;
            if(typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-number"){
                result = +num1 + +num2;
            }else{
                result = num1.toString() + num2.toString();
            }
            return result;
        }
        const sum1 = combine("10","20","as-number"); //30
        const sum2   = combine(10,15, "as-number");
        const combineName = combine("Alok"," Mernstack","as-string");//Alok mernstack
        
        console.log(sum1, sum2,combineName)

        type User = {
            name :string;
            age: number;
            skils:string[];
        }
        const user : User ={
               name:"Aman",
               age:23,
               skils:["mern-stack","strong react","apis-handling"],
        }

        function greet(user:User){
            console.log(`Hii , I'm ${user.name}`);
            
        }
        greet(user);