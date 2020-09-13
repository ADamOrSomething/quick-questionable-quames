// variables
let points = 0;

// button clicked -> give point
document.querySelector("#button").addEventListener("click", e => {
  points++;
  document.querySelector("#points").innerHTML = points;
});