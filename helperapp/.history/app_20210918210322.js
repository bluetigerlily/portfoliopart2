const buttonElement = document.getElementById('btn');
const funcOutput = document.getElementById('funcOutput');
const handleEvtOutput = document.getElementById('handleEvtOutput');

  buttonElement.addEventListener('click', function (event) {
    funcOutput.textContent = 'Element clicked through function!';
  });  
  buttonElement.addEventListener('click', {
    handleEvent: function (event) {
      handleEvtOutput.textContent = 'Element clicked through handleEvent property!';
    }
  });