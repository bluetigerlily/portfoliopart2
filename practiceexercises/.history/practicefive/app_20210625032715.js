
const insert_Row = () => {
    var x =document.getElementById('sampleTable').insertRow(0);
    var y = x.insertRow(0);
    var z = x.insertRow(1);
y.innerHTML = 'New Cell1';
z.innerHTML = 'New Cell2';
}
