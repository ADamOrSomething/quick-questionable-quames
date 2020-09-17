help = () => {
  return `
  look: look
  `
}

look = () => {
  
}

const executeCommand = command => {
  try {
    return window[command]().trim();
  } catch (e) {
    return false;
  }
}