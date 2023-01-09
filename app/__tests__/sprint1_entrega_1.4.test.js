const { newFunction } = require("../sprint1_entrega_1.4");

jest.useFakeTimers();
jest.spyOn(global, "setTimeout");

test("Should return a fn after 2 seconds of the second call.", () => {
    newFunction().then((result) => {
        expect(result).toBe("resolved after 2 seconds");
    });
});

test("waits 2 second after passed the number twice", () => {
    expect(setTimeout).toHaveBeenCalledTimes(1);
});
