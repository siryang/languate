
var qs = require("./module.js")("construct info");

console.log("start");

qs();

// monkey path.~~~~
// var Mongoose = require('mongoose').Mongoose;
// var _ = require('underscore');

// var model = Mongoose.prototype.model;
// var modelWithUnderScoreCollectionName = function(name, schema, collection, skipInit) {
//   collection = collection || _(name).chain().underscore().pluralize().value();
//   model.call(this, name, schema, collection, skipInit);
// };
// Mongoose.prototype.model = modelWithUnderScoreCollectionName;