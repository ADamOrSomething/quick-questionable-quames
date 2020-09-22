const board = new Board();

const matrix = board.pieceMatrix;

const render = () => matrix.forEach((e, i) => {
  e.forEach((ele, index) => {
    // lmao this is some ugly code
    $(`.game-row:nth-child(${8 - i}) .square:nth-child(${index + 1})`).attr('class', `square ${(ele.white ? 'white' : 'black') + '-' + ele.visual}`);
  });
});

$('.game-wrapper').click(e => {
  // if you have no idea why this variable is named xmc my friend suggested it
  const xmc = Math.floor((e.clientX - $('.game-wrapper').offset().left) / $('.square').width());
  // if you have no idea why this variable is named sprite my other friend suggested it
  const sprite = 7 - Math.floor((e.clientY - $('.game-wrapper').offset().top) / $('.square').width());
});

render();