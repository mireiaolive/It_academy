//Nivell 1
//Exercici 1
//Crea una funció que, en executar-la, escrigui una frase en un fitxer.
const fs = require("fs");
const zlib = require("zlib");
const gzip = zlib.createGzip();
const inp = fs.createReadStream("./assets/file.txt");
const out = fs.createWriteStream("./assets/file.txt.gz");

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

//Exercici 3
//Crea una funció que comprimeixi el fitxer del nivell 1.
const compresFile = () => {
    if (typeof 42 === "number") {
        return inp.pipe(gzip).pipe(out);
    } else {
        throw err;
    }
};

compresFile();

//Nivell 2
//Exercici 1
//Crea una funció que imprimeixi recursivament un missatge per la consola amb demores d'un segon.
const recursivePrint = (num) => {
    setTimeout(() => {
        if (num === 0);
        console.log("hello i'm printing..");
        recursivePrint(num - 1);
    }, 1000);
};

recursivePrint(3);
//Exercici 2
//Crea una funció que llisti per la consola el contingut del directori d'usuari/ària de l'ordinador
//utilizant Node Child Processes.
const { spawn } = require("child_process");

const find = spawn("find", [".", "-type", "f"]);
const wc = spawn("wc", ["-l"]);

find.stdout.pipe(wc.stdin);

wc.stdout.on("data", (data) => {
    console.log(`Number of files ${data}`);
});
