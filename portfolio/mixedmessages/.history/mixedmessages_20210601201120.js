



const generatemessage = () => {
    var messages = [ 'You should beware of bridges tomorrow', 
    'Today is your lucky day!', 'Be careful rough waters ahead!', 
    `If you put yourself out their more you'll get great results!`, 
    `I see good things in your future!`, 
    `Your hard work will all pay off soon!`];

const firstword = ['Emo', 'Cis', 'Edgy'. 'Pop Can', 'Soda Pop', 'Milk', 'Tiddy',
'Big Thigh0', 'Mommy', 'Daddy', 'Transexual', 'Yeti', 'Racist Streamer', 'Frog Lover'. 'Blue', 'High Class',
'CamGirl', 'Cat Boy', 'Capitalist Cuck', 'Facist'];
const seconword = [];
let result = [];
const min = Math.ceil(0);
const max = Math.floor(messages.length);
let randomval = Math.floor(Math.random() * (max - min+1 ) + min);

if (randomval == 0) {
    result.push(messages[0]);
} else if (randomval == 1){
    result.push(messages[1]);
} else if (randomval == 2) {
    result.push(messages[2]);
} else if (randomval == 3) {
    result.push(messages[3]);
    }else if (randomval == 4) {
     result.push(messages[4]);   
    } else if (randomval == 5) {
     result.push(messages[5]);   
    }

    var ul = document.querySelector("ul");
    for (let value of result) {
     ul = document.createElement("li");
     ul.textContent = value;
     ul.appendChild(result);
    }
}




