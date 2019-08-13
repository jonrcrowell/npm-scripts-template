"use strict";
var Greeter = /** @class */ (function () {
    function Greeter() {
    }
    Greeter.prototype.greet = function (name) {
        return "A typescript greeting to you, " + name + "!";
    };
    return Greeter;
}());
module.exports = Greeter;
