//Apply method
person1={
    name:"Hamza",
    getName:function(){
        return this.name;
    }
};
person2={name:"sajid"};
let person1Copy=person1.getName.bind(person2);
console.log(person1Copy());
