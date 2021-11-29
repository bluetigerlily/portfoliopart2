let selector = document.getElementById('text');
let button = document.getElementById('jsstyle');

const js_style = () => {
selector.style.fontFamily = 'Sans-Serif';
selector.style.font= 'Arial';
selector.style.backgroundColor = 'green';
selector.style.color = 'white';
selector.style.size = '40px';
}
button.addEventListener('click', js_style);




const getFormvalue = () => {

    var x=document.getElementById("form1");
    for (var i=0;i<x.length;i++)
    {
     if (x.elements[i].value!='Submit')
      {  
        console.log(x.elements[i].value);
}
    } 
}
