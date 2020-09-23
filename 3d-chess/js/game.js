class Game {
  constructor(render, overlayRender) {
    this.render = render;
    this.overlayRender = overlayRender;
    this.board = new Board();
    this.pieceSelected = null;
    this.whiteTurn = true;

    this.render(this.board.pieceMatrix);
  }

  click(x, y) {
    if (!this.pieceSelected) {
      this.pieceSelected = this.board.getPiece(x, y);
      if (this.pieceSelected) {
        if (!(this.whiteTurn === this.pieceSelected.white)) this.pieceSelected = null;
      }
      if (this.pieceSelected) this.overlayRender(x, y, 'selected');
    } else {
      if (this.board.movePiece(this.pieceSelected, x, y)) {
        this.whiteTurn = !this.whiteTurn;
        this.render(this.board.pieceMatrix);
        this.pieceSelected = null;
      }
    }
  }
}