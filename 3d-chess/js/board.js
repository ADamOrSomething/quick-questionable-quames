class Board {
  constructor() {
    this._pieceMatrix = [];
    this.initializeBoard();
  }

  getPiece(x, y) {
    return this._pieceMatrix[y][x];
  }

  movePiece(piece, x, y) {
    let validMove = true;
    // pawns are annoying fricks that need their own logic
    if (piece instanceof Pawn) {
      if (piece.white) {
        if (piece.y + 1 === y && !this.getPiece(x, y) && piece.x === x) { }
        else if (piece.y + 2 === y && !this.getPiece(x, y) && piece.x === x && !piece.moved) { }
        else if (piece.y + 1 === y && (piece.x + 1 === x || piece.x - 1 === x) && this.getPiece(x, y)) { }
        else {
          validMove = false;
        }
      } else {
        if (piece.y - 1 === y && !this.getPiece(x, y) && piece.x === x) { }
        else if (piece.y - 2 === y && !this.getPiece(x, y) && piece.x === x && !piece.moved) { }
        else if (piece.y - 1 === y && (piece.x + 1 === x || piece.x - 1 === x) && this.getPiece(x, y)) { }
        else {
          validMove = false;
        }
      }
    } else if (!piece.verifyMove(x, y)) {
      validMove = false;
    }
    // don't kill your teammates
    if (this.getPiece(x, y) && piece.white === this.getPiece(x, y).white)
      validMove = false;
    // don't jump over other pieces unless you're a knight
    if (!(piece instanceof Knight)) {
      if (piece.x === x) {
        if (piece.y < y) {
          for (let i = piece.y + 1; i < y; i++) {
            if (this.getPiece(x, i)) validMove = false;
          }
        } else if (piece.y > y) {
          for (let i = piece.y - 1; i > y; i--) {
            if (this.getPiece(x, i)) validMove = false;
          }
        }
      } else if (piece.y === y) {
        if (piece.x < x) {
          for (let i = piece.x + 1; i < x; i++) {
            if (this.getPiece(i, y)) validMove = false;
          }
        } else if (piece.x > x) {
          for (let i = piece.x - 1; i > x; i--) {
            if (this.getPiece(i, y)) validMove = false;
          }
        }
      } else if (Math.abs(piece.x - x) === Math.abs(piece.y - y)) {
        if (piece.x > x && piece.y > y) {
          for (let i = x, j = y; i < piece.x; i++, j++) {
            if (this.getPiece(i, j)) validMove = false;
          }
        } else if (piece.x > x && piece.y < y) {
          for (let i = x, j = y; i < piece.x; i++, j--) {
            if (this.getPiece(i, j)) validMove = false;
          }
        } else if (piece.x < x && piece.y > y) {
          for (let i = x, j = y; i > piece.x; i--, j++) {
            if (this.getPiece(i, j)) validMove = false;
          }
        } else if (piece.x < x && piece.y < y) {
          for (let i = x, j = y; i > piece.x; i--, j--) {
            if (this.getPiece(i, j)) validMove = false;
          }
        }
      }
    }
    if (validMove) {
      this._pieceMatrix[piece.y][piece.x] = null;
      this._pieceMatrix[y][x] = piece;
      piece.x = x;
      piece.y = y;
      // pawns are still annoying fricks
      if (piece instanceof Pawn)
        piece.moved = true;
    }
    return validMove;
  }

  initializeBoard() {
    let row1 = [];
    row1.push(new Rook(0, 0, true));
    row1.push(new Knight(1, 0, true));
    row1.push(new Bishop(2, 0, true));
    row1.push(new King(3, 0, true));
    row1.push(new Queen(4, 0, true));
    row1.push(new Bishop(5, 0, true));
    row1.push(new Knight(6, 0, true));
    row1.push(new Rook(7, 0, true));

    let row2 = [];
    for (let i = 0; i < 8; i++) row2.push(new Pawn(i, 1, true));

    let row3 = [null, null, null, null, null, null, null, null];
    let row4 = [null, null, null, null, null, null, null, null];
    let row5 = [null, null, null, null, null, null, null, null];
    let row6 = [null, null, null, null, null, null, null, null];

    let row7 = [];
    for (let i = 0; i < 8; i++) row7.push(new Pawn(i, 6, false));

    let row8 = [];
    row8.push(new Rook(0, 7, false));
    row8.push(new Knight(1, 7, false));
    row8.push(new Bishop(2, 7, false));
    row8.push(new King(3, 7, false));
    row8.push(new Queen(4, 7, false));
    row8.push(new Bishop(5, 7, false));
    row8.push(new Knight(6, 7, false));
    row8.push(new Rook(7, 7, false));

    this._pieceMatrix.push(row1);
    this._pieceMatrix.push(row2);
    this._pieceMatrix.push(row3);
    this._pieceMatrix.push(row4);
    this._pieceMatrix.push(row5);
    this._pieceMatrix.push(row6);
    this._pieceMatrix.push(row7);
    this._pieceMatrix.push(row8);
  }

  get pieceMatrix() {
    return this._pieceMatrix;
  }
}