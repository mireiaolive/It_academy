const { sum, subtract, multiply, divide } = require("../operations");

test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
});

test("adds 1 + 2 to equal 3", () => {
    expect(subtract(2, 2)).toBe(0);
});

test("adds 1 + 2 to equal 3", () => {
    expect(multiply(2, 2)).toBe(4);
});

test("adds 1 + 2 to equal 3", () => {
    expect(divide(4, 2)).toBe(2);
});
