// Working with Event Listeners

// Create DIV element

var div = document.createElement("DIV");

// Add height to the element

div.style.height = "100vh";

// Append the element to the DOM

document.body.appendChild(div);

// Add Event Listener

div.addEventListener("mousemove", function(event) {
	var x = event.clientX;
	var y = event.clientY;
	div.textContent = x + "," + y;
	div.style.backgroundColor = "rgb(" + x + ", " + y + ", 100)";
})