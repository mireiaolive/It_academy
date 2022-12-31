//Nivell 1
//Exercici 1
//Crea una funció asíncrona que rebi un id d'empleat/da i imprimeixi per pantalla el nom de
//l'empleat/da i el seu salari, usant les funcions getEmployee() i getSalary() que has definit a la tasca anterior.
const { getEmployee, getSalary } = require("./sprint1_entrega_1.3.js");

/* const employeeInfo = (id) => {
    getEmployee(id)
        .then((employee) =>
            getSalary(employee).then((salary) => {
                console.log(
                    `employee info: ${employee.name}: $${salary.salary}`
                );
            })
        )
        .catch((err) => console.log(err.message));
};

employeeInfo(1); */

const employeeInfo = async (id) => {
    try {
        const employee = await getEmployee(id);
        const salary = await getSalary(employee);
        if (employee.name) {
            console.log(`${employee.name}: ${salary.salary}`);
        } else {
            console.log("this person does not exist");
        }
    } catch (err) {
        console.log(err.message);
    }
};

employeeInfo(3);

//Exercici 2
//Crea una nova funció asíncrona que cridi a una altra que retorni una Promise
//que efectuï la seva funció resolve() després de 2 segons de la seva invocació.
const resolveAfter2 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("resolved after 2 seconds");
        }, 2000);
    });
};

const newFunction = async () => {
    const result = await resolveAfter2();
    console.log(result);
};

newFunction();

//Nivell 2
//Exercici 1
//Crea una funció que retorni el doble del número que li passa com a paràmetre després de 2 segons.
const returnDouble = (num) => {
    if (num === null) {
        num = 0;
    } else {
        return new Promise((resolve, reject) => {
            let isnum = /^\d+$/.test(num);
            if (isnum) {
                setTimeout(() => {
                    resolve(num * 2);
                }, 2000);
            } else {
                reject("Please use a number");
            }
        });
    }
};

module.exports.returnDouble = returnDouble;

//Crea una altra funció que rebi tres números i calculi la suma dels seus dobles fent servir la funció anterior.
const getSuma = async (num1, num2, num3) => {
    if (num1 === null && num2 === null && num3 === null) {
        console.log("error 1");
    } else {
        try {
            const dob1 = await returnDouble(num1);
            const dob2 = await returnDouble(num2);
            const dob3 = await returnDouble(num3);
            return dob1 + dob2 + dob3;
        } catch (err) {
            console.log("error 2");
        }
    }
};

getSuma(9, 8, 7)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

getSuma("6", 5, 500)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

//Nivell 3
//Exercici 1
//Força i captura tants errors com puguis dels nivells 1 i 2.
