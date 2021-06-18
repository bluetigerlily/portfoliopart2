//making a memory matching game in javascript

document.addEventListener('DOMContentLoaded', () => {
    //card options

    const cardArray = [
        { 
            name: 'angurius',
            img: 'images/angurius.png'
        },
        { 
            name: 'angurius',
            img: 'images/angurius.png'
        },
        { 
            name: 'babygodzilla',
            img: 'images/babygodzilla.png'
        },
        { 
            name: 'babygodzilla',
            img: 'images/babygodzilla.png'
        },
        { 
            name: 'biollante',
            img: 'images/biollante.png'
        },
        { 
            name: 'biollante',
            img: 'images/biollante.png'
        },
        { 
            name: 'ghidora',
            img: 'images/ghidora.png'
        },
        { 
            name: 'ghidora',
            img: 'images/ghidora.png'
        },
        { 
            name: 'gigan',
            img: 'images/gigan.png'
        },
        { 
            name: 'gigan',
            img: 'images/gigan.png'
        },
        { 
            name: 'godzilla',
            img: 'images/godzilla.png'
        },
        { 
            name: 'godzilla',
            img: 'images/godzilla.png'
        },
        { 
            name: 'kingcaesar',
            img: 'images/kingcaesar.png'
        },
        { 
            name: 'kingcaesar',
            img: 'images/kingcaesar.png'
        },
        { 
            name: 'mechagodzilla',
            img: 'images/mechagodzilla.png'
        },
        { 
            name: 'mechagodzilla',
            img: 'images/mechagodzilla.png'
        },
        { 
            name: 'mothra',
            img: 'images/mothra.png'
        },
        { 
            name: 'mothra',
            img: 'images/mothra.png'
        },
        { 
            name: 'rodan',
            img: 'images/rodan.png'
        },
        { 
            name: 'rodan',
            img: 'images/rodan.png'
        },
        { 
            name: 'spacegodzilla',
            img: 'images/spacegodzilla.png'
        },
        { 
            name: 'spacegodzilla',
            img: 'images/spacegodzilla.png'
        }
    ];


const grid = document.querySelector('.grid');
var cardsChosen = [];
var cardsChosenId = [];
var cardsWon = [];


//creates the game board and stores it in the grid div
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img');
        card.setAttribute('src', 'images/magiccardback.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipcard);
       grid.appendChild(card);
    }
}
//checking for matches function
function checkForMath(){
var cards = document.querySelectorAll('img');
const optionOneId = cardsChosenId[0];
const optionTwoId = cardsChosenId[1];
if (cardsChosen[0] === cardsChosen[1]) {
    alert(' You Found a Math!');
    cards[optionOneId].setAttribute('src', 'images/jeweledlotus.png');
    cards[optionTwoId].setAttribute('src', 'images/jeweledlotus.png');
    cardsWon.push(cardsChosen);

} else {
cards[optionOneId].setAttribute('src', 'images/magiccardback.png');
cards[optionTwoId].setAttribute('src', 'images/magiccardback.png');
alert('Sorry ')
}
}


//flipping the card function
function flipCard() {
    var cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2){
        setTimeout(checkForMath, 500);
    }
}


createBoard();
})