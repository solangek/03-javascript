const person = {
    name: 'Max',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

const printName = ({ name }) => {
    console.log(name);
};

printName(person);

console.log ("----1----")
const { name, age } = person;
console.log(name, age);

console.log ("----2----")
// becareful this is not deep copy - for deep copy use JSON.parse(JSON.stringify(person))
const copiedPerson = { ...person };
console.log(copiedPerson);

console.log ("----3----")
const hobbies = ['Sports', 'Cooking'];
const [hobby1, hobby2] = hobbies;
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
