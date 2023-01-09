//Crea un mock que comprovi les crides al constructor de la classe Persona i al seu mètode.
//dirNom() en l'exercici Classes & Arrow Functions - N2 E2 i testeja que funcionen.
const { Persona, createObject } = require("../sprint1_entrega_1.2");
jest.mock("../sprint1_entrega_1.2");

test("calls to Persona", () => {
    Persona("Jonathan");
    expect(Persona).toHaveBeenCalledTimes(1);
});
