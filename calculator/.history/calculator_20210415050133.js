var textareavalues = document.getElementById("display");

     

    function input() {
        textareavalues.addEventListener("onkeydown", function(event) {
            if (event.keycode === 13) {
                event.preventDefault();
                document.getElementById("onkeydown").onkeydown();
               }
             });
             textareavalues.addEventListener("onkeydown", function(event) {
                if (event.keycode === 49) {
                    event.preventDefault();
                    document.getElementById("one").onkeydown();     
                }
            });
            textareavalues.addEventListener("onkeydown", function(event) {
                if (event.keycode === 50) {
                    event.preventDefault();
                    document.getElementById("two").onkeydown();     
                }
            });
            textareavalues.addEventListener("onkeydown", function(event) {
                if (event.keycode === 51) {
                    event.preventDefault();
                    document.getElementById("three").onkeydown();     
                }
            });
            textareavalues.addEventListener("onkeydown", function(event) {
                if (event.keycode === 49) {
                    event.preventDefault();
                    document.getElementById("four").onkeydown();     
                }
            });
            textareavalues.addEventListener("onkeydown", function(event) {
                if (event.keycode === 49) {
                    event.preventDefault();
                    document.getElementById("five").onkeydown();     
                }
            });
            textareavalues.addEventListener("onkeydown", function(event) {
                if (event.keycode === 49) {
                    event.preventDefault();
                    document.getElementById("six").onkeydown();     
                }
            });
            textareavalues.addEventListener("keyup", function(event) {
                if (event.keycode === 49) {
                    event.preventDefault();
                    document.getElementById("seven").onkeydown();     
                }
            });
            textareavalues.addEventListener("keyup", function(event) {
                if (event.keycode === 49) {
                    event.preventDefault();
                    document.getElementById("eight").onkeydown();     
                }
            });
            textareavalues.addEventListener("keyup", function(event) {
                if (event.keycode === 49) {
                    event.preventDefault();
                    document.getElementById("nine").onkeydown();     
                }
            });
            textareavalues.addEventListener("keyup", function(event) {
                if (event.keycode === 49) {
                    event.preventDefault();
                    document.getElementById("zero").onkeydown();     
                }
            });
            textareavalues.addEventListener("keyup", function(event) {
                if (event.keycode === 49) {
                    event.preventDefault();
                    document.getElementById("minus").onkeydown();     
                }
            });
            textareavalues.addEventListener("keyup", function(event) {
                if (event.keycode === 49) {
                    event.preventDefault();
                    document.getElementById("plus").onkeydown();     
                }
            });
            textareavalues.addEventListener("keyup", function(event) {
                if (event.keycode === 49) {
                    event.preventDefault();
                    document.getElementById("times").onkeydown();     
                }
            });
            textareavalues.addEventListener("keyup", function(event) {
                if (event.keycode === 49) {
                    event.preventDefault();
                    document.getElementById("division").onkeydown();     
                }
            });
            textareavalues.addEventListener("keyup", function(event) {
                if (event.keycode === 49) {
                    event.preventDefault();
                    document.getElementById("equalsign").onkeydown();     
                }
            });
            textareavalues.addEventListener("keyup", function(event) {
                if (event.keycode === 49) {
                    event.preventDefault();
                    document.getElementById("clear").onkeydown();     
                }
            });
    }

    function submit() {

    }
