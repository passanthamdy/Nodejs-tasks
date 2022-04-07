var Emitter = require('events');
var util = require('util');
 
function Greetr()
 {}

util.inherits(Greetr, Emitter);


//greeter1.greet("pasant")

module.exports = Greetr;