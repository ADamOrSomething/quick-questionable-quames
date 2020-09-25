class Game {
  constructor(render) {
    this.render = render;
    this.board = [];

    this.initializeBoard();
    this.renderBoard();
  }

  renderBoard() {
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        this.render(j, i, this.board[i][j]);
      }
    }
  }

  initializeBoard() {
    let row0 = [];
    let row1 = [];
    let row2 = [];
    let row3 = [];
    let row4 = [];
    let row5 = [];
    let row6 = [];
    let row7 = [];

    row0.push(new Piece(true));
    row0.push(null);
    row0.push(new Piece(true));
    row0.push(null);
    row0.push(new Piece(true));
    row0.push(null);
    row0.push(new Piece(true));
    row0.push(null);

    row1.push(null);
    row1.push(new Piece(true));
    row1.push(null);
    row1.push(new Piece(true));
    row1.push(null);
    row1.push(new Piece(true));
    row1.push(null);
    row1.push(new Piece(true));

    row2.push(new Piece(true));
    row2.push(null);
    row2.push(new Piece(true));
    row2.push(null);
    row2.push(new Piece(true));
    row2.push(null);
    row2.push(new Piece(true));
    row2.push(null);

    for (let i = 0; i < 8; i++) {
      row3.push(null);
      row4.push(null);
    }

    row5.push(null);
    row5.push(new Piece(false));
    row5.push(null);
    row5.push(new Piece(false));
    row5.push(null);
    row5.push(new Piece(false));
    row5.push(null);
    row5.push(new Piece(false));

    row6.push(new Piece(false));
    row6.push(null);
    row6.push(new Piece(false));
    row6.push(null);
    row6.push(new Piece(false));
    row6.push(null);
    row6.push(new Piece(false));
    row6.push(null);

    row7.push(null);
    row7.push(new Piece(false));
    row7.push(null);
    row7.push(new Piece(false));
    row7.push(null);
    row7.push(new Piece(false));
    row7.push(null);
    row7.push(new Piece(false));

    this.board.push(row0);
    this.board.push(row1);
    this.board.push(row2);
    this.board.push(row3);
    this.board.push(row4);
    this.board.push(row5);
    this.board.push(row6);
    this.board.push(row7);
  }
}