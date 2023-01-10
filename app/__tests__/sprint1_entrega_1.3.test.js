const {
    infoClient,
    saludar,
    getEmployee,
    getSalary,
} = require("../sprint1_entrega_1.3");

jest.mock("./request");

test("Should receive a param and callback to print a message", (done) => {
    infoClient("Moritz", saludar);
    done();
});

//N2 E1
//refes les funcions, de manera que accedeixin a les dades d'un fitxer extern JSON.
//Crea tests que demostrin la correcta execució de l'exercici fent un mock del fitxer JSON.

/* test("Should return an employee after search its id", () => {
    return getEmployee(1).then((employee) =>
        expect(employee).toEqual({ id: 1, name: "Linux Torvalds" })
    );
}); */

/* test("Should return an employee salary object", () => {
    return getSalary(3).then((salary) =>
        expect(salary).toEqual({
            id: 3,
            salary: 2000,
        })
    );
}); */
