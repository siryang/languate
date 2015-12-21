
module.exports = function (info) {
    console.log("message");
    return function() {
        console.log(info);
    }
}

var instance = "sigleton"
module.exports.instance = instance;