'use strict';

module.exports = {
  init: function init() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  },
  append: function append(data) {
    var node = this.newNode(data);
    if (this.length === 0) {
      node.next = node;
      node.prev = node;
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      node.next = this.head;
      this.tail = node;
      this.head.prev = this.tail;
    }
    this.length++;
    return node;
  },
  newNode: function newNode(data) {
    var node = {
      data: data,
      next: null,
      prev: null
    };
    return node;
  }
};
