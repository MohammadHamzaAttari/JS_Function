/*The way how we call different objects using a function*/ 
let person1={name:"Hamza",age:"25"}
let person2={name:"Qasim",age:"26"}
function sayHi(){
    console.log("Hi");
    console.log(this.name);
}
sayHi.call(person1);
sayHi.call(person2);
// Same thing using function expression
let person3={name:"Hamza",age:"25"}
let person4={name:"Qasim",age:"26"}
let funexp=function (){
    console.log("Hi");
    console.log(this.name);
}
funexp.call(person3);
funexp.call(person4);
// With arguments in call
let Person={name:"Sajid",age:74}
let welcome=function(message){
    console.log(message+", "+this.name);
}
welcome.call(Person,"Hi");//First argument must be object