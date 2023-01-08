//N1 E2
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

module.exports.newFunction = newFunction;
