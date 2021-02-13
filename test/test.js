const app = require("../app");
const chai = require("chai");
const request = require("supertest");
const should = chai.should();

const testUser = {
  username: "test@gmail.com",
  password: "Test@1234",
};

// Test auth /GET route
describe("Test GET /v1/user/self", function () {
  it("should return status 200", function (done) {
    request(app)
      .get("/v1/user/self")
      .auth(testUser.username, testUser.password, { type: "basic" })
      .end(function (err, res) {
        res.status.should.be.equal(200);
        done();
      });
  });
});