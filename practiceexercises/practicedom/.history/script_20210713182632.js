const body = document.body;
const div = document.querySelector(`div#outtercontainer.container`);

const addItem = () => {
    
    const newItem = document.createElement(`item`);
    newItem.append(div);
    console.log(`new item added`);
}

body.div.addEventListener(`click`, addItem );