# Nivell 3

Output:
$ node sprint1_entrega_1.5.js

### Exercici 1.1

Els buffers es poden utilitzar per agafar una cadena o un tros de dades i fer la codificació del resultat. Passem data a Buffer.from() assignant el resultat a una variable, que amb el mètode toString(), mostrarà la memòria intermèdia de dades com una cadena hexadecimal (o base64).

### Exercici 1.2

Primer, s'importa el mòdul criptogràfic const crypto = requerir ("cripto").
Per xifrar les dades utilitzem l'algoritme "aes-192-cbc".
El mètode crypto.randomBytes() s'utilitza per generar dades aleatòries construïdes criptogràficament generades al codi escrit. El initVector s'utilitza aquí per contenir 16 bytes de dades aleatòries del mètode randomBytes(). La funció de xifrat de dades de l'exercici es fa mitjançant cipherData().
Passem el primer argument com a algorisme que estem utilitzant, el segon argument com a clau de seguretat i initVector com a tercer argument. Per xifrar el missatge, utilitzeu el mètode update() al xifrat. Passem el primer argument com a missatge, el segon argument com a utf-8 (codificació d'entrada) i hex (codificació de sortida) com a tercer argument.
Després amb la funció createCryptFiles() i gràcies al mòdul "fs" nadiu de Node. js, ens permet interactuar amb els fitxers del sistema llegint, creant i borrant arxius.

### Exercici 1.3

Desxifrar dades segueix un format similar al de xifrar dades. A l'exercici s'utilitza la funció decipherData() per desxifrar dades.
