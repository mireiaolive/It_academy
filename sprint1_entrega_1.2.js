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
function AbstractClass() {
    this.name = "name";
    //Les classes abstractes no es poden instanciar
    if (this.constructor === Employee) {
        throw new Error("this class cannot be instantiated");
    }
}

//Funció classe abstracta
AbstractClass.prototype.display = function () {
    return "Employee name is: " + this.name;
};
//Subclasse
function createObject(fullName) {
    this.name = fullName;
}
//Creat objecte de la subclasse extenent la classe abstracta
createObject.prototype = Object.create(AbstractClass.prototype);
var objOne = new createObject("Jonathan Schmidt Ott");
var objTwo = new createObject("Michael Jackson");
console.log(objOne.display());
console.log(objTwo.display());
