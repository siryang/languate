
// show = function(){
// 	console.log("show me the way!");
// };
// exports.show = show;


function Person (){
	var mName;
	this.setName = function (newName){
		this.mName = newName;
	};

	this.getName = function(){
		return this.mName;
	};

	this.show = function(){
		console.log("show me the person!");
	};
};

module.exports = Person;
