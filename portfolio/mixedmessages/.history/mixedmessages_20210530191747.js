



const mixedmessages = () => {
    var messages = [ 'You should beware of bridges tomorrow', 
    'Today is your lucky day!', 'Be careful rough waters ahead!', 
    `If you put yourself out their more you'll get great results!`, 
    `I see good things in your future!`, 
    `Your hard work will all pay off soon!`];
    var ul = documenet.querySelector("ul");


let result;
const min = Math.ceil(0);
const max = Math.floor(messages.length);
let randomval = Math.floor(Math.random() * (max - min+1 ) + min);

if (randomval == 0) {
    result.push(messages[0]);
} else if (randomval == 1){
    result.push(messages[1]);
} else if (randomval == 2) {
    result.push(messages[3]) {
        
    }
}




}