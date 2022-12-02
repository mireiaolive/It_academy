//Nivell 1
//Exercici 1
function userName(name) {
    console.log(name);
}

userName("Mireia");

//Nivell 2
//Exercici 1
var name = "Mireia";
var surName = "Olive";

var userInfo = `${name} ${surName}`;
console.log(userInfo);

//Exercici 2
function userNameSurname() {
    return "Mireia Olive";
}

var user = `The name of the user is: ${userNameSurname()}`;
console.log(user);

//Nivell 3
//Exercici 1
const f1 = () => {
    var arr = [];
    for (var i = 0; i < 10; i++) {
        arr.push(() => {
            for (var j = 0; j < 10; j++) {
                console.log(j);
            }
        });
    }
    return arr;
};

console.log(f1());

//Exercici 2
var result = (function (name) {
    return name;
})("Result is Mireia");
console.log(result);
