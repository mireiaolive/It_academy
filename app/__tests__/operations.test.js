const { sum, subtract, multiply, divide } = require("../operations");

test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
});

test("subtract 2 - 2 to equal 0", () => {
    expect(subtract(2, 2)).toBe(0);
});

test("multiply 2 * 2 to equal 4", () => {
    expect(multiply(2, 2)).toBe(4);
});

test("divide 4 / 2 to equal 2", () => {
    expect(divide(4, 2)).toBe(2);
});
