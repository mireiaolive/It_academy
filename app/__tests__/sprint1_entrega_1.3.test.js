const {
    infoClient,
    saludar,
    getEmployee,
    getSalary,
} = require("../sprint1_entrega_1.3");

test("Should receive a param and callback to print a message", (done) => {
    infoClient("Moritz", saludar);
    done();
});

test("Should return an employee after search its id", () => {
    return getEmployee(1).then((employee) =>
        expect(employee).toEqual({ id: 1, name: "Linux Torvalds" })
    );
});

test("Should return an employee salary object", () => {
    return getSalary(3).then((salary) =>
        expect(salary).toEqual({
            id: 3,
            salary: 2000,
        })
    );
});
