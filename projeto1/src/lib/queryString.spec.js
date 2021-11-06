const { queryString } = require("./queryString");

describe("Object to query string", () => {
  it("should create a valid query string when an object is provided", () => {
    const obj = {
      name: "Lucas",
      profession: "developer",
    };

    queryString(obj);
    expect(queryString(obj)).toBe("name=Lucas&profession=developer");
  });
});

// describe('Query string to object', () => {

// });
