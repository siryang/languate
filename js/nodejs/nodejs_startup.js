var Header = require('./require_sample');

var header = new Header();

header.show();

console.log("hello world");


var showTime = 0;
var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();

event.on('some_event', function() {
	console.log('some_event occured.');
	if (++showTime != 3){
		setTimeout(function() {	event.emit('some_event');}
			, 1000);
	}
});

// event.emit('some_event');
function show(info){
	console.log(info);
};

show("123");

show(typeof(123));
show(typeof(123.123));


var arrayTest = [{must: "123'44", 111:"111"}, "456", 789];
show(arrayTest[0]);


show("3" == 3);
show("3" == +"3");
// === strict equal, equal value and type.
// !== not same value or not same type.
show("3" === 3);

show("4" > 3);

// >> fill same with the most-high bit.
// >>> fill with 0.
show((-8 >> 1).toString(16));
show((-8 >>> 1).toString(16));

show((1.1 << 3).toString(16));

var myObj = new Object();
	rank = "rank";
console.log(rank);

myObj.string = "string";
console.log(myObj.string);



function hh(a, p){
	function add(pp){
		return a+pp;
	}

	return add(p);
}


console.log(hh(3,4));


console.log(Math.cos(1.5));





