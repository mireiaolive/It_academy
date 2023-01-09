//N2 E2
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

module.exports.Persona = Persona;

//N3 E1
function AbstractClass() {
    this.name = "name";
    //Les classes abstractes no es poden instanciar
    if (this.constructor === AbstractClass) {
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

module.exports.createObject = createObject;
