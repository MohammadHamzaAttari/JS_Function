# JS_Function
### In this course
- Finctions and scope. 
- Arrow Functions.
- Call, Apply and Bind methods.
- Rest parameters.<br>
<b>After this course, you not only learn how to write your own functions but also call and leverage the existing functions.</b>
### Module 1:
- Function
- Arguments
- Function and Block Scope
- Immediately Invoked Function Expression (IIFE)
- Clousers<br>
<b> Lets get started</b><br>
##### Function:
Function is a block of code that returns a value. In Js, we define a function with function keyword and its value.
##### Arguments:
<b>The difference between arguments and parameters.</b>
###### Argument:
An arrgument is a value that we pass to a function when we invoked it.
###### Parameter:
A parameter is a variable that we list as a art of function defination.
##### Arguments objects:
We can pass list of arguments as a arameter to a function For example.
<br>function Allname(){
<br>for(int i=0;i<argumets.length;i++)
<br>
{
<br>
consle.log(arguments[i])
<br>
}
<br>
}
<br>
ALLname(1,2,3,4,5,6)<br>
Allname(10,20)<br>
### Block Scope:
<b><b>Variables declare with the var keyword and within the function declaration do not have the block scope.</b></b>
### Immediately Invoked Function Expression:
###### Function Expression:
Declaring a function and assign it to a variable.
###### Immediately Invoked:
Invoking the function right away where it is defined.
#### Example IIFE:
(fuction(){<br>
console.log("Message")<br>
})();
#### Clouser:
When we want to use the variable out if its scope then we use the concept of clouser.
## Module 2:
### Overview:
In this module, we will cover,
- Arrow function pros and cons.
- How to define an arrow function.
- use of this keyword.
#### Arrow Function:
Arrow function behave similar to regular function. It was introduced in ES6 in 2015. Arrow function in JS similar to 
Lambda function in Python.
<b> Why we use Arrow function
</b><br>
- shortest syntax
- easier to understand how vaiables are scoped within them.
- this derives its value from closing lexical scope.
##### Side effects:
- Understand the behaviour of this keyword.
- No implicit arguments objects.
### Difference btw Arrow Function And Regular Function:
###### Example of regular Function:
let greeding=function(){<br>
    return "Hello";<br>
}<br>
let message=greeding();<br>
console.log("This is hello mesaage "+message);<br>
###### Examle with arrow function
let greet=()=>"Hello";<br>
let msg=greet()<br>
console.log("This is the greeding message with Arrow function " + msg)<br>
//Example with arguments<br>
let hamza=function greetings(name){<br>
      return "Hello "+ name<br>
}<br>
let hafiz=hamza("Hamza");<br>
console.log(hafiz);<br>
###### Examle with arrow function
let attari=Name=>"Hello "+Name<br>
let pokar=attari("Hafiz");<br>
console.log(pokar);<br>
### Behavoir of this::
In regular Functions, this keyword refer to the object that invoked this. On the other hand,  
Arow function do not have the this keyword,  if we invoked it inside arrow function, it always refer to the
global object(window object).
## Module 3:
In this module we will learn<br>
- Understanding Function Context
- Call, Apply
- Bind
- Built-in Functions like <b>eval, parseInt, parseFloat,escape</b>
#### Understanding Function Context:
<b>lets see examples</b><br>
- Understanding Function Context<br>
function sayHi(){<br>
   console.log("Hi");<br>
   console.log(this);<br>
}<br>
sayHi();//Hi<br>
        //window object<br>
- Creating an empty object and add a property to it<br>
let greet={};        <br>
greet.sayHi=function(){<br>
            console.log("Hi");<br>
            console.log(this);<br>
         }<br>
greet.sayHi();//Hi<br>
              //greet<br>
- Now look Another way of creating functions in JS<br>
function sayHi(){<br>
    console.log("Hi");<br>
    console.log(this);<br>
 }<br>
let hey= new sayHi();//Hi<br>
                    // empty Object<br>
 //This is also known as constructor function<br>
/* Any time when you call a function with new keyword <br>
Javascript create an empty object within the function */ <br>
## Function Methods:
### Call Method:
- The way how we call different objects using a function 
let person1={name:"Hamza",age:"25"}<br>
let person2={name:"Qasim",age:"26"}<br>
function sayHi(){<br>
    console.log("Hi");<br>
    console.log(this.name);<br>
}<br>
sayHi.call(person1);<br>
sayHi.call(person2);<br>
- Same thing using function expression
let person3={name:"Hamza",age:"25"}<br>
let person4={name:"Qasim",age:"26"}<br>
let funexp=function (){<br>
    console.log("Hi");<br>
    console.log(this.name);<br>
}<br>
funexp.call(person3);<br>
funexp.call(person4);<br>
- With arguments in call
let Person={name:"Sajid",age:74}<br>
let welcome=function(message){<br>
    console.log(message+", "+this.name);<br>
}<br>
welcome.call(Person,"Hi");//First argument must be object<br>
#### Apply Method:
Apply method identical to the call method but the difference is that apply method accepts only<br>
array of arguments but the call method accept the list of arguments.<br>
- Difference between Apply and call<br>
function introduction(name,profession){<br>
    console.log("I am "+name+" and my Profession is "+profession);<br>
    console.log(this);<br>
}<br>
introduction("hamza","Freelance");<br>
introduction.apply(undefined,["hamza","Teaching"]);<br>
introduction.call(undefined,"Sajid","Designer");<br>
#### Bind Method:
We can change the context of context of a function using bind method.<br>
****Bind method****<br>
person1={<br>
    name:"Hamza",<br>
    getName:function(){<br>
        return this.name;<br>
    }<br>
};<br>
person2={name:"sajid"};<br>
let person1Copy=person1.getName.bind(person2);<br>
console.log(person1Copy());<br>
## Module 3:
In this module, we are discussing about 
- Default paramters
- Constructing Rest parameters
- Using the spread operator
###### Default Parameter:
- default parameter
function defaultp(name="World"){<br>
    console.log("Hello "+name);<br>
}<br>
defaultp();<br>
defaultp("Hamza");<br>
- important Note
- ****Default parameter should always come after the regular parameter.****
function Hello(message,name="world"){<br>
    console.log(message+name);<br>
} <br>
Hello("Hi");<br>
Hello("Hye","John");<br>
