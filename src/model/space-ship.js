'use strict';

var Orientation = require('./orientation');

function SpaceShip() {
  this.position = {
    x: 0,
    y: 0
  };

  this.orientation = Object.create(Orientation);
  this.orientation.build();
}

SpaceShip.prototype.move = function move(action) {
  if (action === 'FORWARD') {
    this.orientation.current.data.move(this.position);
  } else {
    this.orientation.move(action);
  }

  fixOutOfBounds.call(this);
};

function fixOutOfBounds() {
  this.position.x = innerGrid(this.position.x);
  this.position.y = innerGrid(this.position.y);
}

function innerGrid(value) {
  if (value < 0) {
    return 0;
  } else if (value > 9) {
    return 9;
  }
  return value;
}


module.exports = SpaceShip;
