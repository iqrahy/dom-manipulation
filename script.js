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
