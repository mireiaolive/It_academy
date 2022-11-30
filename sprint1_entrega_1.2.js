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

    dirNom(nom) {
        console.log(this.nom);
    }
}
