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

 item.innerText = text;
 y.append(item);
 for (int i = 0; i < 2, i++) {
    document.getElementById("todolistlist").innerHTML += '<li>'+text+'</li>';
    }

}