'use strict';

var Promise = require('bluebird'),
    request = Promise.promisify(require('request'));

var paths = {
  get: 'https://mands-alien-test.herokuapp.com/api/spaceprobe/getdata/',
  submit: 'https://mands-alien-test.herokuapp.com/api/spaceprobe/submitdata/'
};

module.exports = {
  getDirections: function getDirections(email) {
    return request(paths.get + email).then(function(res){
      return JSON.parse(res[1]).Directions;
    });
  },
  submitPosition: function submitPosition(email, position) {
    return request(paths.submit + email + '/' + position.x + '/' + position.y).then(function(res){
      return JSON.parse(res[1]);
    });
  }
};
