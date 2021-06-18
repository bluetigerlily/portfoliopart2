var input = document.getElementById("display");
input.addEventListener("keyup", function(event) {
    if (event.keyC === 13) {
        event.preventDefault();
        document.getElementById("display").click();
       }
     });
