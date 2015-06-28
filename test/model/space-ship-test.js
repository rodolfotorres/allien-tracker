'use strict';
var expect = require('chai').expect,
  SpaceShip = require('../../src/model/space-ship');


describe('SpaceShip', function() {
  var spaceship;

  beforeEach(function() {
    spaceship = new SpaceShip();
  });

  it('should have an initial position of 0,0', function() {
    expect(spaceship.position.x).eql(0);
    expect(spaceship.position.y).eql(0);
  });

  it('should have an initial orientation of NORTH', function() {
    expect(spaceship.orientation.current.data.name).eql('NORTH');
  });

  describe('action', function() {
    it('should have an action func', function() {
      expect(spaceship.move).not.to.be.undefined;
    });

    describe('FORWARD', function() {
      it('should move NORTH one position', function() {
        spaceship.move('FORWARD');
        expect(spaceship.position.y).eql(1);
        expect(spaceship.position.x).eql(0);
      });
    });

    describe('RIGHT then FORWARD', function() {
      it('should move EAST one position', function() {
        spaceship.move('RIGHT');
        spaceship.move('FORWARD');
        expect(spaceship.position.y).eql(0);
        expect(spaceship.position.x).eql(1);
      });
    });

    describe('array of instructions', function() {
      it('should move to ', function() {
        var array = ['FORWARD', 'FORWARD', 'FORWARD', 'RIGHT', 'FORWARD', 'FORWARD', 'RIGHT', 'FORWARD', 'LEFT', 'FORWARD', 'LEFT', 'FORWARD', 'FORWARD', 'FORWARD', 'LEFT', 'FORWARD', 'FORWARD', 'LEFT', 'FORWARD', 'FORWARD', 'LEFT', 'FORWARD', 'FORWARD', 'FORWARD', 'FORWARD', 'RIGHT', 'FORWARD', 'FORWARD', 'LEFT', 'FORWARD', 'FORWARD', 'FORWARD', 'RIGHT', 'RIGHT', 'FORWARD', 'FORWARD', 'LEFT', 'FORWARD', 'RIGHT', 'FORWARD', 'FORWARD'];

        array.forEach(function(action) {
          spaceship.move(action);
        });

        expect(spaceship.position.x).eql(4);
        expect(spaceship.position.y).eql(0);
      });
    });

    describe('Out of Bounds', function() {
      describe('RIGHT, RIGHT then FORWARD', function() {
        it('should stay on 0,0', function() {
          spaceship.move('RIGHT');
          spaceship.move('RIGHT');
          spaceship.move('FORWARD');
          expect(spaceship.position.y).eql(0);
          expect(spaceship.position.x).eql(0);
        });
      });

      describe('LEFT then FORWARD', function() {
        it('should stay on 0,0', function() {
          spaceship.move('LEFT');
          spaceship.move('FORWARD');
          expect(spaceship.position.y).eql(0);
          expect(spaceship.position.x).eql(0);
        });
      });

      describe('FORWARD multiple', function() {
        it('should stay on 9,0', function() {
          spaceship.move('FORWARD');
          spaceship.move('FORWARD');
          spaceship.move('FORWARD');
          spaceship.move('FORWARD');
          spaceship.move('FORWARD');
          spaceship.move('FORWARD');
          spaceship.move('FORWARD');
          spaceship.move('FORWARD');
          spaceship.move('FORWARD');
          spaceship.move('FORWARD');
          expect(spaceship.position.y).eql(9);
          expect(spaceship.position.x).eql(0);
        });
      });
    });
  });
});
