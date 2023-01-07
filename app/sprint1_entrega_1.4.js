//Async / Await N1 E2.
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

//Async / Await N2 E1
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
