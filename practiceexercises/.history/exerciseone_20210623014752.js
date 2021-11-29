let selector = document.getElementById('text');
let button = document.getElementById('jsstyle');

const js_style = () => {
selector.style.fontFamily = 'Sans-Serif';
selector.style.font= 'Arial';
selector.style.backgroundColor = 'green';
selector.style.color = 'white';
selector.style.size = '40px';
}
button.addEventListener('click', js_style);


let selectortwo = document.getElementById('form1');


const getFormvalue = () => {
   let fname =  selectortwo.getElementByText('fname').value;
   let lname =  selectortwo.getElementByText('lname').value;

    return(fname, lname);
}