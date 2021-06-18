var textareavalues = document.getElementById("display");

     

    function input() {
        input.addEventListener("keyup", function(event) {
            if (event.keycode === 13) {
                event.preventDefault();
                document.getElementById("submitbtn").onkeydown();
               }
             });
             input.addEventListener("keyup", function(event) {
                if (event.keycode === 49) {
                    event.preventDefault();
                    document.getElementById("one").onkeydown();     
                }
            });
    }
