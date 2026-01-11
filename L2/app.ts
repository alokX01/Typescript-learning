// //objects , arrays, tuples , enum
// //objects
 export {}; // this is used to tell the typescript compiler that this file is a module and not a script which is used to avoid the error of not finding the module name error. because in typescript we need to tell the compiler that this file is a module. and we need to export the module to use it in other files. thats why cons tpersoon in which person is showing error because it is not exported. and we need to export the person to use it in other files. exports means we are exporting the person to use it in other files.
// const person: {
//     firstName: string;
//     age: number;
//     address: string;
//     skills: string[];
    
//   } = {
//     firstName: "Alok",
//     age: 20,
//     address: "madhubani, bihar",
//     skills: ["html", "css", "javascript,react, node, express, mongodb, mysql,  c, c++,"],
//   };

//   let favoriteSkills: string[];
//    favoriteSkills =["react-js","node"];

//    let lang : string[];
//    lang = ["Hindi", "English"];
// //   console.log(person);
  

// //tuple 

// const person : {
//     name : string;
//     age: number;
//     skills : string[];
//     product:[number,string], //fixed array of two type
// } = {
//     name: "Mohit",
//     age: 22,
//     skills: ["html","css","javascript","react"],
//     product : [10,"mac-12"]
// }
// person.product[0]=20;
// console.log(person);

//enum

enum Role { ADMIN , AUTHOR, READ_USER_ONLY}

const person = {
    name:"Aryan",
    age:23,
    skills:["react","DSA","python"],
    product: [10,"macbook-M4"],
    role:Role.AUTHOR
}

if(person.role === Role.AUTHOR){
    console.log("Author");
    
}else if(person.role === Role.ADMIN){
    console.log("Admin");
    
} else if(person.role === Role.READ_USER_ONLY){
    console.log("Read Only User");
    
}
  
