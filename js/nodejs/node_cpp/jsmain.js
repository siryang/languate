var v8_demo = require('./demo.js');

v8_demo.stop();
console.log(v8_demo.returnArray());

var jsCallback = function(var1){
    console.log("callback from js");
    console.log(var1);
}

var jsCallback2 = function() {
    console.log("callback from js2");
}

console.log(rand() % 10);

v8_demo.setCallback(jsCallback);
v8_demo.invokeCallback();
v8_demo.setCallback(jsCallback2);
v8_demo.invokeCallback();

var options = {
    x:10, y:20,
    width:300, height:1098,
    color:100,
    ref:0
};

var obj = new v8_demo.MyObject({
	x:10, y:20,
	width:300, height:1098,
	color:100,
    });

console.log( obj.getPosition() );
console.log( "width: \t" + obj.getWidth());
console.log( "height:\t" + obj.getHeight());
console.log( "color:\t" + obj.getColor());

var child = obj.getChild();
if (child == undefined) {
    console.log("no child");
} else {
    console.log( child.getPosition() );
    if (child === obj) {
        console.log("success hahahaha");
    }

    obj.info = "info of object";
    console.log(child.info);
}


// ================== MyObject class end

console.log(v8_demo.hello());

v8_demo.say("hahahaha");

setTimeout(function() {
    v8_demo.say("timer1...");
}, 0);

setTimeout(function() {
    v8_demo.say("timer2...");
}, 1);


var fs = require('fs');
fs.readFile("./test.hah", function(err, data) {
    if (err) {
        throw err;
    }
    v8_demo.say(data);
});

function jsPrint(info){
    options.ref+=1;
    //console.log(options);
    console.log(info);
}

jsPrint("print in JS");

var person = new v8_demo.Person();
jsPrint(person.getName());

var student = new v8_demo.Student();
jsPrint(student.getName());
jsPrint(student.getGrade());

/// ==================== event start
var events = require("events");

var Overlay = function(name) {
    this.name = name;
};

var emitter = new events.EventEmitter();
function addListener(instance, eventName, handler) {
    emitter.on(eventName, function(object) {
        if (object == instance) {
            handler();
        }
    });
}

var marker2 = new Overlay("marker2");
addListener(marker2, "click", function () {
    console.log("this is callback of marker2");
});

emitter.emit("click", marker2);

// v8_demo.event
var marker = new Overlay("marker1");
v8_demo.event.addListener(marker, "click", function () {
    console.log("this is callback of " + marker.name);
});

v8_demo.event.emit("click", marker);
/// ==================== event end


emitter.on("say", function(data){
    console.log("say....");
});

emitter.emit("say");
emitter.emit("say");
emitter.emit("say");

emitter.emit("click");

emitter.emit("click", object);


emitter.emit("click", engine);
emitter.emit("click", maker2);
emitter.emit("click", routeResult1);

