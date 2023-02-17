const Data = require("./main");

test("Data returns name", () => {
  expect(Data(1, 3)).toBe(4);
});
