// ! javascript Objects...

/** 
 * Objects
As we know from the chapter Data types, there are eight data types in JavaScript. 
Seven of them are called “primitive”, because their values contain only a single thing 
(be it a string or a number or whatever).

In contrast, objects are used to store keyed collections of various data and more complex entities.
In JavaScript, objects penetrate almost every aspect of the language. 
So we must understand them first before going in-depth anywhere else.

An object can be created with figure brackets {…} with an optional list of properties. 
A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything.

We can imagine an object as a cabinet with signed files. 
Every piece of data is stored in its file by the key. It’s easy to find a file by its name or add/remove a file.
 * In JavaScript, almost "everything" is an object.

>>> Booleans can be objects (if defined with the new keyword)
>>> Numbers can be objects (if defined with the new keyword)
>>> Strings can be objects (if defined with the new keyword)
>>> Dates are always objects
>>> Maths are always objects
>>> Regular expressions are always objects
>>> Arrays are always objects
>>> Functions are always objects
>>> Objects are always objects
All JavaScript values, except primitives, are objects.


Creating a JavaScript Object
With JavaScript, you can define and create your own objects.

There are different ways to create new objects:

Create a single object, using an object literal.
Create a single object, with the keyword new.
Define an object constructor, and then create objects of the constructed type.
Create an object using Object.create(). 
 */

// 1. Creaing Objects using the object Literal
const person = {
  name: "Max",
  age: "20yrs",
  class: "mid",
  Nationality: "Nigerian",
};

// Creating objects using the new keyword
const owo = new Object();
owo.name = "Max";
owo.age = "20yrs";
owo.class = "mid";
owo.Nationality = "Nigerian";

// Creating objects using the 

console.log(owo.name);
console.log();
// const x = person;
// x.name = "ben"

// To remove a property, we can use the delete operator:
delete person.age   
console.log(person);


//! Accessing JavaScript Properties
//* 1. Objects can be accessed using the dot notation...
owo.name // this will display the name "Max"

//* 2. Ojects can be accessed using bracket notation. In this method, the properties are written as strings.
owo["name"]  

//! Looping through the properties of an object:
/* Using the Object.keys() methid
 * The Object.keys() method was introduced in ES6. It takes the object we want to loop over 
 * as an argument and returns an array containing all property names (also known as keys).
 */
let props = Object.values(person);
console.log(props);

props.forEach((props) => {
  console.log(`There are 3 ${person[props]} ${props}`);
})

props.forEach((props) => console.log(props));
console.log(props);

// Looking again at objects
const myProfile = {
  firstName: "Louis",
  lastName: "Peace",
  job: "web dev",
  skin: "dark",
  origin: "Annang",
  age: 2023 - 2000,
  friends: ["Mecky", "Hero", "Joseph", "Marcus"]
}


const nameKey = "Name";
console.log(myProfile[nameKey]);
console.log(myProfile["first" + nameKey]);
console.log(myProfile["last" + nameKey]);

const askMe = prompt("what do you want to know about Lopes? firstName, lastName, skin, age, origin, friends or job")
console.log(myProfile[askMe]);

if (myProfile[askMe]) {
   console.log(myProfile[askMe]); 
} else {
  console.log("wrong request!" + askMe);
}