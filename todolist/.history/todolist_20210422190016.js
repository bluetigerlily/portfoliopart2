function addtolist() {
    var x = document.getElementById("removebtn");
    var y = document.getElementById("todolistlist");
    let item = document.createElement("li");
    let text = document.getElementById("textbox").value;
    item.innerText = text;
    y.append(item);

 for (let i = 0; i < 0; i++) {
    document.getElementById("todolistlist").innerHTML += '<li>'+text+'</li>';
    }

}