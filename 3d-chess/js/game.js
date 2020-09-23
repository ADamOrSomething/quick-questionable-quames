class Game {
  constructor(render, overlayRender) {
    this.render = render;
    this.overlayRender = overlayRender;
    this.board = new Board();
    this.pieceSelected = null;

    this.render(this.board.pieceMatrix);
  }

  click(x, y) {
    if (!this.pieceSelected) {
      this.pieceSelected = this.board.getPiece(x, y);
      this.overlayRender(x, y, 'selected');
    } else {
      this.board.movePiece(this.pieceSelected, x, y);
      this.render(this.board.pieceMatrix);
      this.pieceSelected = null;
    }
  }
}