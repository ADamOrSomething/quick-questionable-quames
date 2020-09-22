const board = new Board();

const matrix = board.pieceMatrix;

matrix.forEach((e, i) => {
  e.forEach((ele, index) => {
    $(`.game-row:nth-child(${8 - i}) .square:nth-child(${index + 1})`).attr('class', `square ${(ele.white ? 'white' : 'black') + '-' + ele.visual}`);
  });
});