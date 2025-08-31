// function scope TESTS
//
function something() {
  y = 1; // not recommended! Throws a ReferenceError in strict mode.
  var z = 2; // not recommended, use let instead

  function inner() {
    console.log('0:' + z); // 1  since z is in the scope of the function inner
  }
}
something();
console.log('1:' + y); // 1  - is a global variable!
//console.log(z); // Throws a ReferenceError: z is not defined outside x.

var x = 1;
function myFunction() {
  let x = 2;
  console.log('2:' + x); // 2
}
myFunction();
console.log('3:' + x); // 1

// BLOCK SCOPE
const x1 = 1;
{
  const x1 = 2;
  console.log('4:' + x1); // 2
}
console.log('5:' + x1); // 1

// NESTED SCOPE

function nestedScopes() {
  const message = 'Hello World!';

  if (true) {
    const fromIf = 'Hello If Block!';
    console.log('6:' + message); // Hello World!
  }
  //console.log("7:" + fromIf) // ReferenceError: fromIf is not defined
}
nestedScopes();
