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
      if (this.pieceSelected) {
        this.overlayRender(x, y, 'selected');
        this.pieceSelected.projectMoves().forEach(e => {
          this.overlayRender(e[0], e[1], 'projection');
        });
      }
    } else {
      if (this.board.movePiece(this.pieceSelected, x, y)) {
        this.whiteTurn = !this.whiteTurn;
      }
      this.pieceSelected = null;
      this.render(this.board.pieceMatrix);
    }
  }

  dragStart(x, y) {
    this.pieceSelected = null;
    this.click(x, y);
  }

  dragEnd(x, y) {
    if (this.pieceSelected) this.click(x, y);
  }
}