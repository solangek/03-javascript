// function scope TESTS
//
function something() {
    y = 1; // Throws a ReferenceError in strict mode.
    var z = 2;
}
something();
console.log(y); // 1 
console.log(z); // Throws a ReferenceError: z is not defined outside x.


var x6 = 1
function myFunction() {
    var x6 = 2;
    console.log(x6) // 2
}
myFunction()
console.log(x6) // 1


// BLOCK SCOPE
const x1 = 1
{
    const x1 = 2
    console.log(x1) // 2
}
console.log(x1) // 1

// global variables
window.x8 = 38;
let x9 = 11;

// NESTED SCOPE

function nestedScopes() {
    const message = 'Hello World!'

    if (true) {
        const fromIf = 'Hello If Block!'
        console.log(message) // Hello World!
    }
    console.log(fromIf) // ReferenceError: fromIf is not defined
}
nestedScopes();