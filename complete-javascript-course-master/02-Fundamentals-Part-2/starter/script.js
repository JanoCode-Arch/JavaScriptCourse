"use strict";
/*
const IsPrivate = true;
//Example
console.log(sprivate);
//With use strict we can avoid using code that is declare yet
const interface = "Audio";
//Strict also avoids to use reserved words
console.log(interface);
*/

/*
function logger() {
    console.log("My Name is Alex");

}
//Creation of a function with entry variables

function summarizing(x, y) {
    const sum = x + y;

    return sum;

}


var valor = summarizing(5, 8);

console.log(valor);
*/
/*--------------------------------------------------
//Functions declariations vs expressions
//use of a Function Declaration
console.log(age(2000));
//this can work even if the method is defined after we call it
function age(birthday) {
    return 2025 - birthday;
}

//Function Expresions
const age2 = function age2(birthday) {
    return 2025 - birthday
}

//in this case it is necesari to put firts the expression
//(no matter that it is a function also)
console.log(age2(1967));
--------------------------------------------------
*/
//-----------------------------------------------
/*
//ARROW FUNCTIONS
function age(birthday) {
    return 2025 - birthday;
}
//This is the same as the part above just simplified
const ageCalc3 = birthday => 2025 - birthday;
const age3 = ageCalc3(2000);
console.log(`Your age is :${age3}`);
//it is necessari to have {`} on the string method to
//concatenate also variables, to create this backticks it is
//with Alt+96 ASCII model
const firstName = "Alex";

const yearUntilRetirement = birthday => {
    const age = 2025 - birthday;
    const retriement = 65 - age;
    return `${firstName} retires in ${retriement} years`;
}
console.log(yearUntilRetirement(2000));

*/
//-----------------------------------------------

/* More Examples
function cutFruitPieces(fruit) {  //Multiline method
    return fruit * 4;
}

const juice2 = fruit => fruit * 2; //Single line method


function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);


    const juice = `Juic with ${applePieces} pieces of apple and ${orangePieces}`

    return juice
}


console.log(fruitProcessor(2, 3));

console.log(`Created juice of apple ${juice2(2)}`);
*/
//----------------------------------------------------



/*
const yearUntilRetirement = (birthday, firstName) => {
    const age = calcAge(birthday);

    if (age > 0) {
        return `${firstName} retires in ${age} years`;
    } else {
        return -1;
    }
}

const calcAge = birthday => 2025 - birthday;

console.log(yearUntilRetirement(1970, "Alex"));
*/

/*
//CHALLENGE #1

//const quees = Math.random(); //Me da un numero random entre 0 y 1 con decimal

const score1 = Math.floor(Math.random() * 100);
const score2 = Math.floor(Math.random() * 100);
const score3 = Math.floor(Math.random() * 100);

console.log("Valor Score 1: " + score1);
console.log("Valor Score 2: " + score2);
console.log("Valor Score 3: " + score3);
//Soy consciente de que no va a cambiar el resultado de ninguno de los 2 porque ambos tienen las mismas entradas
//Estoy haciend un poco mas de lo que pide el ejercicio asi que

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const calcDolphins = calcAverage(score1, score2, score3);

const calcKoalas = calcAverage(score1, score2, score3);

console.log(`The average is of Dolphins is: ${calcDolphins}`);

console.log(`The average is of Koalas is: ${calcKoalas}`);



*/


//Solution (video)
/*
//============================================================
//Crear el metodo
const calcAverage = (a, b, c) => (a + b + c) / 3;


let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

//Solo muetras un promedio
console.log("Score de los Dolphins: " + scoreDolphins + " Score de los Koalas: " + scoreKoalas);

//Test 1
//Esta funcion no tienen nada que ver con lo de arriba
const checkWinner = function (avDolphins, avKoalas) {
    if (avDolphins >= 2 * avKoalas) {
        console.log("Ganan los Dolphins con: " + avDolphins);
        return;
    }
    if (avKoalas >= 2 * avDolphins) {
        console.log("Ganan los Koalas con: " + avKoalas);
        return;
    } else {
        console.log("No team wins...");
        return;
    }
}

checkWinner(111, 111);
//Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
//============================================================
*/

//============================================================
//ARRAYS
//Create a variable for each friend
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
//Besides this is a const this can be mutate also can be changed even tough it is a const
//const is not gonna let you change the value only for primitive variables {bool, int, string}, array isnt
console.log(friends); //This will show -> (3) ['Michael', 'Steven', 'Peter']

const years = new Array(1991, 1984, 2008, 2020); //second option to create an array
console.log(years);
console.log(friends[0]); //This will return the value of the variable on the [0]

console.log(friends.length); //Counts the qty of the array
//3

console.log(friends[friends.length - 1]);//This will return the last value of an array [table[number -1 bc this value counts everythin except for 0]]
//By this time returns Peter
friends[2] = 'Jay';
console.log(friends); //This will show -> (3) ['Michael', 'Steven', 'Jay']

// friends = ['Bob', 'Alice']; // ERROR Uncaught TypeError: Assignment to constant variable.

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, friends];

console.log(jonas); //(4) ['Jonas', 'Schmedtmann', 46, Array(3)]
//Expanded
/*
0: "Jonas"
1: "Schmedtmann"
2: 46
3: (3) ['Michael', 'Steven', 'Jay']
length:4
//============================================================
*/



