//N1 E2
//Crea una arrow function que rebi un paràmetre i una funció callback i li passi a la funció un missatge
//o un altre (que s'imprimirà per consola) en funció del paràmetre rebut.

const infoClient = (name, callback) => {
    const day = `Bon dia ${name}!`;
    const night = `Bona nit ${name}!`;
    if (Math.random() < 0.5) {
        console.log(callback(day));
    } else {
        console.log(callback(night));
    }
};
module.exports.infoClient = infoClient;

let saludar = (name) => {
    console.log(name);
};

module.exports.saludar = saludar;

infoClient("Moritz", saludar);

//N2 E1
//Donats els objectes employees i salaries, crea una arrow function getEmployee()
//que retorni una Promise efectuant la cerca en l'objecte pel seu id.

let employees = [
    {
        id: 1,
        name: "Linux Torvalds",
    },
    {
        id: 2,
        name: "Bill Gates",
    },
    {
        id: 3,
        name: "Jeff Bezos",
    },
];

let salaries = [
    {
        id: 1,
        salary: 4000,
    },
    {
        id: 2,
        salary: 1000,
    },
    {
        id: 3,
        salary: 2000,
    },
];

const getEmployee = (id) => {
    const employee = employees.find((employees) => employees.id == id);
    const promise = new Promise((resolve, reject) => {
        if (!employee) {
            reject(`Aquest ${id} no existeix`);
        } else {
            resolve(employee);
        }
    });
    return promise;
};

getEmployee(1)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

module.exports.getEmployee = getEmployee;

//N2 E2
//Crea una altra arrow function getSalary() similar a l'anterior
//que rebi com a paràmetre un objecte employee i retorni el seu salari.

const getSalary = (id) => {
    const promise = new Promise((resolve, reject) => {
        const salary = salaries.find((salary) => salary.id == id);
        if (!salary) {
            reject(`Aquest ${salary} no existeix`);
        } else {
            resolve(salary);
        }
    });
    return promise;
};

module.exports.getSalary = getSalary;
