//clears the console
console.clear();

//we set up this variable as the "tree" that we are appending or removing "leaves" from
var rootElem = document.getElementById("root");

//create a p element called yachtsElem and filled with text content and styled according to the "para" class
var yachtsElem = document.createElement("p");
yachtsElem.className = "para";
yachtsElem.textContent = "Yachts are cool";

//create a p element called noYachtsElem and filled with text content and styled according to the "para2" class
var noYachtsElem = document.createElement("p");
noYachtsElem.className = "para2";
noYachtsElem.textContent = "Yachts are NOT cool, bruh"

//create a flex container called flexElem with a class of "flexContainer"
var flexElem = document.createElement("div");
flexElem.className = "flexContainer";


//initially append yachtsElem to the flexElem, and then flexElem to the rootElem. You have to go from small to large when appending.
flexElem.appendChild(yachtsElem);
rootElem.appendChild(flexElem);

//add an event listener that removes yachtsElem and adds noYachtsElem, when clicked
yachtsElem.addEventListener("click", function(){
  flexElem.removeChild(yachtsElem);
  flexElem.appendChild(noYachtsElem);
})


//we begin by appending the yachtsElem leaf to the rootElem tree
// rootElem.appendChild(yachtsElem);