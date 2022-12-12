//Nivell 1
//Exercici 1
//Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep.
//Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent depenent de si la Promise es resol o no.

const wasSuccess = true;

function asynFunction() {
    return new Promise((resolve, reject) => {
        if (wasSuccess) {
            resolve("eventual finalizació");
        } else {
            reject("falla o error");
        }
    });
}

console.log(asynFunction());

//Exercici 2
//Crea una arrow function que rebi un paràmetre i una funció callback i li passi a la funció un missatge
//o un altre (que s'imprimirà per consola) en funció del paràmetre rebut.

setTimeout(() => {
    console.log("Aquest missatge es veu després de tres segons");
}, 3000);

//Nivell 2
//Exercici 1
//Donats els objectes employees i salaries, crea una arrow function getEmployee()
//que retorni una Promise efectuant la cerca en l'objecte pel seu id.
