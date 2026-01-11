"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["AUTHOR"] = 1] = "AUTHOR";
    Role[Role["READ_USER_ONLY"] = 2] = "READ_USER_ONLY";
})(Role || (Role = {}));
var person = {
    name: "Aryan",
    age: 23,
    skills: ["react", "DSA", "python"],
    product: [10, "macbook-M4"],
    role: Role.AUTHOR
};
if (person.role === Role.AUTHOR) {
    console.log("Author");
}
else if (person.role === Role.ADMIN) {
    console.log("Admin");
}
else if (person.role === Role.READ_USER_ONLY) {
    console.log("Read Only User");
}
