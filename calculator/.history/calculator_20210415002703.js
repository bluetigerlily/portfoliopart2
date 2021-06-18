var input = document.getElementById("display");

     

    function input() {
        input.addEventListener("keyup", function(event) {
            if (event.keycode === 13) {
                event.preventDefault();
                document.getElementById("submitbtn").onkeydown();
               }
             });

    }
