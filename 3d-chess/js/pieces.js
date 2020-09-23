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

  verifyMove(oldX, oldY, newX, newY) {

  }
}

class Rook extends Piece {
  get visual() {
    return 'rook';
  }
  
  verifyMove(oldX, oldY, newX, newY) {
    if (oldX === newX) return true;
    if (oldY === newY) return true;

    return false;
  }
}

class Knight extends Piece {
  get visual() {
    return 'knight';
  }
  
  verifyMove(oldX, oldY, newX, newY) {
    const distanceX = Math.abs(newX - oldX);
    const distanceY = Math.abs(newY - oldY);

    if (distanceX + distanceY === 3 && Math.abs(distanceX - distanceY) === 1) return true;

    return false;
  }
}

class Bishop extends Piece {
  get visual() {
    return 'bishop';
  }
  
  verifyMove(oldX, oldY, newX, newY) {
    const distanceX = Math.abs(newX - oldX);
    const distanceY = Math.abs(newY - oldY);

    if (distanceX === distanceY) return true;

    return false;
  }
}

class Queen extends Piece {
  get visual() {
    return 'queen';
  }
  
  verifyMove(oldX, oldY, newX, newY) {
    // can move like rook
    if (oldX === newX) return true;
    if (oldY === newY) return true;

    // or bishop
    const distanceX = Math.abs(newX - oldX);
    const distanceY = Math.abs(newY - oldY);
    if (distanceX === distanceY) return true;

    return false;
  }
}

class King extends Piece {
  get visual() {
    return 'king';
  }
  
  verifyMove(oldX, oldY, newX, newY) {
    const distanceX = Math.abs(newX - oldX);
    const distanceY = Math.abs(newY - oldY);

    if (distanceX < 2 && distanceY < 2) return true;

    return false;
  }
}