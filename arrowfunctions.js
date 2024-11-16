const name = 'Max';
let price = 29;
const onSale = true;

const summarizeUser = (userName, price, onsale) => {
    return (
        'Name is ' +  userName +
        ', price is ' + price +
        ' is on sale: ' + onsale
    );
};

// lambda function returning a value we can omit the return statement
const add = (a, b) => a + b;
// lambda function has only one parameter, we can omit the parentheses
const addOne = a => a + 1;
// lambda function with no parameters
const addRandom = () => 1 + 2;

console.log(add(1, 2));
console.log(addOne(1));
console.log(addRandom());

console.log(summarizeUser(name, price, onSale));
