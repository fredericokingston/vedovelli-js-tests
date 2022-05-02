const { queryString, parse } = require("./queryString");

describe("Object to query string", () => {
  it("should create a valid query string when an object is passed as a parameter", () => {
    const obj = {
      name: "John",
      profession: "developer",
    };

    expect(queryString(obj)).toBe("name=John&profession=developer");
  });

  it("should create a valid query string even when an object is array as a parameter", () => {
    const obj = {
      name: "John",
      abilities: ["JS", "TDD"],
    };

    expect(queryString(obj)).toBe("name=John&abilities=JS,TDD");
  });

  it("should throw an error an object is passed as value", () => {
    const obj = {
      name: "John",
      abilities: {
        first: "JS",
        second: "TDD",
      },
    };

    expect(() => queryString(obj)).toThrowError();
  });
});

describe("Query string to object", () => {
  it("should be able to convert a query string to an object", () => {
    const qs = "name=John&profession=developer";

    expect(parse(qs)).toEqual({ name: "John", profession: "developer" });
  });

  it("should be able to convert a query string of a single key-value pair to an object", () => {
    const qs = "name=John";
    
    expect(parse(qs)).toEqual({ name: "John"});
  });

  it("should be able to convert a query string to an object taking care of comma separated values", () => {
    const qs = "name=John&abilities=JS,TDD";
    
    expect(parse(qs)).toEqual({ name: "John", abilities: ["JS", "TDD"] });
  });
});
