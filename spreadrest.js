const person = {
    name: 'Max',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

const copiedPerson = { ...person };
console.log("-1-");
console.log(copiedPerson);

console.log("-2-");
const hobbies = ['Sports', 'Cooking'];
for (let hobby of hobbies) {
    console.log(hobby);
}
console.log("-3-");
console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
console.log("-4-");
console.log(hobbies);
console.log("-5-");
const copiedArray = [...hobbies];
console.log(copiedArray);

const toArray = (...args) => {
    return args;
};
console.log("-6-");
console.log(toArray(1, 2, 3, 4));

