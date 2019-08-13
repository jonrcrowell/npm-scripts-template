const should = require("should")
const greeter = require("../lib/tsCode.js")

describe('Typescript is compiled!', () => {
    it("when this passed", function () {
        var g = new greeter();
        g.greet("Yoda").should.equal("A typescript greeting to you, Yoda!")
    })
})
