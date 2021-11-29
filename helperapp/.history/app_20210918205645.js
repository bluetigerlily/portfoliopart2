var outterContainer = document.getElementById('outtercontainer');
var funcOutput = document.getElementById('funcOutput');
var buttonElement = document.getElementById('addBtn');
buttonElement.addEventListener('click', function (event) {
    funcOutput.textContent = 'Element clicked through function!';
  });