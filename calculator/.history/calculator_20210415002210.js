var input = document.getElementById("display");

     input.addEventListener("keyup", function(event) {
        if (event.keycode === 49) {
            event.preventDefault();
            document.getElementById("one").onkeydown();     
        }
    });

    function input() {
        input.addEventListener("keyup", function(event) {
            if (event.keycode === 13) {
                event.preventDefault();
                document.getElementById("submitbtn").onkeydown();
               }
             });
    }
