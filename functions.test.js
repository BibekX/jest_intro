const add = require("./functions");
const customMatcher = require("./custom");

describe("Testing add function", () => {
  let num = 10;

  beforeEach(() => (num = 10));

  test("Add 2 + 2 to equal 4", () => {
    console.log(num);
    num++;
    expect(add(2, 2)).toBe(4);
  });

  test("Add 2 + 2 to not equal 10", () => {
    console.log(num);
    num++;
    expect(add(2, 2)).not.toBe(10);
  });
  console.log(num);
  num++;
});

beforeEach(() => customMatcher);

//Custom Matcher
test("2 to equal 20", () => {
  expect(2).timesTen(20);
});

// let obj = {};

test("object to be equal", () => {
  expect({}).toEqual({});
});

let result = false;

test("result should be false", () => {
  expect(result).toBeFalsy();
});

test("result should be undefined", () => {
  expect(undefined).toBeUndefined();
});
