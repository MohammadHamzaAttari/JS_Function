/*
let greeding=(function(){
    let message="Hello";
    let getmessage=function(){
        return message;
    }

})();
console.log(greeding.getmessage())//undefined error
*/ 
let greeding= (function(){
    let message="message";
    let getmsg=function(){
        return message;
    };
    return{
        getmsg:getmsg//clouser
    }
})();
console.log(greeding.getmsg())