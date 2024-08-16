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

document.body.appendChild(createdByJS)
console.log(createdByJS);


