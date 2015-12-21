var v8_demo = require(__dirname + '/build/Release/v8_demo');

var events = require('events');

// extend prototype
function inherits(target, source) {
  for (var k in source.prototype)
    target.prototype[k] = source.prototype[k];
}

v8_demo.event = new events.EventEmitter;

v8_demo.event.addListener = function(instance, eventName, listener) {
    v8_demo.event.on(eventName, function(object) {
        if (object == instance) {
            listener();
        }
    });
}

module.exports = v8_demo