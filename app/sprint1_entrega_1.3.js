//Promises i Callbacks N1 E2
const infoClient = (name, callback) => {
    const day = `Bon dia ${name}!`;
    const night = `Bona nit ${name}!`;
    if (Math.random() < 0.5) {
        console.log(callback(day));
    } else {
        console.log(callback(night));
    }
};

let saludar = (name) => {
    console.log(name);
};

infoClient("Moritz", saludar);

//Promises i Callbacks N2 E1
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

//Promises i Callbacks N2 E2
const getSalary = (employee) => {
    const salary = salaries.find((salary) => salary.id == employee.id);
    const promise = new Promise((resolve, reject) => {
        if (!salary) {
            reject(`Aquest ${salary} no existeix`);
        } else {
            resolve(salary);
        }
    });
    return promise;
};

module.exports = {
    getEmployee: getEmployee,
    getSalary: getSalary,
};
