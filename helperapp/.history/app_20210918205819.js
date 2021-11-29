var outterContainer = document.getElementById('outtercontainer');
var funcOutput = document.getElementById('funcOutput');
const buttonElement = document.getElementById('btn');


  buttonElement.addEventListener('click', function (event) {
    funcOutput.textContent = 'Element clicked through function!';
  });  