let table = getElementById('sampleTable').insertRow(0);

const insert_Row = () => {
    table.createElement('tr');
}
table.addEventListener('onclick', insert_Row);