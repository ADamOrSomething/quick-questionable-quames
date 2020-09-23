class Piece {
  constructor(x, y, white) {
    this._x = x;
    this._y = y;
    this._white = white;
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
}

class Pawn extends Piece {
  get visual() {
    return 'pawn';
  }

  verifyMove(x, y) {

  }
}

class Rook extends Piece {
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