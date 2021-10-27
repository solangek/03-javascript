const name = 'Max';
let price = 29;
const onSale = true;

age = 30;

const summarizeUser = (userName, price, onsale) => {
    return (
        'Name is ' +  userName +
        ', price is ' + price +
        ' is on sale: ' + onsale
    );
};

const add = (a, b) => a + b;
const addOne = a => a + 1;
const addRandom = () => 1 + 2;

console.log(add(1, 2));
console.log(addOne(1));
console.log(addRandom());

console.log(summarizeUser(name, price, onSale));
