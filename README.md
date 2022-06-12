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
ALLname(1,2,3,4,5,6)
Allname(10,20)
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
