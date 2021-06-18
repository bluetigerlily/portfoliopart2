var textareavalues = document.getElementById("display");

     

    function input() {
        textareavalues.addEventListener("keyup", function(event) {
            if (event.keycode === 13) {
                event.preventDefault();
                document.getElementById("submitbtn").onkeydown();
               }
             });
             textareavalues.addEventListener("keyup", function(event) {
                if (event.keycode === 49) {
                    event.preventDefault();
                    document.getElementById("one").onkeydown();     
                }
            });
            textareavalues.addEventListener("keyup", function(event) {
                if (event.keycode === 50) {
                    event.preventDefault();
                    document.getElementById("two").onkeydown();     
                }
            });
            textareavalues.addEventListener("keyup", function(event) {
                if (event.keycode === 49) {
                    event.preventDefault();
                    document.getElementById("one").onkeydown();     
                }
            });
    }

    function submit() {

    }
