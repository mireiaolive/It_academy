const { newFunction, returnDouble } = require("../sprint1_entrega_1.4");

//Fake Timer utilities tests functions that rely on functions like setTimeout and setInterval
jest.useFakeTimers();
jest.spyOn(global, "setTimeout");

test("Should return a fn after 2 seconds of the second call.", () => {
    newFunction().then((result) => {
        expect(result).toBe("resolved after 2 seconds");
    });
});

test("waits 2 second after passed the number twice", () => {
    const number = returnDouble(5);
    jest.runAllTimers();
    expect(number).toBe(10);
});
