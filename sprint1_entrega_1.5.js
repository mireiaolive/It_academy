const fs = require("fs");
const zlib = require("zlib");
const gzip = zlib.createGzip();
const inp = fs.createReadStream("file.txt");
const out = fs.createWriteStream("file.txt.gz");
const crypto = require("crypto");

//Nivell 1
//Exercici 1
//Crea una funció que, en executar-la, escrigui una frase en un fitxer.
const data = "This is the new content of file.txt.";
fs.writeFile("file.txt", data, (err) => {
    if (err) {
        throw err;
    } else {
        //console.log("Data has been written.");
    }
});

//Exercici 2
//Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior.
fs.readFile("file.txt", (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data.toString());
});

//Exercici 3
//Crea una funció que comprimeixi el fitxer del nivell 1.
const compressFile = () => {
    if (typeof 42 === "number") {
        return inp.pipe(gzip).pipe(out);
    } else {
        throw err;
    }
};

//compressFile();

//Nivell 2
//Exercici 1
//Crea una funció que imprimeixi recursivament un missatge per la consola amb demores d'un segon.
const recursivePrint = (num) => {
    setTimeout(() => {
        if (num === 0) {
            console.log("last printing..");
        } else {
            console.log("hello i'm printing..");
            recursivePrint(num - 1);
        }
    }, 1000);
};

//recursivePrint(3);

//Exercici 2
//Crea una funció que llisti per la consola el contingut del directori d'usuari/ària de l'ordinador
//utilizant Node Child Processes.
const { spawn } = require("child_process");

const find = spawn("find", [".", "-type", "f"]);
const wc = spawn("wc", ["-l"]);

find.stdout.pipe(wc.stdin);

wc.stdout.on("data", (data) => {
    //console.log(`Number of files ${data}`);
});

//Nivell 3
//Exercici 1
//Crea una funció que creï dos fitxers codificats en hexadecimal i en base64 respectivament,
//a partir del fitxer del nivell 1.
const createCodFiles = () => {
    fs.readFile("file.txt", "utf-8", (err, data) => {
        if (err) {
            throw err;
        } else {
            const buf = Buffer.from(data);
            fs.writeFile("file-hex.txt", buf.toString("hex"), (err) => {
                if (err) throw err;
                else console.log("hex done");
            });
            fs.writeFile("file-64.txt", buf.toString("base64"), (err) => {
                if (err) throw err;
                else console.log("base64 done");
            });
        }
    });
};

//createCodFiles();

//Crea una funció que guardi els fitxers del punt anterior,
//ara encriptats amb l'algoritme aes-192-cbc i esborri els fitxers inicials.
const algorithm = "aes-192-cbc";
const initVector = crypto.randomBytes(16);
const message = "This is a secret message";
const cipherData = (m) => {
    const Securitykey = crypto.scryptSync(message, "salt", 24);
    const cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);

    let encryptedData = cipher.update(m, "utf-8", "hex");
    encryptedData += cipher.final("hex");
    //console.log("Encrypted message: " + encryptedData);
    return encryptedData;
};

const createCryptFiles = () => {
    fs.readFile("file-hex.txt", "utf-8", (err, data) => {
        if (err) throw err;
        else {
            fs.writeFile("file-hex-crypt.txt", cipherData(data), (err) => {
                if (err) throw err;
                else {
                    console.log("file-hex-crypt.txt done");
                }
                fs.unlink("file-hex.txt", (err) => {
                    if (err) throw err;
                    else console.log("file-hex.txt gone");
                });
            });
        }
    });

    fs.readFile("file-64.txt", "utf-8", (err, data) => {
        if (err) throw err;
        else {
            fs.writeFile("file-64-crypt.txt", cipherData(data), (err) => {
                if (err) throw err;
                else {
                    console.log("file-64-crypt.txt done");
                }
                fs.unlink("file-64.txt", (err) => {
                    if (err) throw err;
                    else console.log("file-64.txt gone");
                });
            });
        }
    });
};

//createCryptFiles();

//Crea una altra funció que desencripti i descodifiqui els fitxers
//de l'apartat anterior tornant a generar una còpia de l'inicial.
const decipherData = (m) => {
    const Securitykey = crypto.scryptSync(message, "salt", 24);
    const decipher = crypto.createDecipheriv(
        algorithm,
        Securitykey,
        initVector
    );
    let decryptedData = decipher.update(m, "hex", "utf-8");
    decryptedData += decipher.final("utf8");
    console.log("Decrypted message: " + decryptedData);
    return decryptedData;
};

const createDecryptFiles = () => {
    fs.readFile("file-hex-crypt.txt", "utf-8", (_err, cipherData) => {
        const data = decipherData(cipherData);
        fs.writeFile("file-hex-copy.txt", data, (err) => {
            if (err) throw err;
            else console.log("file-hex-copy.txt done");
        });
    });

    fs.readFile("file-64-crypt.txt", "utf-8", (_err, cipherData) => {
        const data = decipherData(cipherData);
        fs.writeFile("file-64-copy.txt", data, (err) => {
            if (err) throw err;
            else console.log("file-64-copy.txt done");
        });
    });
};

//createDecryptFiles();
