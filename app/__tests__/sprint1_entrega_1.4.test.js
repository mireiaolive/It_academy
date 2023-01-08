const { newFunction } = require("../sprint1_entrega_1.4");

test("Should return a fn after 2 seconds of the second call.", () => {
    newFunction().then((result) => {
        expect(result).toBe("resolved after 2 seconds");
    });
});
