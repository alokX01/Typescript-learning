// type person = {
//    name : String;
//    age: number;

// }

// const Boy : person ={
//     name: "Alok",
//     age:21,
// }

// const fruits : Array<person> = [{name :"vivek", age:23}]
// console.log(fruits);


//eg2

// function merge<T,U>(objA : T, objB : U){
//     return {...objA, ...objB};
// }
// const res = merge({name:"alok"},{role:"swe"})
// console.log(res);

//genric constraint 

// function createObject<T extends string, U extends number, V extends boolean>(
//     key:T,
//     value:U,
//     isActive:V

// ):{
//     key:T,value: U, isActive:V
// }{
//     return {key,value,isActive}

// }

// const obj = createObject("age",25,true)


//genric interface

// interface Box<T>{

//     value:T
// }
// const numberBox : Box<number> = {
//     value:200
// }
// console.log(numberBox);

//genric default

// interface   User<T = string>{
//     data  : T,
//     status : number
// }
// const response : User={data:"success", status:200}//default to string
// const jsonRes : User<object>={
//     data:{key:"value"},
//     status:200
// }
// console.log(response);
// console.log(jsonRes);


//genric with array

// function getFrist<T>(arr : T[]) : T{
//     return arr[0];
// }
// const fristNumber = getFrist([1,2,3,4,5]);
// const fristString = getFrist(["mango", "apple","orange"]);
// console.log(fristNumber);
// console.log(fristString);


//genric with key
const person = {name : "Mern stack"}
console.log(person["name"]);

function getProperty(obj : object, key:string){
    return obj[key];
}