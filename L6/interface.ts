// //interface
 
// interface person{
//     name : string;
//     age:number;
//     greet(text:string):void
// }

// let user : person;
// user = {
//     name: "Alok",
//     age:21,
//     greet(text) : void{
//         console.log(`${text} ${this.name}`);
        
//     },
    
// }
// console.log(user);
// user.greet("hii i am fullStack devloper so i can u hire me i am looking for it,")

///interface to class =>implements

// interface greetable{
//     name:string;
//     greet(text:string):void;

// }

// class person implements greetable{
//     name: string;
//     constructor(n:string){
//         this.name=n;

//     }
//     greet(text: string): void {
//         console.log(`${text},${this.name}`);
        
//     }
// }

// const p1  = new person("Aman");

// p1.greet("hii job milega kya...")

//Enextends interface

interface named{
    readonly  name:string;

}
 interface greetable extends named{
    greet(text:string):void
 }

 class person implements greetable{
    name: string;
    constructor(n:string){
        this.name=n;
    }
    greet(text: string): void {
        console.log(`${text}, ${this.name}`);

        
    }
 }
let user1 : greetable;
user1 =new person("harsh");
console.log(user1);
