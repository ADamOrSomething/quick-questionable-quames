// variables
let points = 0;
let timesMoved = 0;
let timeout = 0;

// functions
// increment point then update html element
givePoint = () => {
  points++;
  document.querySelector("#points").textContent = points;
}

// generate random left/top values and apply,
// then increment times moved counter and update dialogue
moveButton = () => {
  let left = Math.floor(Math.random() * 60) + 21;
  let top = Math.floor(Math.random() * 60) + 21;
  document.querySelector("#button").style = `left:${left}%;top:${top}%`

  timesMoved++;
  initiateDialogue();
}

// get dialogue for current number of points, apply
initiateDialogue = () => {
  let dialogue = "";

  if (points > 19) dialogue = "C'mon, I need you to get points!";
  else if (points > 10) dialogue = "Why're you not getting as many points now?";
  else if (points > 4) dialogue = "Keep it going!";
  else if (points > 0) dialogue = "See, there you go! Easy as pie.";

  document.querySelector("#dialogue").textContent = dialogue;
}

// event listeners
// button clicked -> give point, if first point move button
document.querySelector("#button").onclick = () => {
  givePoint();
  if (points > 3) { clearTimeout(timeout); moveButton(); }
}

// button hovered -> move depending on how far into game
document.querySelector("#button").onmouseover = () => {
  if (points > 25) moveButton();
  else if (points === 20) setInterval(moveButton, 500);
  else if (points > 10) timeout = setTimeout(moveButton, 200);
}