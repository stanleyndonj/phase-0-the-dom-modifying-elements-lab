// Remove the <main> element with id 'main'
const mainElement = document.getElementById('main');
mainElement.remove();

// Create a new <h1> element
const newHeader = document.createElement('h1');

// Assign id 'victory' to the new <h1> element
newHeader.id = 'victory';

// Set the text of the new <h1> element
newHeader.innerHTML = 'YOUR-NAME is the champion'; // Replace YOUR-NAME with your actual name

// Append the new <h1> element to the body or any other desired parent element
document.body.appendChild(newHeader);
