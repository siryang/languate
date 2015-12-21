
var getClickwise = function (from, to) {
    return respect;
};

var tester = function(from, to, expect) {
    if(getClickwise(from, to) !== expect) {
        console.log("error from:" + from + "to:" + to + "expect:" + expect);
    }
};

tester(270, 10, "clickwise");
tester(10, 270, "anticlockwise");
tester(90, 100, "clickwise");
tester(100, 90, "anticlockwise");
tester(90, 300, "anticlockwise");
tester(300, 90, "clockwise");