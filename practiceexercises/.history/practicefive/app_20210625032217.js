let table = getElementById("sampleTable");
let button = getElementById("button")
const insert_Row = () => {
    table.createElement('tr');
}
table.addEventListener('onclick', insert_Row);