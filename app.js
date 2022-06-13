//Spread operator
function greet(person1,person2){
    console.log("Welcome to "+person1+" Hi to  "+person2)
}
let men=["Shahzaib","Jahazaib"]
greet(...men)
// Passing string
function display(para1,para2,para3,para4){
    console.log(para1+para2+para3+para4);
}
let str="abcd";
display(...str);