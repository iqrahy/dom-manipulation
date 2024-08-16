// 1.
// a. Selects an element by its ID and changes its background color to lightblue.

const getHeading = document.querySelector("#javascript");
getHeading.style.backgroundColor = "lightblue";
console.log(getHeading);

// b. Selects all elements with the class name "highlight" and changes their font size to 20px.

const items = document.querySelectorAll(".highlight");
items.forEach((a) => {
  a.style.fontSize = "20px";
  console.log(a);
});

// 2.
//   a. Creates a new `<div>` element with the text "Hello, World!" and appends it to the body of the document. 

const createdByJS = document.createElement('div');
createdByJS.innerHTML = 'Hello World!';

document.body.appendChild(createdByJS);
console.log(createdByJS);


// b. add a class name "new-div" to the created `<div>` and set its background color to yellow.

let createClass = document.createElement('div');
createClass.innerHTML = 'lorem...'
createClass.className = 'new-div';
createClass.style.backgroundColor = 'yellow';

document.body.appendChild(createClass);
console.log(createClass);


// 3.
// a. Removes an element with a specific ID from the DOM.

const newCreation = document.createElement('h1');
newCreation.innerHTML = 'JS';

document.body.appendChild(newCreation);
console.log(newCreation);

newCreation.remove()