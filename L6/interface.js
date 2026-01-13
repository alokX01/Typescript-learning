"use strict";
// //interface
class person {
    constructor(n) {
        this.name = n;
    }
    greet(text) {
        console.log(`${text}, ${this.name}`);
    }
}
let user1;
user1 = new person("harsh");
console.log(user1);
