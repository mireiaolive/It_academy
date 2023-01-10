//Crea un mock que comprovi les crides al constructor de la classe Persona i al seu mètode.
//dirNom() en l'exercici Classes & Arrow Functions - N2 E2 i testeja que funcionen.
const { Persona, createObject } = require("../sprint1_entrega_1.2");
jest.mock("../sprint1_entrega_1.2");

//to clear mock function after each test:
beforeEach(() => {
    Persona.mockClear();
    createObject.mockClear();
});

test("call to Persona", () => {
    Persona("Jonathan");
    expect(Persona).toHaveBeenCalledTimes(1);
});

test("call to dirNom", () => {
    expect(Persona).not.toHaveBeenCalled();
    const singer = new Persona("Michael");
    expect(Persona).toHaveBeenCalledTimes(1);

    singer.dirNom();
    const callMock = Persona.mock.instances[0];
    expect(callMock.dirNom).toHaveBeenCalledTimes(1);
});

test("call to createObject", () => {
    createObject("Michael");
    expect(createObject).toHaveBeenCalledTimes(1);
});
