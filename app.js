// Understanding Function Context
function sayHi(){
   console.log("Hi");
   console.log(this);
}
sayHi();//Hi
        //window object

let greet={};        
greet.sayHi=function(){
            console.log("Hi");
            console.log(this);
         }
greet.sayHi();//Hi
              //greet



//Now look Another way of creating functions in JS
function sayHi(){
    console.log("Hi");
    console.log(this);
 }
let hey= new sayHi();//Hi
                    // empty Object
 //This is also known as constructor function
/* Any time when you call a function with new keyword 
Javascript create an empty object within the function */ 