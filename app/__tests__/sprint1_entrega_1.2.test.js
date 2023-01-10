//Crea un mock que comprovi les crides al constructor de la classe Persona i al seu mètode.
//dirNom() en l'exercici Classes & Arrow Functions - N2 E2 i testeja que funcionen.
const { Persona, createObject } = require("../sprint1_entrega_1.2");
//calling jest.mock automatically mocks all the exports from the module
//So, this line has automatically replaced the constructor and all of it's methods
//with mock functions allowing us to test how these functions behave.
jest.mock("../sprint1_entrega_1.2");

//to clear mock function after each test:
beforeEach(() => {
    Persona.mockClear();
    createObject.mockClear();
});

//we execute mock when we have functionalities with dependencies
//to replace dependencies with stand-ins in your unit test, called “mocks”
//to allow the unit test to run smoothly without invoking the real dependency
test("call to Persona", () => {
    Persona("Jonathan");
    expect(Persona).toHaveBeenCalledTimes(1);
});

test("call to dirNom", () => {
    const singer = new Persona("Michael");
    expect(Persona).toHaveBeenCalled();

    //And the information related to the instances created is saved in Persona.mock.instances,
    //so we can use this to test if the methods are being called properly.

    singer.dirNom();
    const callMock = Persona.mock.instances[0];
    expect(callMock.dirNom).toHaveBeenCalled();
});

test("call to createObject", () => {
    createObject("Michael");
    expect(createObject).toHaveBeenCalled();
});
