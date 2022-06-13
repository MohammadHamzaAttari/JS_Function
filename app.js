//default parameter
function defaultp(name="World"){
    console.log("Hello "+name);
}
defaultp();
defaultp("Hamza");
//important Note
//Default parameter should always come after the regular parameter.
function Hello(message,name="world"){
    console.log(message+name);
} 
Hello("Hi");
Hello("Hye","John");