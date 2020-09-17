// variables

// functions
// bind $ to document.querySelector
const $ = selector => document.querySelector(selector);
// when command executed
const commandExecuted = e => {
  // store command
  const command = e.target.value;

  // clear input field
  $("#input").value = "";

  // add command to CLI display
  addToCLI(`> ${command}`);
}

// add text to CLI
const addToCLI = text => {
  // set text to current text + newline + argument
  $("#text").textContent = $("#text").textContent + `\n${text}`;
}

// event listeners
// when enter pressed in input and input not blank run function
$("#input").onkeydown = e => {
  if (e.key === "Enter" && e.target.value !== "")
    commandExecuted(e);
}