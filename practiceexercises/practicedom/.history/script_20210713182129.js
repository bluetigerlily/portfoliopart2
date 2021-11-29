const body = document.body;
const div = document.get`div`);

const addItem = () => {
    
    const newItem = document.createElement(`item`);
    newItem.append(div);
    console.log(`new item added`);
}

div.addEventListener(`click`, addItem );