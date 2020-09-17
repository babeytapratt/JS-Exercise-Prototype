/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age){
  this.name = name;
  this.age = age;
  this.stomach = [];
}

Person.prototype.eat = function(edible){
  if(this.stomach.length < 10){
    this.stomach.push(edible);
  }
}

Person.prototype.poop = function(){
  this.stomach = [];
}

Person.prototype.toString = function(){
  return `${this.name}, ${this.age}`;
}

const personOne = new Person('William', 21);
const personTwo = new Person('Brian', 39);
const personThree = new Person('Cheree', 41);

console.log(personOne.toString());
console.log(personTwo.toString());
console.log(personThree.toString());

personTwo.eat('pizza');
personTwo.eat('breadsticks');

console.log(personTwo.stomach);

personTwo.poop();

console.log(personTwo.stomach);



/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

// @ts-ignore
function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}

Car.prototype.fill = function(numberOfGallons){
  return(this.tank + numberOfGallons);

  }

console.log(8);





Car.prototype.toString = function(){
  return(`My ${this.model} can drive ${this.milesPerGallon} miles per gallon.`);
}

const carOne = new Car('Ford', 17);

console.log(carOne.toString());

carOne.fill('gallon of gas');
carOne.fill('gallon of gas');
carOne.fill('gallon of gas');
carOne.fill('gallon of gas');
carOne.fill('gallon of gas');
carOne.fill('gallon of gas');

console.log(carOne.tank);

 Car.prototype.drive = function(distance){
   if(this.odometer.length + 1){
     this.odometer.push(distance) && this.tank.shift;
   }
 }

 console.log(carOne.odometer);

 carOne.drive('one mile');
 carOne.drive('one mile');
 carOne.drive('one mile');
 carOne.drive('one mile');
 carOne.drive('one mile');
 carOne.drive('one mile');
 carOne.drive('one mile');
/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/


function Child(attributes){
  Person.call(this.attributes);
}
Child.prototype = Object.create(Person.prototype);

function Baby(name, age, favoriteToy) {
    this.name = name;
    this.age = age;
    this.favoriteToy = favoriteToy;
}

Baby.prototype.play = function(){
  console.log(`Playing with my ${this.favoriteToy}`);
  }


/*
  TASK 4

  In your own words explain the four principles for the "this" keyword below:

  1. Implicit Binding

  2. most common rule - it's found in 80% of use cases

  3. only applies to object with methods, don't use in global scope or you will get the entire window.

  4. when the function is invoked, look to the left of the dot. that is what 'this' refers to
*/


///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Baby) { module.exports.Baby = Baby }
}
