
const person = {
    name: 'Max',
    age: 29,
    greet() { // here no need to write greet : function() { ... }  since JS is smart enough to understand that this is a function
        console.log('Hi, I am ' + this.name);
    }
};

person.greet()

const printName = ({ name }) => {
    console.log(name);
};

printName(person);

console.log ("----1----")
const { name, age } = person; // we deconstruct the object person with {}
console.log(name, age);

console.log ("----2----")
// becareful this is not deep copy - for deep copy use JSON.parse(JSON.stringify(person))
const copiedPerson = { ...person };
console.log(copiedPerson);

console.log ("----3----")
const hobbies = ['Sports', 'Cooking'];
const [hobby1, hobby2] = hobbies; // we deconstruct the array hobbies with []
console.log(hobby1, hobby2);

// // for (let hobby of hobbies) {
// //     console.log(hobby);
// // }
// // console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// // console.log(hobbies);
// const copiedArray = [...hobbies];
// console.log(copiedArray);

// const toArray = (...args) => {
//   return args;
// };

// console.log(toArray(1, 2, 3, 4));
