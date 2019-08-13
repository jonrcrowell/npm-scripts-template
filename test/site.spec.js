const app = require("../");
const request = require("supertest").agent(app.listen());

describe("Our amazing little goofy site", function() {
  it("has a nice welcoming message", function(done) {
    request
      .get("/")
      .expect("Howdy from Koa!")
      .end(done);
  });
});
