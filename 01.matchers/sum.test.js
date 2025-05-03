const sum = require("./sum");

it("should add  1+2 equal 3", () => {
  const result = sum(1, 2);
  expect(result).toBeLessThan(4);
});
