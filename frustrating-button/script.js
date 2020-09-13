// variables
let points = 0;

// button clicked -> give point
document.querySelector("#button").addEventListener("click", e => {
  points++;
  document.querySelector("#points").innerHTML = points;
});

// button hovered -> move
document.querySelector("#button").addEventListener("mouseover", e => {
  let left = Math.floor(Math.random() * 60) + 21;
  let top = Math.floor(Math.random() * 60) + 21;
  document.querySelector("#button").style = `left:${left}%;top:${top}%`
});