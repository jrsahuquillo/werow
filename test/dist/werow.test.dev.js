"use strict";

var request = require("supertest");

var app = require("../app");

describe("GET /api ", function () {
  test("It should respond with a Hello World! object", function _callee() {
    var response;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(request(app).get("/api"));

          case 2:
            response = _context.sent;
            expect(response.body).toEqual({
              'hello': 'World!'
            });
            expect(response.statusCode).toBe(200);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    });
  });
});