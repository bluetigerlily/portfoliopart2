var outterContainer = document.getElementById('outtercontainer');
var innerContainer = document.getElementById('innercontainer');

buttonElement.addEventListener('click', function (event) {
    innerContainer.textContent = 'Element clicked through function!';
  });