const products = [
    { name: 'laptop', price: 4000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 6000, brand: 'casio', color: 'yellow' },
    { name: 'sunglass', price: 300, brand: 'rebon', color: 'black' },
    { name: 'camera', price: 14000, brand: 'canon', color: 'gray' },
]

const brand = products.map(product => product.brand);
// console.log(brand);
const prices = products.map(product => product.price);
// console.log(prices);

// products.forEach(product => console.log(product));
// products.forEach(product => console.log(product.brand));

// 3. filter
const cheap = products.filter(product => product.price <= 5000);
// console.log(cheap);

const specificName = products.filter(p => p.name.includes('n'));
// console.log(specificName);

const special = products.find(p => p.name.includes('a'));
console.log(special);