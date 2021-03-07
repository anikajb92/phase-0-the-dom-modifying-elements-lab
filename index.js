// remove the node main#main
document.querySelector('main#main').remove();

//Create a new element here and assin it to a newHeader
const newHeader = document.createElement("h1");
newHeader.id = ('victory');
newHeader.victory = document.body.appendChild(newHeader);
newHeader.innerHTML = "<h1>Anika is the champion!</h1>";