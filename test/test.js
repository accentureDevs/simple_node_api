const request = require("supertest");
const app = require("../index");

describe("GET /", () => {
    it("responds with an Welcome Message", (done) => {
        request(app).get("/").expect({message: 'Welcome to Node API'}, done);
    })
});