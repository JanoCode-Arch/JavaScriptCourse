/*
//Section 1 - Introduction to JavaScript
let js = "Amazing";
if (js === "Amazing") alert("JavaScript is FUN!");
console.log(40 + 8 + 23 - 10);

let firstName = "Alex";
console.log(firstName);
let JavaScriptIsFun = true;
console.log("The value of this variable is: " + JavaScriptIsFun);
console.log("The type is: " + typeof JavaScriptIsFun);

//typeof operator returns the type of the variable

console.log(typeof true);
console.log(typeof JavaScriptIsFun);
console.log(typeof 23);
console.log(typeof "Alex");

//dynamic typing
//is not needed to define variable type again
JavaScriptIsFun = "YES!";
console.log("The value of this variable is: " + JavaScriptIsFun);
console.log("The type is: " + typeof JavaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log("The value of this variable is: " + year);
console.log("The type is: " + typeof year);
//undefined type means variable is declared but not defined yet

console.log(typeof null);
//bug in JS, returns object instead of null
//reason is legacy code
//typeof operator is not perfect
//this bug will probably never be fixed due to backward compatibility
//Finish Section 1 Introduction to JavaScript
*/


//Section 2 - Variables and Constants
/*
let age = 30;
age = 31;

const birthYear = 1991;
//birthYear = 1990; this would cause an error
//const cannot be changed

//const job; //this would cause an error because const must be initialized

var job = "programmer";
job = "teacher";
//var is old way of declaring variables
//should be avoided due to issues with scope
lastName = "Vazquez";
console.log(lastName);
console.log(typeof lastName);
//is not recommended to declare variables without let, const or var, but it will still work
*/


/*
//Section 3 - Basic Operators
const now = 2037;
const ageJonas = now - 1991; // subtraction operator
//using variables with operators
const ageSarah = now - 2018; // subtraction operator
console.log(ageJonas, ageSarah);

console.log("Valor 1: " + ageJonas * 2, "Valor 2:" + ageJonas / 10, "Resultado de (2) elevado a la (3): " + 2 ** 3); // multiplication, division and exponentiation operators
//2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Alex";
const lastName = "Vazquez";
console.log(firstName + " " + lastName); // concatenation operator with a space in between

let x = 10 + 5; //We are using the addition operator to assign a value to x
x += 10; // x = x + 10
x *= 4; // x = x * 4
x++; // x = x + 1
x--; // x = x - 1
console.log(x);

console.log(ageJonas > ageSarah); // greater than operator
console.log(ageSarah >= 18); // greater than or equal to operator
console.log(ageJonas < ageSarah); // less than operator
console.log(ageSarah <= 18); // less than or equal to operator
console.log(ageJonas === ageSarah); // equality operator
console.log(ageJonas !== ageSarah); // not equal operator


console.log(now - 1991 > now - 2018); // combining operators

*/
//Finish Section 3 - Basic Operators
/*
//Section 4 -  Operator Precedence
const now = 2037;
const ageJonas = now - 1991; // subtraction operator
const ageSarah = now - 2018; // subtraction operator
console.log(now - 1991 > now - 2018); // combining operators

let x, y; //declaring multiple variables
x = y = 25 - 10 - 5;
console.log(x, y);
const avegeAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, avegeAge);

//Finish Section 4 -  Operator Precedence
*/

//Excersces until Section 4

/*
let myCountry = "MEX";
let otherCountry = "USA";

let myPopulation = 130;
let otherPopulation = 331;
revision(); //First call

function revision() {
    if (myPopulation > otherPopulation) {
        console.log(`${myCountry}'s population is above ${otherCountry}'s`);
    }
    if (myPopulation < otherPopulation) {
        console.log(`${myCountry}'s population is below ${otherCountry}'s`);
    }
};

myPopulation *= 3; //tripling my population
revision();  //Second call

let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;
compareBMI();
function BMI(mass, height) {
    return mass / height ** 2;
}

function compareBMI() {
    const BMIMark = BMI(massMark, heightMark);
    const BMIJohn = BMI(massJohn, heightJohn);
    if (BMIMark > BMIJohn) {
        console.log(`Mark's BMI (${BMIMark.toFixed(2)}) is higher than John's (${BMIJohn.toFixed(2)})!`);
        return;
        //Calling toFixed method to limit decimals to 2 places and using template literals
    }
    console.log(`John's BMI (${BMIJohn.toFixed(2)}) is higher than Mark's (${BMIMark.toFixed(2)})!`);
    return;
}
*/
//Finish Excersces until Section 4

//Section 5 - Taking Decisions: if / else Statements
/*
const age = 17;
const isOldEnough = age >= 18; //if the person is 18 or older is going to return true
let name = "Alex";
let decimalValue = 3.14;

if (isOldEnough) {
    console.log(name + " is old enought to drive🚗");
}
if (!isOldEnough) {
    console.log(name + " is not old enought to drive 🚗 wait " + (18 - age) + " Year/s to drive.");
    console.log(`This is another way to print variables ${decimalValue}`);

}
*/


//Ejercicio de notas escolares
/*
let math = "86";
let biology = "97";
let chemistry = "89";

function TipoDeDato(){
console.log("El tipo de Variable es math: " + typeof (math));
console.log("El tipo de Variable es biology: " + typeof (biology));
console.log("El tipo de Variable es chemistry: " + typeof (chemistry));
}
TipoDeDato();

math = Number(math);
biology = Number(biology);
chemistry = Number(chemistry)

TipoDeDato();

let average = (math + biology + chemistry) / 3 //If Number was not on the code this would cause an error

let estado;
switch (true) {
  case average >= 90:
    estado = "Excelente";
    break;
  case average >= 80:
    estado = "Bueno";
    break;
  case average >= 70:
    estado = "Promedio";
    break;
  case average >= 60:
    estado = "Pasaste";
    break;
  default:
    estado = "Reprobaste";
}
console.log("El promedio del alumno: " + average.toFixed(2) + " | Status: " + estado);
//Serie de ejercicios de repaso usando Chatgpt

*/

//comando con prompt
/*
let name = prompt("Como te llamas?")
console.log("El se llama: " + name);
*/
//

//To convert to String
//console.log(String(1892)); //This would make 1892 to a string


// 5 Falsy Values and truly values -------------

// console.log(Boolean(0)); // false
// console.log(Boolean(undefined)); //False
// console.log(Boolean("Jonas")); //True bc it has not an empty string
// console.log(Boolean({}));
/*
const money = 10;  //0 is converted to false bc it is 0

if (money) {
    console.log("Don't spent it all");
} else {
    console.log("You should get a job");

}

let height;

if (height) {
    console.log("Yay Height is defined");
}else{
    console.log("Height is UNDEFINED");
}
*/

/*
const age = 18; // TO TEST CHANGE THIS VALUE TO STRING

if (age === 18) console.log("You are an adult"); //on line if

//Making == is when youmake coercion types
//Ex "18" == 18 RETURNS TRUE bc JS turn 18 into a integer
// EX "18" === 18 RETURNS FALSE bc TRIPLE "=" IS RESTRICTIVE CONDITION

if (age == 18) console.log("You are an adult (loose)");
//Good practice use always === TRIPLE

const favorite = Number(prompt("What is your favorite number"));
//With Number we change the string that returns the prompt to a number
console.log("Your favorite is: " + favorite);
console.log("The value now is:" + typeof favorite);

if (favorite === 23) console.log("Cool you like 23");
*/

//Seccion true and false
/*
const HasAGoodVision = true;
const IsAGoodDriver = false;

if (HasAGoodVision && IsAGoodDriver) {
    console.log("Suppossed to be false (AND)"); //AND Door
}
if (HasAGoodVision || IsAGoodDriver) {
    console.log("Supposed to be True (OR)");
}
if (!IsAGoodDriver) {
    console.log("Supposed to be true (NOT)");

}


const isTired = true;
const shouldDrive = IsAGoodDriver && HasAGoodVision && !isTired;

if (shouldDrive) {
    console.log("You can drive");
}
*/


//IF on one line
/*
const age = 17;
age >= 18 ? console.log("You have 18") : console.log("You don't have 18");
*/
//IF on on line (only works by one line of coding)


//Agregando una variable nueva
//let x = 10;