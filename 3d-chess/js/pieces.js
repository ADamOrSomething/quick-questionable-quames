class Piece {
  constructor(x, y, white) {
    this._x = x;
    this._y = y;
    this._white = white;
    this._moved = false;
  }

  get x() {
    return this._x;
  }

  set x(x) {
    this._x = x;
  }

  get y() {
    return this._y;
  }

  set y(y) {
    this._y = y;
  }

  get white() {
    return this._white;
  }

  get moved() {
    return this._moved;
  }

  set moved(moved) {
    this._moved = moved;
  }
}

class Pawn extends Piece {
  get visual() {
    return 'pawn';
  }
}

class Rook extends Piece {
  projectMoves(board) {
    let moves = [];

    for (let i = this._x + 1; i < 8; i++) {
      if (board.getPiece(i, this._y)) break;
      moves.push([i, this._y]);
    }
    for (let i = this._x - 1; i >= 0; i--) {
      if (board.getPiece(i, this._y)) break;
      moves.push([i, this._y]);
    }
    for (let i = this._y + 1; i < 8; i++) {
      if (board.getPiece(this._x, i)) break;
      moves.push([this._x, i]);
    }
    for (let i = this._y - 1; i >= 0; i--) {
      if (board.getPiece(this._x, i)) break;
      moves.push([this._x, i]);
    }

    return moves;
  }

  get visual() {
    return 'rook';
  }

  verifyMove(x, y) {
    if (this._x === x) return true;
    if (this._y === y) return true;

    return false;
  }
}

class Knight extends Piece {
  projectMoves(board) {
    let moves = [];
    moves.push([this._x + 2, this._y + 1]);
    moves.push([this._x + 2, this._y - 1]);
    moves.push([this._x - 2, this._y + 1]);
    moves.push([this._x - 2, this._y - 1]);
    moves.push([this._x + 1, this._y + 2]);
    moves.push([this._x + 1, this._y - 2]);
    moves.push([this._x - 1, this._y + 2]);
    moves.push([this._x - 1, this._y - 2]);

    moves = moves.filter(e => {
      if ((e[0] < 8 && e[0] >= 0 && e[1] < 8 && e[1] >= 0) &&
        !board.getPiece(e[0], e[1])) return true;
      return false;
    });

    return moves;
  }

  get visual() {
    return 'knight';
  }

  verifyMove(x, y) {
    const distanceX = Math.abs(x - this._x);
    const distanceY = Math.abs(y - this._y);

    if (distanceX + distanceY === 3 && Math.abs(distanceX - distanceY) === 1) return true;

    return false;
  }
}

class Bishop extends Piece {
  projectMoves(board) {
    let moves = [];

    try {
      for (let i = this._x + 1, j = this._y + 1; i < 8; i++, j++) {
        if (board.getPiece(i, j)) break;
        moves.push([i, j]);
      }
      for (let i = this._x + 1, j = this._y - 1; i < 8; i++, j--) {
        if (board.getPiece(i, j)) break;
        moves.push([i, j]);
      }
      for (let i = this._x - 1, j = this._y + 1; i >= 0; i--, j++) {
        if (board.getPiece(i, j)) break;
        moves.push([i, j]);
      }
      for (let i = this._x - 1, j = this._y + 1; i >= 0; i--, j--) {
        if (board.getPiece(i, j)) break;
        moves.push([i, j]);
      }
    } catch { }

    moves = moves.filter(e => {
      if (e[0] < 8 && e[0] >= 0 && e[1] < 8 && e[1] >= 0) return true;
      return false;
    });

    return moves;
  }

  get visual() {
    return 'bishop';
  }

  verifyMove(x, y) {
    const distanceX = Math.abs(x - this._x);
    const distanceY = Math.abs(y - this._y);

    if (distanceX === distanceY) return true;

    return false;
  }
}

class Queen extends Piece {
  projectMoves(board) {
    // just copied the rook and bishop logic lmao
    let moves = [];

    for (let i = this._x + 1; i < 8; i++) {
      if (board.getPiece(i, this._y)) break;
      moves.push([i, this._y]);
    }
    for (let i = this._x - 1; i >= 0; i--) {
      if (board.getPiece(i, this._y)) break;
      moves.push([i, this._y]);
    }
    for (let i = this._y + 1; i < 8; i++) {
      if (board.getPiece(this._x, i)) break;
      moves.push([this._x, i]);
    }
    for (let i = this._y - 1; i >= 0; i--) {
      if (board.getPiece(this._x, i)) break;
      moves.push([this._x, i]);
    }

    try {
      for (let i = this._x + 1, j = this._y + 1; i < 8; i++, j++) {
        if (board.getPiece(i, j)) break;
        moves.push([i, j]);
      }
      for (let i = this._x + 1, j = this._y - 1; i < 8; i++, j--) {
        if (board.getPiece(i, j)) break;
        moves.push([i, j]);
      }
      for (let i = this._x - 1, j = this._y + 1; i >= 0; i--, j++) {
        if (board.getPiece(i, j)) break;
        moves.push([i, j]);
      }
      for (let i = this._x - 1, j = this._y + 1; i >= 0; i--, j--) {
        if (board.getPiece(i, j)) break;
        moves.push([i, j]);
      }
    } catch { }

    moves = moves.filter(e => {
      if (e[0] < 8 && e[0] >= 0 && e[1] < 8 && e[1] >= 0) return true;
      return false;
    });

    return moves;
  }

  get visual() {
    return 'queen';
  }

  verifyMove(x, y) {
    // can move like rook
    if (this._x === x) return true;
    if (this._y === y) return true;

    // or bishop
    const distanceX = Math.abs(x - this._x);
    const distanceY = Math.abs(y - this._y);
    if (distanceX === distanceY) return true;

    return false;
  }
}

class King extends Piece {
  projectMoves(board) {
    let moves = [];

    moves.push([this._x, this._y + 1]);
    moves.push([this._x + 1, this._y + 1]);
    moves.push([this._x + 1, this._y]);
    moves.push([this._x + 1, this._y - 1]);
    moves.push([this._x, this._y - 1]);
    moves.push([this._x - 1, this._y - 1]);
    moves.push([this._x - 1, this._y]);
    moves.push([this._x - 1, this._y + 1]);

    moves.filter(e => {
      if (e[0] < 7 && e[0] >= 0 && e[1] < 7 && e[1] >= 0 &&
        !board.getPiece(e[0], e[1])) return true;
      return false;
    })

    return moves;
  }

  get visual() {
    return 'king';
  }

  verifyMove(x, y) {
    const distanceX = Math.abs(x - this._x);
    const distanceY = Math.abs(y - this._y);

    if (distanceX < 2 && distanceY < 2) return true;

    return false;
  }
}