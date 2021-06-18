function addtolist() {
    var x = document.getElementById("removebtn");
    var y = document.getElementById("todolistlist");
    var item = document.createElement("li");
    var text = document.getElementById("textbox").value;
    
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    if (y.style.display === "none") {
        y.style.display = "block";
    } else {
        y.style.display = "none"
    }
 item.innerText = text;
 y.append(item);
 for (i = 0; i < num; i++) {
    document.getElementById("nameOutput").innerHTML += '<li>'+name+'</li>';
    }

}