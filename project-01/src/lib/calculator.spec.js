const { sum } = require("./calculator");

it("should be able to sum 2 and 2 and the result must be 4", () => {
  expect(sum(2, 2)).toBe(4);
});

it("be able to sum 2 and 2 even if one of then is a string and the result must be 4", () => {
  expect(sum("2", "2")).toBe(4);
});

it("should throw an error if if what is provided to be sum is not a number", () => {
  expect(() => {
    sum("", "2");
  }).toThrowError();

  expect(() => {
    sum([2, 2]);
  }).toThrowError();

  expect(() => {
    sum({});
  }).toThrowError();

  expect(() => {
    sum();
  }).toThrowError();
});
