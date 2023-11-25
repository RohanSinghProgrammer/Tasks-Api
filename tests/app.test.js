const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../server");

chai.use(chaiHttp);
const expect = chai.expect;

describe("Authentication Endpoints", () => {
  // Test /auth/register endpoint
  describe("POST /api/v1/auth/register", () => {
    it("should register a new user", async () => {
      const res = await chai
        .request(app)
        .post("/api/v1/auth/registration")
        .send({
          name: "John Doe",
          email: "john@gmail.com",
          password: "SecretPassword",
        });

      expect(res).to.have.status(201);
      expect(res.body)
        .to.have.property("message")
        .equals("User registered successfully");
      expect(res.body).to.have.property("user");
    });
  });

  // Test /auth/login endpoint
  describe("POST /api/v1/auth/login", () => {
    it("should login a user and return a JWT token", async () => {
      const res = await chai.request(app).post("/api/v1/auth/login").send({
        email: "john@gmail.com",
        password: "SecretPassword",
      });

      expect(res).to.have.status(200);
      expect(res.body).to.have.property("message").equals("Login successful");
      expect(res.body).to.have.property("token");
    });
  });
});
