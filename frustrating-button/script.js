// variables
let points = 0;

// functions
givePoint = () => {
  points++;
  document.querySelector("#points").textContent = points;
}

moveButton = () => {
  let left = Math.floor(Math.random() * 60) + 21;
  let top = Math.floor(Math.random() * 60) + 21;
  document.querySelector("#button").style = `left:${left}%;top:${top}%`
}

// event listeners
// button clicked -> give point, if first point move button
document.querySelector("#button").onclick = () => { givePoint(); if (points === 1) moveButton(); };

// button hovered -> move only if already have point
document.querySelector("#button").onmouseover = () => { if (points > 0) moveButton(); }