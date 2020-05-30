const request = require("supertest");
const app = require("../app");

describe("GET /api ", () => {
  test("It should respond with a Hello World! object", async () => {
    const response = await request(app).get("/api");
    expect(response.body).toEqual({ 'hello': 'World!'});
    expect(response.statusCode).toBe(200);
  });
});