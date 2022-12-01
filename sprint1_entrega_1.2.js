//Nivell 1
//Exercici 1
((name, surname) => {
    console.log(name + surname);
})("Jonathan ", "Schmidt");

//Nivell 2
//Exercici 1
const func = (param1) => ({ Name: param1 });
console.log(func("Jonathan"));

//Exercici 2
class Persona {
    constructor(nom) {
        this.nom = nom;
    }

    dirNom() {
        return this.nom;
    }
}

let home = new Persona("Jonathan");
console.log(home.dirNom());

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
