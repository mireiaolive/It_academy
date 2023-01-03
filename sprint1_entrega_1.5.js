//Nivell 1
//Exercici 1
//Crea una funció que, en executar-la, escrigui una frase en un fitxer.
const fs = require("fs");

const data = "This is the new content of file.txt.";
fs.writeFile("./assets/file.txt", data, (err) => {
    if (err) {
        throw err;
    } else {
        console.log("Data has been written.");
    }
});

//Exercici 2
//Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior.
fs.readFile("./assets/file.txt", (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data.toString());
});
