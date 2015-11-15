// http://johnny-five.io/examples/raspi-io///////////////////////

var five  = require('johnny-five');
var raspi = require('raspi-io');
var board = new five.Board({
  io: new raspi()
});


board.on('ready', function () {
  // LED on pin 13 (GPIO27)
  var led = new five.Led('P1-13');

  // Optionally set the speed; defaults to 100ms
  led.blink(50);
});








// from https://github.com/nebrius/raspi-io ////////////////////////

// var five  = require('johnny-five');
// var raspi = require('raspi-io');
// var board = new five.Board({
//   io: new raspi()
// });
//
// board.on('ready', function () {
//
//   // Create LED on pin 13 on P1 and strobe it on/off
//   // Optionally set the speed; defaults to 100ms
//   (new five.Led('P1-13')).strobe(50);
//
// });
