let selector = document.getElementById('text');
let button = document.getElementById('jsstyle');

const js_style = () => {
selector.style.fontFamily = 'Sans-Serif';
selector.style.font= 'Arial';
selector.style.fontcolor = 'green';
selector.style.size = '40px';
}
button.addEventListener('click', js_style);
