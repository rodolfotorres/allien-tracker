'use strict';
var expect = require('chai').expect,
  CircularDLL = require('../../src/model/circular-double-linked-list');

describe('Circular Double Linked List', function() {
  var sut;
  beforeEach(function() {
    sut = Object.create(CircularDLL);
    sut.init();
  });

  describe('Init', function() {
    it('can init a new list', function() {
      expect(CircularDLL.init).not.to.be.undefined;
      expect(sut.init).not.to.be.undefined;
      expect(sut.length).eql(0);
      expect(sut.head).eql(null);
      expect(sut.tail).eql(null);
    });
  });

  describe('Append nodes', function() {
    describe('first node', function() {
      it('should set head and tail to himself', function() {
        expect(sut.append).not.to.be.undefined;
        var node = sut.append({
          name: 'UP'
        });

        expect(sut.length).eql(1);
        expect(sut.head).eql(node);
        expect(sut.tail).eql(node);
      });

      it('should point the first node to himself', function() {
        expect(sut.append).not.to.be.undefined;
        var node = sut.append({
          name: 'UP'
        });
        expect(node.next).eql(node);
        expect(node.prev).eql(node);
      });
    });

    describe('can add 2 items with circular dependencies', function() {
      var node1;
      var node2;
      beforeEach(function() {
        node1 = sut.append({
          name: 'UP'
        });
        node2 = sut.append({
          name: 'RIGHT'
        });
      });

      it('should build a circular dependencies', function() {
        expect(node1.next).eql(node2);
        expect(node1.prev).eql(node2);
        expect(node2.next).eql(node1);
        expect(node2.prev).eql(node1);
      });
    });

    describe('can add 4 items with circular dependencies', function() {
      var node1, node2, node3, node4;

      beforeEach(function() {
        node1 = sut.append({
          name: 'UP'
        });
        node2 = sut.append({
          name: 'RIGHT'
        });
        node3 = sut.append({
          name: 'DOWN'
        });
        node4 = sut.append({
          name: 'LEFT'
        });
      });

      it('should build a circular dependencies', function() {
        expect(node1.next).eql(node2);
        expect(node1.prev).eql(node4);
        expect(node2.next).eql(node3);
        expect(node2.prev).eql(node1);
        expect(node3.prev).eql(node2);
        expect(node3.next).eql(node4);
        expect(node4.next).eql(node1);
        expect(node4.prev).eql(node3);
      });
    });
  });
});
