const render = (x, y, red) => {
  $(`.row:nth-child(${y + 1}) .square:nth-child(${x + 1})`).attr('class', `square ${red === null ? '' : red ? 'red' : 'white'}`);
}

const game = new Game(render);