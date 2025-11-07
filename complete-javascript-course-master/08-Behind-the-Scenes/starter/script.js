'use strict';
/*
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Alex';
let job = 'Teacher';
const year = 1991;

console.log(addDecl(2, 3)); //this would print
// console.log(addExpr(2, 3)); //This is not
// console.log(addArrow(2, 3)); //this is not

//Functions
function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;
*/

//
/*
//WRONG
//Bad practice of using var, better use (VAR or LET)
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All Product Deleted!');
}
*/

// const calcAge = function (birthday) {
//   console.log(2037 - birthday);
//   console.log(this);
// };
/*
//==================================
const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(2025 - this.year);
  },
};
//the parameter "THIS" is calling with the
//mehod
jonas.calcAge();

const matilda = {
  year: 2000,
};
//Copying the method from Jonas to matilda
matilda.calcAge = jonas.calcAge;
matilda.calcAge(); //This works
//WRONG
//const f = jonas.calcAge;
//f(); //This makes an mistake bc the "THIS" doenst have a method that call it
//==================================
*/
/*
//===========================================
//Argument keyword
//LEC
const jonas = {
  firtName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2025 - this.year);
    const self = this;
    const isMillenial = function () {
      console.log(self);
      //this would create an UNDDEFINED on "THIS" Keyword
      //WRONG
      //   console.log(this.year >= 1981 && this.year <= 1996);
      //With this method we can create a correct way of passing THIS method
      //CORRECT SOLUTION 1
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMillenial();
  },
  //Arrow method grab de "THIS" like it was a
  //Global method
  //WRONG
  //   greet: () => console.log(`Hey ${this.firtName}`),
  //This in the other hand work correctly
  //CORRECT
  greet: function () {
    console.log(`Hey ${this.firtName}`);
  },
};
jonas.calcAge();
//===========================================
*/
/*
//===========================================
//Argument keyword
//LEC
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 4, 5, 3);
//===========================================
*/
/*
//===========================================
//LEC
//CREATING AN OBJECT and destroying

const locations = {
  city: 'Faro',
  country: 'Lisboa',
};
//This would delete the city called faro
const newlocation = locations;
newlocation.city = ' Portugal';
console.log(locations);
//===========================================
*/
/*
//LEC
//===========================================
const jessica1 = {
  firsName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

function marryPerson(originalPerson, newLastName) {
  originalPerson.lastName = newLastName;
  return originalPerson;
}

const marriedJessica = marryPerson(jessica1, 'Davis');

// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';

console.log('Before: ', jessica1);
console.log('After: ', marriedJessica);

const jessica = {
  firsName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = { ...jessica };
jessicaCopy.lastName = 'Davis';
console.log(jessica, jessicaCopy);

//This would copy everysingle primitive values and can be changed
//but in this case it would be added to
//Shallow Copy //LEC
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before: ', jessica);
console.log('After: ', jessicaCopy);
//Deep copy //LEC
const jessicaClone = structuredClone(jessica);
jessicaClone.family.push('Mary');
jessicaClone.family.push('John');

console.log('Before: ', jessica);
console.log('After: ', jessicaClone);
//===========================================
*/
