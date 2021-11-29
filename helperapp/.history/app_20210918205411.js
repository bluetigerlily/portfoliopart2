var outterContainer = document.getElementById('outtercontainer');
var innerContainer = document.getElementById('innercontainer');

innerContainer.innerHTML =addEventListener('click', function (event) {
    innerContainer.textContent = 'Element clicked through function!';
  });