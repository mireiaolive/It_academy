//Nivell 1
//Exercici 1
//Crea una funció asíncrona que rebi un id d'empleat/da i imprimeixi per pantalla el nom de
//l'empleat/da i el seu salari, usant les funcions getEmployee() i getSalary() que has definit a la tasca anterior.
const { getEmployee, getSalary } = require("./sprint1_entrega_1.3.js");

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

employeeInfo = async (id) => {
    try {
        const name = await getEmployee(employees.name);
        console.log("nom deempleat/da");
        const salary = await getSalary(salaries.salary);
        console.log(`${name}: ${salary}`);
    } catch (err) {
        console.log(err);
    }
};

employeeInfo(1);
employeeInfo(2);
employeeInfo(3);
employeeInfo(4);
