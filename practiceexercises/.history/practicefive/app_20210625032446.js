var table=document.getElementById('sampleTable');

let button = getElementById("button")
const insert_Row = () => {
var x = table.insertRow(0);
var y = table.insertRow(1);

}
table.addEventListener('onclick', insert_Row);