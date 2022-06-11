function greeting(){
 let message="hello"; 
}
//console.log(message)//error
// nested functions
function Nestedfun(){
    let message="hello";
    let sayHi=function hi(){
       let message="Hi"
    } 
    sayHi();
    console.log(message) //hello 
   }
Nestedfun()
