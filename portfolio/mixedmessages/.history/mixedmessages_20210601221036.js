



const generatemessage = () => {
    var messages = [ 'You should beware of bridges tomorrow', 
    'Today is your lucky day!', 'Be careful rough waters ahead!', 
    `If you put yourself out their more you'll get great results!`, 
    `I see good things in your future!`, 
    `Your hard work will all pay off soon!`];

const firstword = ['Emo', 'Cis', 'Edgy', 'Pop Can','Soda Pop', 'Milk', 'Tiddy',
'Big Thigh', 'Mommy', 'Daddy', 'Transexual', 'Yeti', 'Racist Streamer', 'Frog Lover', 'Blue', 'High Class',
'CamGirl', 'Cat Boy', 'Capitalist Cuck', 'Facist', 'Dream', 'Rainbow Dash', 'Brony', `Mommy's Little`, 'Moronic', 'Lover Boy',
'Dick Pic', 'Crusty Cheese', 'Cheesey', 'BigFoot', 'Broke', 'Dream Crusher', `Ex-Girlfriend's`, 'Little', 'Fat', 'Obese', 'Chad', 
'Stinky', '30 Day Old', 'Smartie', 'Hard Working', 'Owl', 'Bed Head', 'Mall Loafing', 'Gofer'];
const secondword = [];
let result = [];

    var para = document.querySelector("p");
    para.innerHTML =firstword[Math.floor(Math.random()*firstword.length)];
    for (let value of result) {
     para = document.createElement("p");
     para.textContent = value;
     para.appendChild(result);
    }
}




