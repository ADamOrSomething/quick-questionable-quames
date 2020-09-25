const render = (x, y, piece) => {
  $(`.row:nth-child(${y + 1}) .square:nth-child(${x + 1})`).attr('class', `square ${piece === null ? '' : piece.red ? 'red' : 'white'}`);
}

const game = new Game(render);