//Arrow function is  similar t the regular function with concise expression.
//Examle of regular function
let greeding=function(){
    return "Hello";
}
let message=greeding();
console.log("This is hello mesaage "+message);
//Examle with arrow function
let greet=()=>"Hello";
let msg=greet()
console.log("This is the greeding message with Arrow function " + msg)
//Example with arguments
let hamza=function greetings(name){
      return "Hello "+ name
}
let hafiz=hamza("Hamza");
console.log(hafiz);
//Examle with arrow function
let attari=Name=>"Hello "+Name
let pokar=attari("Hafiz");
console.log(pokar);