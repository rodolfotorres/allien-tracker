'use strict';

var CircularDLL = require('./circular-double-linked-list');

var Orientation = Object.create(CircularDLL);

var directions = {
  'RIGHT': 'next',
  'LEFT': 'prev'
};

Orientation.build = function build() {
  Orientation.init();
  var node = Orientation.append({
    name: 'NORTH',
    move: function north(obj) {
      obj.y++;
    }
  });

  Orientation.append({
    name: 'EAST',
    move: function east(obj) {
      obj.x++;
    }
  });

  Orientation.append({
    name: 'SOUTH',
    move: function south(obj) {
      obj.y--;
    }
  });

  Orientation.append({
    name: 'WEST',
    move: function south(obj) {
      obj.x--;
    }
  });

  Orientation.current = node;
};


Orientation.move = function(action) {
  var pointer = directions[action];
  if (pointer) {
    Orientation.current = Orientation.current[pointer];
  }
};

module.exports = Orientation;
