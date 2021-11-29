const addtolist = () => {
    var listelement = document.getElementById("todolistlist");
    let item = document.createElement("li");
    var textstuff = document.getElementById("textboxwords").value;
    
   textstuff.innerText = item;
    listelement.append(item);

 for (let i = 0; i < 0; i++) {
    document.getElementById("todolistlist").innerHTML += '<li>'+textstuff+'</li>';
    }
}

const removefromlist = () => {

    var removebtnelement = document.getElementById("removebtn");
    var removeitem = document.getElementById("item");

    removeitem.parentNode.removeChild(removeitem);

    return false;

    

} 
