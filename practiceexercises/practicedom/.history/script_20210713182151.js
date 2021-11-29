const body = document.body;
const div = document.querySelector(`outtercontainer`);

const addItem = () => {
    
    const newItem = document.createElement(`item`);
    newItem.append(div);
    console.log(`new item added`);
}

div.addEventListener(`click`, addItem );