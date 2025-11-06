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
/*
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
//Besides this is a const this can be mutate also can be changed even tough it is a const
//const is not gonna let you change the value only for primitive variables {bool, int, string}, array isnt
console.log(friends);
//This will show -> (3) ['Michael', 'Steven', 'Peter']

const years = new Array(1991, 1984, 2008, 2020); //second option to create an array
console.log(years);
console.log(friends[0]); //This will return the value of the variable on the [0]

console.log(friends.length); //Counts the qty of the array
//3

console.log(friends[friends.length - 1]);//This will return the last value of an array [table[number -1 bc this value counts everythin except for 0]]
//By this time returns Peter
friends[2] = 'Jay';
console.log(friends);
//This will show -> (3) ['Michael', 'Steven', 'Jay']

// friends = ['Bob', 'Alice']; // ERROR Uncaught TypeError: Assignment to constant variable.

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, friends];

console.log(jonas); //(4) ['Jonas', 'Schmedtmann', 46, Array(3)]
console.log(jonas.length);

const calcAge = function (birthday) {
    return 2025 - birthday
}
const year = [1990, 1967, 2002, 2018]

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]
//Using the same method but in the array for calculation
console.log(ages);
*/
//============================================================
/*
//ARRAY METHODS
//Example of the array
const friends = ['Michael', 'Steven', 'Peter']

//ADD TO THE LAST POSITION METHOD ===> push
const newLength = friends.push('Jay'); //Creates a new name on the array
console.log(friends);
//Returns [ 'MIchael', 'Steven', 'Peter', 'Jay' ]
console.log(newLength);
//returns the new length store on the method

//ADD TO THE FIRST POSITION
// METHOD =====> unshift
friends.unshift('John')
console.log(friends);
//RETURNS [ 'John', 'Michael', 'Steven', 'Peter', 'Jay' ]


//REMOVE ELEMENTS
// REMOVE LAST ELEMENT ===> pop
const popped = friends.pop();
console.log(friends);
//Returns de array without the last member [ 'John', 'Michael', 'Steven', 'Peter' ]
console.log(popped);
//Stores the value of the last removed position 'Jay'
// REMOVE FIRST ELEMENT ===> shift
const shifted = friends.shift();
console.log(friends);
//Returns de array without the first member [ 'Michael', 'Steven', 'Peter' ]
console.log(shifted);
//Stores the value of the last removed position 'John'

//INDEXER
console.log(friends.indexOf('Steven'));
//Returns the position of the value 'STEVEN'
console.log(friends.indexOf('Bob'));
//If we try with a value that doesnt exist returns -1
console.log(friends.includes('Steven'));
//Checks if value of Steven exist RETURNS TRUE
console.log(friends.includes('Bob'));
//Check if the value of BOB exist RETURNS False

friends.push(23); //Adds the int to the Array
console.log(friends.includes(23));
//This has strict comparison "===" this case returns true
if (friends.includes('Peter')) {
    console.log("You have a friend called Peter");
}
if (friends.includes('Bob')) {
    console.log();

}
//============================================================
*/
/*
//Exercie with arrays
const calcTip = bills => bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
//const  =>no cambia
//CalcTip => Nombre de metodo
//bill => dato de entrada
//Despues de la flecha ya viene el statement que en este caso es un if en una sola linea
//// If en una sola línea (operador ternario)
// Devuelve el monto de la propina: 15% si está entre 50 y 300, de lo contrario 20%
const Tips = [125, 555, 44];

const totals = [Tips[0] + calcTip(Tips[0]), Tips[1] + calcTip(Tips[1]), Tips[2] + calcTip(Tips[2])];

console.log(totals);
//============================================================
*/
/*
//OBJETCS =============
const jonasArray = [  //Diferent way to create an array MULTILINE
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
]
//DIferencie bewtween an object an Array
const jonas = { //Creating an object simplies way to create
    firstName: 'Jona',
    lastName: 'SchmedMann',
    age: '2037-1991',
    job: 'Teacher',
    friends: ['Michael', 'Peter', 'Steven']
}
console.log(jonas);
console.log(jonas.lastName);
console.log(jonas['lastName']);
//Object with
const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
//You can put expressions in the bracketsnotation
console.log(jonas['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends.'); //null


if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log("Wrong request!");
}

//Create a new value
jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);
console.log(`${jonas.firstName} has ${jonas['friends'].length} friends and his best friend is, ${jonas["friends"][0]}`);
*/

/*
//============================================================
//METHODS INSIDE OBJECTS
const jonas = {
    firstName: 'Jona',
    lastName: 'SchmedMann',
    birthday: 1991,
    job: 'Teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriverLicense: true,
    //VERSION 1======
    //Creating a method inside of an object
    // calcAge: function (birthday) {
    //     return 2025 - birthday;
    // }
    //VERSION 2======
    // calcAge: function () {
    //     // console.log(this); //Returns jonas as the object
    //     return 2025 - this.birthday
    // }
    //VERSION 3
    calcAge: function () {
        this.age = 2025 - this.birthday;
        return this.age;
    },
    canDrive: function () {
        this.stringToDrive;
        if (this.hasDriverLicense) {
            this.stringToDrive = "he has a driver license"
        }
        if (!this.hasDriverLicense) {
            this.stringToDrive = "he doesnt have a driver license"
        }
        return this.stringToDrive;
    },
    sumarie: function () {
        return (`${this.firstName} is a ${this.age} years old ${this.job} and ${this.stringToDrive}`);
    }
}
//VERSIOn 1
// const way1 = jonas.calcAge(1991);
// //Diferent ways to acces to a method inside of an object
// const way2 = jonas['calcAge'](1991);
// //Diferent ways to acces to a method inside of an object
// console.log(way1, way2);
//VERSION 2
//console.log(jonas.calcAge());
// no need to pass the value bc the reserved word "THIS" grabs the value from the object itself
//VERSION 3
jonas.calcAge(); //Called the method first to return the values
console.log(jonas.age);

//Exercise Challengue
//"Jonas is a 34-years old teacher. and he has a drivers license".
jonas.canDrive();
console.log(jonas.sumarie());
//============================================================
*/

/*
//============================================================
//CHALLENGE #3
const Mark = {
    fullName: 'Mark Millers',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.BMI = this.mass / (this.height * this.height)
        return this.BMI;
    }
}
const John = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.BMI = this.mass / (this.height * this.height)
        return this.BMI;
    }
}

John.calcBMI();
Mark.calcBMI();
if (John.BMI > Mark.BMI) {
    console.log(`${John.fullName}´s BMI {${John.BMI}} is higher than ${Mark.fullName}´s {${Mark.BMI}}`);
}
if (Mark.BMI > John.BMI) {
    console.log(`${John.fullName}´s BMI {${John.BMI}} is less than ${Mark.fullName}´s {${Mark.BMI}}`);
}
//============================================================
*/

/*
//============================================================
//FOR LOOPS
// for (let rep = 1; rep <= 10; rep++) {
//     console.log('Lifting weights repetitions: ' + rep);
// }

//USING ARRAYS WITH LOOPS
const jonasArray = [  //Diferent way to create an array MULTILINE
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
]
const types = [];
for (let i = 0; i < jonasArray.length; i++) {
    const element = jonasArray[i] + " " + typeof jonasArray[i];
    console.log(element);
    //Filling an array
    //WAY 1
    // types[i] = typeof jonasArray[i]
    //WAY 2
    types.push(typeof jonasArray[i])
}
console.log(types);

//Creating a loop to filling array with an operation
const years = [1991, 2007, 1969, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
    ages.push(2025 - years[i]); //Filling a array with the push operator
}
console.log(ages);

console.log('----ONLY STRINGS----');
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] !== 'string') continue;
    console.log(jonasArray[i] + " " + typeof jonasArray[i]);
}

console.log('----BREAK WITH NUMBER----');
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] === 'number') break;
    console.log(jonasArray[i] + " " + typeof jonasArray[i]);
}
//============================================================
*/

/*
//============================================================
//LOOPS IN LOOPS, and LOOPS ON BACKwARDS
const jonasArray = [  //Diferent way to create an array MULTILINE
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
]
for (let i = jonasArray.length - 1; i >= 0; i--) { //LOOP ON BACKWARDS
    console.log(jonasArray[i]);
}
//Loop inside Loop
for (let i = 1; i < 4; i++) {
    console.log("-----Starting Excercie number: " + i);
    for (let j = 1; j < 6; j++) {
        console.log("Ex: " + i + " Lifting weight repetition: " + j);
    }
}
//============================================================
*/
/*
//============================================================
//WHILE LOOP
// let rep = 1;
// while (rep <= 10) {
//     console.log("WHILE rep is: " + rep);
//     rep++;
// }


let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1
    if (dice === 6) {
        console.log('Loop is about to end');
        console.log(dice);
    }
}
//============================================================
*/


/*
//CHALLENGUE 4  //Returning array and methods
const billsArray = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

function calcTip(bills) {
    let tip = [];
    for (let i = 0; i < bills.length; i++) {
        tip.push(bills[i] >= 50 && bills[i] <= 300 ? bills[i] * 0.15 : bills[i] * 0.2);
    }
    return tip;
}
var tips = calcTip(billsArray);

const totals = [];
for (let i = 0; i < billsArray.length; i++) {
    totals.push(billsArray[i] + tips[i]);
}
console.log(totals);
//============================================================
*/
