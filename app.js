//Rest parameters
function Rest(...names){
    names.forEach(name=>console.log("Hi "+name));
}
Rest("Hamza","Sajid","Attari");
//Rest parameters with regular arguments
function Restwith(message,...names){
    names.forEach(name=>console.log(message+" "+name));
}
Restwith("Welcome","Hamza","Sajid","Attari");