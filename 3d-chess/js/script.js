const render = matrix => matrix.forEach((e, i) => {
  e.forEach((ele, index) => {
    if (ele) {
      // lmao this is some ugly code
      $(`.game-row:nth-child(${8 - i}) .square:nth-child(${index + 1})`).attr('class', `square ${(ele.white ? 'white' : 'black') + '-' + ele.visual}`);
    } else {
      $(`.game-row:nth-child(${8 - i}) .square:nth-child(${index + 1})`).attr('class', 'square');
    }
  });
});

const overlayRender = (x, y, style) => {
  $(`.game-row:nth-child(${8 - y}) .square:nth-child(${x + 1})`).addClass(style);
}

const game = new Game(render, overlayRender);

$('.game-wrapper').click(e => {
  // if you have no idea why this variable is named xmc I let my friend name it
  const xmc = Math.floor((e.pageX - $('.game-wrapper').offset().left) / $('.square').width());
  // if you have no idea why this variable is named sprite I let my other friend name it
  const sprite = 7 - Math.floor((e.pageY - $('.game-wrapper').offset().top) / $('.square').width());

  game.click(xmc, sprite);
});