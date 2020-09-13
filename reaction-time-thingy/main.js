// points
let points = 0

// when background has changed
let active = false;

// function for when button click
function clicked() {
  if (active)
    points++
  else
    points--
  updatePoints();
}

// update points html
function updatePoints() {
  document.querySelector('#points').innerHTML = points;
}

// game function thingy
function playGame() {
  // set random timeout to update background
  setTimeout(updateBackground, Math.random() * 5000);
}

// change background
function updateBackground() {
  // log
  console.log('updating');
  
  if (!active) {
    // update HTML and variable
    document.querySelector('body').classList.add('active');
    active = true;
    
    // call function again in random time to remove active-ness
    setTimeout(updateBackground, Math.random() * 500);    
  } else {
    // undo active-ness
    document.querySelector('body').classList.remove('active');
    active = false;
    
    // call function to reset cycle
    playGame();
  }
}

playGame();