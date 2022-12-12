//Nivell 1
//Exercici 1
//Mostra per la consola el resultat d'una arrow function autoinvocable que sumi dos nombres.
console.log(((name, surname) => name + surname)("Jonathan ", "Schmidt"));

//Nivell 2
//Exercici 1
const func = (param1) => ({ Name: param1 });
console.log(func("Jonathan"));

//Exercici 2
//Crea una classe "Persona" que rebi un paràmetre 'nom' en ser instanciada.
//La classe inclourà un mètode dirNom que imprimeixi per consola el paràmetre 'nom'.
//Invoca el mètode dirNom des de fora de la classe.
class Persona {
    constructor(nom) {
        this.nom = nom;
    }

    dirNom() {
        console.log(this.nom);
    }
}

let home = new Persona("Jonathan");
home.dirNom();

//Nivell 3
//Exercici 1
//Escriu una function creadora d'objectes que faci instàncies d'una classe abstracta.
//Invoca-la amb diferents definicions.
//Les classes abstractes no es poden instanciar

class AbstractClass {
    constructor(name, age, language) {
        if (new.target == AbstractClass) {
            throw new Error("this class cannot be instantiated");
        }
        this.name = name;
        this.age = age;
        this.language = language;
    }
}

const createObject = (name, age, language) => {
    return Object.create(AbstractClass.prototype, {
        name: { value: name },
        age: { value: age },
        language: { value: language },
    });
};

let objOne = createObject("Marta", 20, "german");
//Error: this class cannot be instantiated
//let objTwo = new AbstractClass("Tomas", 50, "french");

console.log(objOne);
//console.log(objTwo);
