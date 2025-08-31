// live code in class to demonstrate genericity

/**
 * Computes the sum of 2 numbers
 * @param a
 * @param b
 * @returns {*}
 */
function compute2numbers(a, b) {
  return a + b;
}

function computeSumOfArrayOfNumbers(numbers) {
  // the standard way
  // let result = 0;
  // for (let number of numbers) {
  //   result += number;
  // }
  // return result;

  // the functional way
  return numbers.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0 /* initial value */,
  );
}

/**
 * Computes the multiplication of 2 numbers
 * @param a
 * @param b
 * @returns {number}
 */
function operationMultiply(a, b) {
  return a * b;
}
/**
 * Executes an operation on an array of numbers
 * @param numbers
 * @param operationFunction
 * @returns {*}
 */
function execOperationOnArrayOfNumbers(numbers, operationFunction) {
  return numbers.reduce(
    (previousValue, currentValue) =>
      operationFunction(previousValue, currentValue),
    1,
  );
}

console.log(
  'execOperationOnArrayOfNumbers([1, 2, 3, 4], operationMultiply) = ' +
    execOperationOnArrayOfNumbers([1, 2, 3, 4], operationMultiply),
);

/**
 * Computes the sum and the multiplication of 2 numbers
 * @param a
 * @param b
 * @returns {(*|number)[]} an array of 2 elements
 */
function computeSumAndMultiply(a, b) {
  return [a + b, a * b];
}
const [sum, multiply] = computeSumAndMultiply(1, 2);
console.log('[sum, multiply] =' + sum, multiply);

// returns an object {sum: 3, multiply: 2}
function computeSumAndMultiply2(a, b) {
  return { sum1: a + b, multiply1: a * b };
}
const { sum1, multiply1 } = computeSumAndMultiply2(1, 2); // deconstructing an object
console.log('{sum1, multiply1} = ' + sum1, multiply1);

// computes the distance between 2 points defined as {x: 1, y: 2}
function computeDistanceBetweenPoints(p1, p2) {
  return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
}

function validateInput(input, listOfValidationFunctions) {
  for (let validationFunction of listOfValidationFunctions) {
    if (!validationFunction(input)) {
      return false;
    }
  }
  return true;
}

// examples using this function
function isNumber(input) {
  return typeof input === 'number';
}

function isPositive(input) {
  return input >= 0;
}
function isInteger(input) {
  return Number.isInteger(input);
}

function isNotEmpty(input) {
  return input.trim().length > 0;
}

function isEmail(input) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(input).toLowerCase());
}

function isPhoneNumber(input) {
  const re = /^\d{10}$/;
  return re.test(String(input));
}

const email = 'example@domain.com';
console.log(validateInput(email, [isNotEmpty, isEmail])); // Should return true

const phoneNumber = '1234567890';
console.log(validateInput(phoneNumber, [isNotEmpty, isPhoneNumber])); // Should return true

const emptyString = '   ';
console.log(validateInput(emptyString, [isNotEmpty])); // Should return false

const invalidEmail = 'example@com';
console.log(validateInput(invalidEmail, [isNotEmpty, isEmail])); // Should return false

console.log(
  'validateInput(1, [isNumber, isPositive, isInteger]) = ' +
    validateInput(1, [isNumber, isPositive, isInteger]),
);
console.log(
  'validateInput(-2.5, [isNumber]) = ' + validateInput(-2.5, [isNumber]),
);

let w = 'world';
let a = '<h1>hello ' + w + '!</h1>'; // hardly readable
a = `hello ${w} !`; // better!
