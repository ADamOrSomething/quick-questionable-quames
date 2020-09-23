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
  projectMoves() {
    let moves = [];
    for (let i = this._x + 1; i < 8; i++) {
      moves.push([i, this._y]);
    }
    for (let i = this._x - 1; i > 0; i--) {
      moves.push([i, this._y]);
    }
    for (let i = this._y + 1; i < 8; i++) {
      moves.push([this._x, i]);
    }
    for (let i = this._y - 1; i > 0; i--) {
      moves.push([this._x, i]);
    }

    console.log(moves);
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
  projectMoves() {
    const moves = [];
    moves.push([this._x + 2, this._y + 1]);
    moves.push([this._x + 2, this._y - 1]);
    moves.push([this._x - 2, this._y + 1]);
    moves.push([this._x - 2, this._y - 1]);
    moves.push([this._y + 2, this._x + 1]);
    moves.push([this._y + 2, this._x - 1]);
    moves.push([this._y - 2, this._x + 1]);
    moves.push([this._y - 2, this._x - 1]);
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