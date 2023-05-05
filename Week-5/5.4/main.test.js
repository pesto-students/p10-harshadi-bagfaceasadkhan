// mathOperations.test.js

const mathOperations = require("./index");

describe("Math Operations", () => {
  test("should return the correct sum of two numbers", () => {
    expect(mathOperations.sum(2, 3)).toBe(5);
  });

  test("should return the correct difference of two numbers", () => {
    expect(mathOperations.diff(5, 2)).toBe(3);
  });

  test("should return the correct product of two numbers", () => {
    expect(mathOperations.product(2, 3)).toBe(6);
  });
});
