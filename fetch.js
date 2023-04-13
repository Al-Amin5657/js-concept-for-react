// JSON: stringify, parse
const student = {
    name: 'sakin Khan',
    age: 32,
    movies: ['king khan', 'dhakar mastan']
}
const studentJSON = JSON.stringify(student);
console.log(student)
console.log(studentJSON)

const studentObj = JSON.parse(studentJSON);
console.log(studentObj);

// fetch
// fetch(url)
//     .then(res => res.json())
//     .then(data => console.log(data))

// keys, values

const keys = Object.keys(student);
const values = Object.values(student);

// for
const numbers = [23, 45, 56, 67, 88, , 90];
numbers.forEach(num => console.log(num));
numbers.map(num => num * 2);

// for of on array like obj
// for in an obj

// add or remove form an array
const products = [
    { name: 'laptop', price: 4000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 6000, brand: 'casio', color: 'yellow' },
    { name: 'sunglass', price: 300, brand: 'rebon', color: 'black' },
    { name: 'camera', price: 14000, brand: 'canon', color: 'gray' },
]

const newProduct = { name: 'webcame', price: 700, brand: 'hikvision' };
const newProducts = [...products, newProduct];
console.log(newProducts);

// create a new array without one specific item
const remaining = products.filter(p => p.name !== 'phone');
console.log(remaining);