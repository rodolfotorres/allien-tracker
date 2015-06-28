'use strict';

var prompt = require('prompt'),
  http = require('http');

var SpaceShip = require('./model/space-ship'),
  spaceProbe = require('./services/space-probe');

var spaceship = new SpaceShip();

prompt.start();

console.log('Initial Position: x: ' + spaceship.position.x + ' y: ' + spaceship.position.y);

prompt.get(['email'], function(err, data) {
  spaceProbe.getDirections(data.email)
    .then(function(directions) {
      directions.forEach(function(direction) {
        spaceship.move(direction);
      });
      console.log('New Position: x: ' + spaceship.position.x + ' y: ' + spaceship.position.y);
      return spaceship.position;
    })
    .then(function(position){
      return spaceProbe.submitPosition(data.email, position);
    })
    .then(function(result) {
      console.log(result.Message);
    });
});
