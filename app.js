//Another example of Clouser
function peer(val){
    return function(){
        return val++;
    }
}
let peer1=peer(10);
console.log("First value of Peer1 is "+peer1());
console.log("Second value of Peer1 is "+peer1());
let peer2=peer(20);
console.log("First value of Peer2 is "+peer2());
console.log("Second value of Peer2 is "+peer2());