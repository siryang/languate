var v8_demo = require('./build/Release/v8_demo');


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

console.log(v8_demo.hello());

v8_demo.say("hahahaha");


function jsPrint(info){
    options.ref+=1;
    console.log(options);
    console.log(info);
}

jsPrint("print in JS");

v8_demo.callback(jsPrint);