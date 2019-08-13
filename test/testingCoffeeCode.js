const should = require("should")
const fill = require("../lib/coffeeCode.js")

describe("Coffee script is compiled!", function () {
    it("when this passed", function () {
        fill("mug", "coffee").should.equal("Filling the mug with coffee.");
    })
})