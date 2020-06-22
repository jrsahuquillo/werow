const request = require("supertest");
const api = require("../api");

describe("GET /api ", () => {
  test("It should respond with a Hello World! object", async () => {
    const response = await request(api).get("/api");
    expect(response.body).toEqual({ 'hello': 'World!!!'});
    expect(response.statusCode).toBe(200);
  });
});