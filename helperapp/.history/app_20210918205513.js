var outterContainer = document.getElementById('outtercontainer');
var innerContainer = document.getElementById('innercontainer');
var buttonElement = document.getElementById('addBtn')
buttonElement.addEventListener('click', function (event) {
    innerContainer.textContent = 'Element clicked through function!';
  });