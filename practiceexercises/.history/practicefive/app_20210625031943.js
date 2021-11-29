const insert_Row = () => {
    let table = getElementById('sampleTable').insertRow(0);
    table.createElement('tr');
}
button.addEventListener('onclick', insert_Row());