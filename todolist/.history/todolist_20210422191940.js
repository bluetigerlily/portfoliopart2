function addtolist() {
    var x = document.getElementById("removebtn");
    var y = document.getElementById("todolistlist");
    let item = document.createElement("li");
    let textstuff = document.getElementById("textbox").value;
    
   textstuff.innerText = item;
    y.append(item);

 for (let i = 0; i < 0; i++) {
    document.getElementById("todolistlist").innerHTML += '<li>'+textstuff.innerText+'</li>';
    }

}
