'use strict';
var expect = require('chai').expect,
  Orientation = require('../../src/model/orientation');

describe('Orientation', function() {
  var orientation, orientation2;
  beforeEach(function () {
    orientation = Object.create(Orientation);
    orientation.build();
  });
  describe('on init', function() {
    it('should contain 4 nodes', function() {
      expect(orientation.length).eql(4);
    });
    it('should have first node as UP', function() {
      expect(orientation.current.data.name).eql('NORTH');
    });
  });

  describe('on move', function() {
    it('should have a move method', function() {
      expect(orientation.move).not.to.be.undefined;
    });
    describe('on RIGHT move', function() {
      it('orientation should be EAST', function() {
        console.log(orientation.current.data.name);
        orientation.move('RIGHT');
        expect(orientation.current.data.name).eql('EAST');
      });
    });

    describe('on LEFT move', function() {
      it('orientation should be WEST', function() {
        console.log(orientation.current.data.name);
        orientation.move('LEFT');
        expect(orientation.current.data.name).eql('WEST');
      });
    });

    describe('on INVALID move', function() {
      it('orientation shouldn\'t change', function() {
        orientation.move('I');
        expect(orientation.current.data.name).eql('NORTH');
      });
    });
  });
});
