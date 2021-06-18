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


//flipping the card function
function flipCard() {
    var cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId
}


createBoard();
})