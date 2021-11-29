const body = document.body;

//const div = document.createElement('div');
const div = document.querySelector(`div`);
//div.innerText = `Hello World`;
div.textContent = `Hello World 2`;


body.append(div);