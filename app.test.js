const app = require("./app");
const request = require("supertest");

test("supertest", (done) => {
  request(app).post("/login").send("hello world").expect(
    201,
    {
      username: "sam",
      password: 123,
    },
    done
  );
});
